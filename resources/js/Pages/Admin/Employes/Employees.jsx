import React, { useEffect } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/Admin/DataTable";
import { userColumns } from "@/Components/Admin/Users/UserColumns";
import { useToast } from "@/Components/ui/use-toast";
import { useTranslation } from "react-i18next";

export default function Employees({ users }) {
    const { t } = useTranslation("translation", { keyPrefix: "users" });
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const [processing, setProcessing] = React.useState(false);
    const employ_permission = usePage().props.auth.permissions.employ;

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
                {employ_permission.create && (
                    <Button
                        variant="secondary"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("users.create"),
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
                        {t("createBtn")}{" "}
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                <DataTable
                    columns={userColumns}
                    data={users.data}
                    paginate={users}
                    selection={false}
                />
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
