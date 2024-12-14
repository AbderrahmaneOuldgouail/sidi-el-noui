import React, { useEffect } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import PromotionCard from "@/Components/Admin/Promotions/PromotionCard";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { TicketMinus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Promotions({ promotions, promotion_permission }) {
    const { t } = useTranslation("translation", { keyPrefix: "promotions" });
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const [processing, setProcessing] = React.useState(false);

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            <div className="flex justify-end">
                {promotion_permission.create && (
                    <Button
                        variant="secondary"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("promotions.create"),
                                {},
                                {
                                    onStart: () => {
                                        setProcessing(true);
                                    },
                                    onFinish: () => {
                                        setProcessing(false);
                                    },
                                }
                            )
                        }
                    >
                        {t("createBtn")}
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                {promotions.length ? (
                    <>
                        <div className="font-bold p-4">{t("pageHeading")}</div>
                        {promotions.map((promo) => (
                            <PromotionCard
                                promotion={promo}
                                key={promo.promotion_id}
                            />
                        ))}
                    </>
                ) : (
                    <EmptyPage text={t("emptyPromotions")} icon={TicketMinus} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
