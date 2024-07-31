import React from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";

export default function CreateRole({ permissions }) {
    const { data, setData, post, errors } = useForm({
        name: "company",
        permissions: ["booking-show"],
    });
    // const props = usePage().props;
    console.log(permissions);
    const getPermissions = () => {
        router.reload({ only: ["permissions"] });
    };

    const submit = () => {
        post(route("roles.store", data));
    };
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            {/* <div className="flex justify-end">
                <Button variant="secondary">
                    <Link href={route("roles.create")}>Créer un rôle</Link>
                </Button>
            </div> */}
            <PlaceholderContent>
                <Button onClick={() => getPermissions()}>permissions</Button>
                <Button onClick={() => submit()}>Creae Role </Button>
                {/* {roles.data.map((role) => (
                    <div key={role.id}>{role.name}</div>
                ))} */}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
