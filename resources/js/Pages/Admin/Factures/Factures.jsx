import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { factureColumns } from "@/Components/Admin/Factures/FactureColumns";
import { useToast } from "@/Components/ui/use-toast";

export default function Factures({ factures }) {
        const { toast } = useToast();
        const flash = usePage().props.flash;
        const permissions = usePage().props.auth.permissions;

        useEffect(() => {
            if (flash.message) {
                toast({ description: flash.message?.message });
            }
        }, [flash.message, toast]);
    console.log(factures);
    return (
        <AdminPanelLayout>
            <Head title="Factures" />
            <PageHeading title={"Factures"} />
            
            <PlaceholderContent>
                <DataTable
                    columns={factureColumns}
                    data={factures.data}
                    paginate={factures}
                    selection={false}
                />
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
