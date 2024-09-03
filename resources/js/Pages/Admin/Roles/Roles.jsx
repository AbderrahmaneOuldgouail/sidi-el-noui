import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";
import { DataTable } from "@/Components/Admin/DataTable";
import { roleColumns } from "@/Components/Admin/Roles/RolesColumns";
import { useToast } from "@/Components/ui/use-toast";

export default function Roles({ roles, role_permission }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title={useTrans("Rôles")} />
            <div className="flex justify-end">
                {role_permission.create && (
                    <Button variant="secondary">
                        <Link href={route("roles.create")}>
                            {useTrans("Ajouter un rôle")}
                        </Link>
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
