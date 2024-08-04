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

export default function EditRole({ role, permissions }) {
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [groupedPermissions, setGroupedPermissions] = useState([]);

    const { data, setData, put, errors } = useForm({
        role_name: role.role_name,
        prevName: role.name,
        permissions: [],
    });

    const groupPermissionsByEntity = role.permissions.reduce(
        (acc, permission) => {
            const { entity, ...rest } = permission;
            acc[entity] = acc[entity] || [];
            acc[entity].push(rest);
            return acc;
        },
        {}
    );

    useEffect(() => {
        const groupPermissions = (permissions) => {
            return permissions.reduce((acc, permission) => {
                const { entity, ...rest } = permission;
                acc[entity] = acc[entity] || [];
                acc[entity].push(rest);
                return acc;
            }, {});
        };

        const formattedPermissions = Object.entries(
            groupPermissions(permissions)
        ).map(([entity, actions]) => ({
            entity,
            actions,
        }));

        setGroupedPermissions(formattedPermissions);
    }, [permissions]);ù

    // useEffect(() => {
    //     const groupPermissions = (permissions) => {
    //         return permissions.reduce((acc, permission) => {
    //             const { entity, action } = permission;
    //             const existingEntity = acc.find(
    //                 (group) => group.entity === entity
    //             );

    //             if (existingEntity) {
    //                 existingEntity.actions.push(action);
    //             } else {
    //                 acc.push({ entity, actions: [action] });
    //             }

    //             return acc;
    //         }, []);
    //     };

    //     setGroupedPermissions(groupPermissions(permissions));
    // }, [permissions]);

    // console.log(role.permissions.map((permission) => permission.permission_id));
    console.log(groupedPermissions);

    const handleCheckboxChange = (entity, actionId, isChecked) => {
        const updatedSelectedPermissions = [...selectedPermissions];
        const permissionIndex = selectedPermissions.findIndex(
            (perm) => perm.entity === entity
        );
        if (isChecked) {
            if (permissionIndex === -1) {
                updatedSelectedPermissions.push({
                    entity,
                    actions: [actionId],
                });
            } else {
                updatedSelectedPermissions[permissionIndex].actions.push(
                    actionId
                );
            }
        } else {
            if (permissionIndex !== -1) {
                const actions = updatedSelectedPermissions[
                    permissionIndex
                ].actions.filter((id) => id !== actionId);
                if (actions.length === 0) {
                    updatedSelectedPermissions.splice(permissionIndex, 1);
                } else {
                    updatedSelectedPermissions[permissionIndex].actions =
                        actions;
                }
            }
        }

        setSelectedPermissions(updatedSelectedPermissions);
        setData("permissions", updatedSelectedPermissions);
    };

    const handleEntityCheck = (entity, isChecked) => {
        const updatedSelectedPermissions = [...selectedPermissions];
        const permissionIndex = selectedPermissions.findIndex(
            (perm) => perm.entity === entity
        );
        if (isChecked) {
            if (permissionIndex !== -1) {
                updatedSelectedPermissions.splice(permissionIndex, 1);
            }
            updatedSelectedPermissions.push({
                entity,
                actions: permissions
                    .find((p) => p.entity == entity)
                    .actions.map((a) => a.permission_id),
            });
        } else {
            updatedSelectedPermissions.splice(permissionIndex, 1);
        }
        setSelectedPermissions(updatedSelectedPermissions);
        setData("permissions", updatedSelectedPermissions);
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("roles.update", role.role_id));
    };

    // console.log(selectedPermissions);

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
                                    {permissions[0].actions.map((action) => (
                                        <div
                                            key={action.permission_id}
                                            className="flex items-center mb-2"
                                        >
                                            <InputLabel htmlFor={action.action}>
                                                {action.action}
                                            </InputLabel>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {permissions.map((permission) => (
                                <div
                                    key={permission.entity}
                                    className="mb-4 flex gap-2 bg-card p-2 rounded"
                                >
                                    <Checkbox
                                        id={permission.entity}
                                        checked={
                                            selectedPermissions.find(
                                                (perm) =>
                                                    perm.entity ==
                                                    permission.entity
                                            )?.actions.length == 4
                                        }
                                        onCheckedChange={(e) =>
                                            handleEntityCheck(
                                                permission.entity,
                                                e
                                            )
                                        }
                                    />
                                    <InputLabel
                                        htmlFor={permission.entity}
                                        className="w-1/4 "
                                    >
                                        {permission.entity}
                                    </InputLabel>
                                    <div className="flex justify-between w-3/4">
                                        {permission.actions.map((action) => (
                                            <div
                                                key={action.permission_id}
                                                className="flex items-center mb-2"
                                            >
                                                <Checkbox
                                                    id={action.permission_id}
                                                    checked={selectedPermissions.some(
                                                        (perm) =>
                                                            perm.entity ===
                                                                permission.entity &&
                                                            perm?.actions.includes(
                                                                action.permission_id
                                                            )
                                                    )}
                                                    onCheckedChange={(e) =>
                                                        handleCheckboxChange(
                                                            permission.entity,
                                                            action.permission_id,
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <InputError
                                message={errors.permissions}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Créer")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
