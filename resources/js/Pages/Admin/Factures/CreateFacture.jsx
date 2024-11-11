import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

export default function CreateFacture() {
    return (
        <AdminPanelLayout>
            <Head title="Facture Création" />

            <Head>
                <title>Facture Création</title>
                <meta
                    name="description"
                    content="Créez et gérez facilement vos factures pour une gestion simplifiée des réservations à l'hôtel Sidi El Noui."
                />
            </Head>
            <PageHeading title={"Facture Création"} />
            <PlaceholderContent>Facture Création </PlaceholderContent>
        </AdminPanelLayout>
    );
}
