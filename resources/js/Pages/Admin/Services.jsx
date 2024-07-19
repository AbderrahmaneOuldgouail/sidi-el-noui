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

export default function Services() {
    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading title={"Services"}/>
            <PlaceholderContent>Services</PlaceholderContent>
        </AdminPanelLayout>
    );
}
