import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";

export default function Facture({ facture }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const permissions = usePage().props.auth.permissions;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    console.log(facture);
    return (
        <AdminPanelLayout>
            <Head title="Facture" />
            <PageHeading title={"Facture"} />
            <PlaceholderContent>Facture</PlaceholderContent>
        </AdminPanelLayout>
    );
}
