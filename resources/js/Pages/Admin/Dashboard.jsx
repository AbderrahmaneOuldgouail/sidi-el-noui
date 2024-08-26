import React from "react";
import { Head, usePage } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";

export default function Dashboard() {
    const { toast } = useToast();
    console.log(usePage().props);
    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            <PageHeading title={"Tablaux De Bord"} />
            <PlaceholderContent>Dashboard</PlaceholderContent>
        </AdminPanelLayout>
    );
}
