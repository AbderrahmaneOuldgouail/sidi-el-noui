import React, { useEffect } from "react";
import { Head, usePage, router } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useToast } from "@/Components/ui/use-toast";
import ServiceCard from "@/Components/Admin/Services/ServiceCard";
import { Button } from "@/Components/ui/button";
import { HandPlatter } from "lucide-react";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { useTranslation } from "react-i18next";

export default function Services({ services, service_permission }) {
    const { toast } = useToast();
    const [process, setProcess] = React.useState(false);
    const { t } = useTranslation("translation", { keyPrefix: "services" });

    const flash = usePage().props.flash;

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
                {service_permission.create && (
                    <Button
                        variant="secondary"
                        disabled={process}
                        onClick={() =>
                            router.get(
                                route("services.create"),
                                {},
                                {
                                    onStart: () => {
                                        setProcess(true);
                                    },
                                    onFinish: () => {
                                        setProcess(false);
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
                {services.length ? (
                    <>
                        <div className="font-bold p-4">{t("listHeader")}</div>
                        {services.map((service) => (
                            <div key={service.service_id}>
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </>
                ) : (
                    <EmptyPage text={t("emptyServices")} icon={HandPlatter} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
