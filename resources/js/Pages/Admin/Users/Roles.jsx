import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";

export default function Roles({ roles }) {
    const props = usePage().props;
    console.log(props.errors);
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            <div className="flex justify-end">
                <Button variant="secondary">
                    <Link href={route("roles.create")}>Créer un rôle</Link>
                </Button>
            </div>
            <PlaceholderContent>
                {roles.data.map((role) => (
                    <div key={role.id}>
                        <Link href={route("roles.show", role.id)}>
                            {role.name} show
                        </Link>
                        <br></br>
                        <Link href={route("roles.edit", role.id)}>
                            {role.name} edit
                        </Link>
                        <br />
                        <Button variant="destructive">
                            <Link
                                href={route("roles.destroy", role.id)}
                                as="button"
                                method="delete"
                                className=" flex w-full"
                            >
                                Supprimer
                            </Link>
                        </Button>
                        <hr />
                    </div>
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
