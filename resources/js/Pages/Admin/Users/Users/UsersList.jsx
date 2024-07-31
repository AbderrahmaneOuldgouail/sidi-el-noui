import React from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export default function UsersList({ users, roles }) {
    const { data, setData, put, errors } = useForm({
        role: roles[3].name,
    });

    const update = (id) => {
        put(route("users.update", id));
    };
    console.log(roles);

    return (
        <AdminPanelLayout>
            <Head title="Utilisateurs" />
            <PageHeading title="Utilisateurs" />
            <div className="flex justify-end">
                <Button variant="secondary">
                    <Link href={route("users.create")}>Ajouter un emploié</Link>
                </Button>
            </div>
            <PlaceholderContent>
                {users.data.map((user) => (
                    <div key={user.id}>
                        <div>
                            {user.first_name} {user.last_name}{" "}
                        </div>
                        <div>{user.email} </div>
                        <div>{user.phone} </div>
                        <div>{user.roles[0].name} </div>
                        <Input type="hidden" value={data.role} />
                        <Button onClick={() => update(user.id)}>edit</Button>
                        <Button variant="destructive">
                            <Link
                                href={route("users.destroy", user.id)}
                                method="delete"
                                as="button"
                            >
                                supprimer
                            </Link>
                        </Button>
                        <hr />
                    </div>
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
