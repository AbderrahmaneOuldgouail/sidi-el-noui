import React, { useState, useEffect } from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";
import InputLabel from "@/Components/InputLabel";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Separator } from "@/Components/ui/separator";
import { Checkbox } from "@/Components/ui/checkbox";

export default function EditRole({ role, permissions, permissions_actions }) {
    const { data, setData, put, errors } = useForm({
        role_name: role.role_name,
        prevName: role.name,
        permissions: role.permissions.map(
            (permission) => permission.permission_id
        ),
    });

    const handleCheckboxChange = (id) => {
        if (data.permissions.includes(id)) {
            setData(
                "permissions",
                data.permissions.filter((permissionId) => permissionId !== id)
            );
        } else {
            setData("permissions", [...data.permissions, id]);
        }
    };

    const handleAllPermissionsCheck = (entity, e) => {
        if (e) {
            permissions.map((permission) =>
                permission.permission_name.split("-")[0] == entity &&
                data.permissions.find((p) => p == permission.permission_id)
                    ? setData((data) => {
                          data.permissions.splice(
                              data.permissions.findIndex(
                                  (p) => p == permission.permission_id
                              ),
                              1
                          );
                          return { ...data };
                      })
                    : null
            );
            permissions.map((permission) =>
                permission.permission_name.split("-")[0] == entity
                    ? setData((data) => {
                          data.permissions.push(permission.permission_id);
                          return { ...data };
                      })
                    : null
            );
        } else {
            permissions.forEach(
                (permission) =>
                    permission.permission_name.split("-")[0] == entity &&
                    setData((data) => {
                        data.permissions.splice(
                            data.permissions.indexOf(
                                data.permissions.find(
                                    (p) => p == permission.permission_id
                                )
                            ),
                            1
                        );
                        return { ...data };
                    })
            );
        }
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("roles.update", role.role_id));
    };

    console.log(errors);

    return (
        <AdminPanelLayout>
            <Head title="Rools" />
            <PageHeading title="Roles" />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="role_name"
                                value={useTrans("Nom de rôle")}
                            />
                            <LabelDescreption>
                                {useTrans("Le nom de rôle doit être unique")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="role_name"
                                value={useTrans("Nom de rôle")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="role_name"
                                value={data.role_name}
                                onChange={(e) =>
                                    setData("role_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.role_name}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4 ">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                value={useTrans("List des permissions")}
                            />
                            <LabelDescreption>
                                {useTrans("Assigner des permissions a ce rôle")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <div className="mb-4 flex bg-card p-2 rounded">
                                <InputLabel
                                    htmlFor="permissions"
                                    className="w-1/4 "
                                    value={useTrans("List des permissions")}
                                />
                                <div className="flex justify-between w-3/4">
                                    {permissions_actions.map((action) => (
                                        <div
                                            key={action}
                                            className="flex items-center mb-2"
                                        >
                                            <InputLabel htmlFor={action}>
                                                {action}
                                            </InputLabel>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {permissions.map((permission, idx) => (
                                <div key={idx}>
                                    {permissions[idx] != 0 &&
                                        permissions[
                                            idx - 1
                                        ]?.permission_name.split("-")[0] !=
                                            permission.permission_name.split(
                                                "-"
                                            )[0] && (
                                            <div className="mb-4 flex bg-card p-2 rounded">
                                                <div className="flex gap-2 w-1/4">
                                                    <Checkbox
                                                        id={
                                                            permission.permission_name
                                                        }
                                                        checked={permissions
                                                            .filter(
                                                                (per) =>
                                                                    per.permission_name.split(
                                                                        "-"
                                                                    )[0] ==
                                                                    permission.permission_name.split(
                                                                        "-"
                                                                    )[0]
                                                            )
                                                            .every((element) =>
                                                                data.permissions.includes(
                                                                    element.permission_id
                                                                )
                                                            )}
                                                        onCheckedChange={(e) =>
                                                            handleAllPermissionsCheck(
                                                                permission.permission_name.split(
                                                                    "-"
                                                                )[0],
                                                                e
                                                            )
                                                        }
                                                    />
                                                    <InputLabel
                                                        htmlFor={
                                                            permission.permission_name.split(
                                                                "-"
                                                            )[0]
                                                        }
                                                    >
                                                        {
                                                            permission.permission_name.split(
                                                                "-"
                                                            )[0]
                                                        }
                                                    </InputLabel>
                                                </div>
                                                <div className="flex justify-between w-3/4">
                                                    {permissions.map(
                                                        (perm) =>
                                                            perm.permission_name.split(
                                                                "-"
                                                            )[0] ==
                                                                permission.permission_name.split(
                                                                    "-"
                                                                )[0] && (
                                                                <div>
                                                                    <Checkbox
                                                                        id={
                                                                            perm.permission_id
                                                                        }
                                                                        checked={data.permissions.includes(
                                                                            perm.permission_id
                                                                        )}
                                                                        onCheckedChange={() =>
                                                                            handleCheckboxChange(
                                                                                perm.permission_id
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            )
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Modifier")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
