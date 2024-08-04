import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";

export default function Role({ role }) {
    // const props = usePage().props;
    console.log(role);
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            <PlaceholderContent>
                <div>{role.name} </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
