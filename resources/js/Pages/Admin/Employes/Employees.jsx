import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { DataTable } from "@/Components/Admin/DataTable";
import { userColumns } from "@/Components/Admin/Users/UserColumns";
import { useTrans } from "@/Hooks/useTrans";
import { useToast } from "@/Components/ui/use-toast";

export default function Employees({ users, employ_permission }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title="Employees" />
            <PageHeading title={useTrans("Employés")} />
            <div className="flex justify-end">
                {employ_permission.create && (
                    <Button variant="secondary">
                        <Link href={route("users.create")}>
                            {useTrans("Ajouter un employé")}{" "}
                        </Link>
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
