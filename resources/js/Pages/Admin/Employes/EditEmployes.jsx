import React, { useState } from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Button } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { useTrans } from "@/Hooks/useTrans";
import { Separator } from "@/Components/ui/separator";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";

export default function EditEmployes({ roles, user }) {
    const [open, setOpen] = useState(false);
    const { data, setData, put, errors } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        role: user.role.role_name,
    });
    const submit = (e) => {
        e.preventDefault();
        put(route("users.update", user.id));
    };
    return (
        <AdminPanelLayout>
            <Head title="Employes" />
            <PageHeading
                title={useTrans("Modification les infromation d'employé")}
            />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4 gap-4">
                        <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="first_name"
                                value={useTrans("Prénom d'employé")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="first_name"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.first_name}
                                className="mt-2"
                            />
                        </div>
                        <Separator className="md:hidden my-4" />
                        <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="last_name"
                                value={useTrans("Nom d'employé")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.last_name}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="email"
                                value={useTrans("Email d'employé")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "L'email doit être unique pour chaque utilisateur"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="email"
                                value={useTrans("Email d'employé")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="phone"
                                value={useTrans("N° téléphone d'employé")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Le N° téléphone doit être unique pour chaque utilisateur"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="phone"
                                value={useTrans("N° téléphone d'employé")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.phone}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="role"
                                value={useTrans("Rôle")}
                            />
                            <LabelDescreption>
                                {useTrans("Assigne un role au ce employé")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="role"
                                value={useTrans("Rôle")}
                                className="mb-2"
                            />
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between"
                                    >
                                        {data.role
                                            ? data.role
                                            : useTrans(
                                                  "Sélectionner un role..."
                                              )}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Command>
                                        <CommandInput
                                            placeholder={useTrans(
                                                "Chercher un role..."
                                            )}
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                Auccun role
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {roles.map((role) => (
                                                    <CommandItem
                                                        key={role.id}
                                                        value={role.role_name}
                                                        onSelect={() => {
                                                            setData(
                                                                "role",
                                                                role.role_name
                                                            );
                                                            setOpen(false);
                                                        }}
                                                    >
                                                        {role.role_name}
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4",
                                                                data.role ===
                                                                    role.role_name
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <InputError
                                message={errors.role}
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
                            {useTrans("Enregistrer")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
