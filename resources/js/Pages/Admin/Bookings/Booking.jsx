import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

export default function Booking({ booking }) {
    console.log(booking);
    return (
        <AdminPanelLayout>
            <Head title="Réservation" />
            <PageHeading title={"Réservation de .."} />
            <PlaceholderContent>Chambre </PlaceholderContent>
        </AdminPanelLayout>
    );
}
