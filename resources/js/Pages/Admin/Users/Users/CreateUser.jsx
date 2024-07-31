import React from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";

export default function CreateUser({ roles }) {
    const { data, setData, post, errors } = useForm({
        first_name: "islam",
        last_name: "islam",
        email: "islam@gmail.com",
        phone: "0540302090",
        role: roles[0].name,
    });
    console.log(errors);
    const getRoles = () => {
        router.reload({ only: ["roles"] });
    };

    const submit = () => {
        post(route("users.store", data));
    };
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            <PlaceholderContent>
                <Button onClick={() => getRoles()}>roles</Button>
                <Button onClick={() => submit()}>Creae User </Button>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
