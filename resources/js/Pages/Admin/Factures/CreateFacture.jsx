import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

export default function CreateFacture() {
    return (
        <AdminPanelLayout>
            <Head title="Facture Création" />
            <PageHeading title={"Facture Création"} />
            <PlaceholderContent>Facture Création </PlaceholderContent>
        </AdminPanelLayout>
    );
}
