import React from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

export default function EditRole({ role, permissions }) {
    const { data, setData, put, errors } = useForm({
        name: role.name,
        prevName: role.name,
        permissions: ["show room", "edit room", "delete room", "create room"],
    });
    const getPermissions = () => {
        router.reload({ only: ["permissions"] });
    };
    const submit = (e) => {
        e.preventDefault();
        put(route("roles.update", role.id));
    };

    // console.log(permissions);
    // console.log(role);
    console.log(errors);
    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            <PlaceholderContent>
                <Button onClick={() => getPermissions()}>permissions</Button>
                <form onSubmit={submit}>
                    <Input
                        className="ml-4 w-full"
                        placeholder="Example : Restaurant"
                        id="name"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />
                    <Button onClick={() => submit()}>Edit Role </Button>
                </form>
                {/* {roles.data.map((role) => (
                    <div key={role.id}>{role.name}</div>
                ))} */}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
