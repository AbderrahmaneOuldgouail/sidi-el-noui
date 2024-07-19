import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import PageHeading from "@/Components/Admin/Shared/PageHeading";

export default function Room({room}) {
    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading title={"La Chambre N° " + room.room_number} />
            <PlaceholderContent>Chambre </PlaceholderContent>
        </AdminPanelLayout>
    );
}
