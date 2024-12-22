import React, { useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";
import ConsommationDialog from "@/Components/Admin/Services/ConsommationDialog";
import ConsommationCard from "@/Components/Admin/Services/ConsommationCard";
import { HandPlatter } from "lucide-react";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { useTranslation } from "react-i18next";

export default function Consumptions({ consumptions, services }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const { t } = useTranslation("translation", { keyPrefix: "consumptions" });

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
                <ConsommationDialog services={services} mode="create" />
            </div>
            <PlaceholderContent>
                {consumptions.length ? (
                    <>
                        <div className="font-bold p-4">{t("listHeader")}</div>
                        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {consumptions.map((consumption) => (
                                <div key={consumption.consumption_id}>
                                    <ConsommationCard
                                        consumption={consumption}
                                        services={services}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyPage
                        text={t("emptyConsumptions")}
                        icon={HandPlatter}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
