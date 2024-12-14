import React, { useEffect } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { factureColumns } from "@/Components/Admin/Factures/FactureColumns";
import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import FactureSettings from "@/Components/Admin/Factures/FactureSettings";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { ReceiptText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Factures({ factures, bill_settings }) {
    const [processing, setProcessing] = React.useState(false);
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const facture_permissions = usePage().props.auth.permissions.facture;
    const { t } = useTranslation("translation", { keyPrefix: "factures" });
    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            {facture_permissions.create && (
                <div className="flex justify-end gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("bookings.index"),
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
                        {t("topBtn")}
                    </Button>
                    <FactureSettings bill_settings={bill_settings} />
                </div>
            )}
            <PlaceholderContent>
                {factures.data.length ? (
                    <DataTable
                        columns={factureColumns}
                        data={factures.data}
                        paginate={factures}
                        selection={false}
                    />
                ) : (
                    <EmptyPage text={t("emptyBill")} icon={ReceiptText} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
