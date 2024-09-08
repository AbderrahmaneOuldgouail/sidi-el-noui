import React from "react";
import { Head } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";

export default function GuestList() {
    return (
        <AdminPanelLayout>
            <Head title="List d'invités" />
            <PlaceholderContent>list</PlaceholderContent>
        </AdminPanelLayout>
    );
}
