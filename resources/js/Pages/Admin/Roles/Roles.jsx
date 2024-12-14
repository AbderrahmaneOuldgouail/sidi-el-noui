import React, { useEffect } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";
import { DataTable } from "@/Components/Admin/DataTable";
import { roleColumns } from "@/Components/Admin/Roles/RolesColumns";
import { useToast } from "@/Components/ui/use-toast";
import { useTranslation } from "react-i18next";

export default function Roles({ roles, role_permission }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const [processing, setProcessing] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "roles",
    });

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
                {role_permission.create && (
                    <Button
                        variant="secondary"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("roles.create"),
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
                        {t("create")}
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                <DataTable
                    columns={roleColumns}
                    data={roles.data}
                    paginate={roles}
                    selection={false}
                />
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
