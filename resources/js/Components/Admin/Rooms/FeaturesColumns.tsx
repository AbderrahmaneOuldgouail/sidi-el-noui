import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Check, X, Pencil, Eye, MoreHorizontal, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Input } from "@/Components/ui/input";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/Components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Link, router, useForm } from "@inertiajs/react";
import { DataTableColumnHeader } from "../DataTableColumnHeader";
import { Checkbox } from "@/Components/ui/checkbox";
import { useTrans } from "@/Hooks/useTrans";
import { Badge } from "@/Components/ui/badge";
import DeleteeDialog from "../Shared/DeleteDialog";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";

export type Feature = {
    feature_id: number;
    features_name: string;
    need_value: boolean;
    category: {
        categorie_name: string;
        categorie_id: number;
    };
};

export const featuresColumns: ColumnDef<Feature>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "Nom",
        cell: ({ row }) => {
            const features = row.original;
            return <span> {features.features_name}</span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Nom de caractéristique")}
            />
        ),
    },
    {
        accessorKey: "Valeur",
        cell: ({ row }) => {
            const feature = row.original;
            return (
                <span>
                    {" "}
                    {feature.need_value ? (
                        <Badge variant="success">
                            <Check size={18} />
                        </Badge>
                    ) : (
                        <Badge variant="danger">
                            <X size={18} />
                        </Badge>
                    )}{" "}
                </span>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Besoin de valeur")}
            />
        ),
    },
    {
        accessorKey: "Categorie",
        cell: ({ row }) => {
            const feature = row.original;
            return <span>{feature.category.categorie_name}</span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Catégorie")}
            />
        ),
    },
    {
        id: "actions",
        header: ({ table }) => (
            <Button
                variant="ghost"
                disabled={
                    !(
                        table.getIsAllRowsSelected() ||
                        table.getIsSomePageRowsSelected()
                    )
                }
            >
                <Link
                    href={route("features.destroy", 1)}
                    className=" flex w-full"
                >
                    <Trash className="mr-2 h-3.5 w-3.5" />
                    {table.getIsAllRowsSelected() ||
                    table.getIsSomePageRowsSelected()
                        ? useTrans("Supprimer tous")
                        : ""}
                </Link>
            </Button>
        ),
        cell: ({ row }) => {
            const feature = row.original;
            const [isopen, setIsOpen] = React.useState(false);
            const [Editopen, setEditOpen] = React.useState(false);
            const [open, setopen] = React.useState(false);
            const { width } = useWindowDimensions();

            const { data, setData, put, errors } = useForm({
                features_name: feature.features_name,
                categorie_id: feature.category.categorie_id,
                need_value: feature.need_value,
            });

            const submit = (e) => {
                e.preventDefault();
                put(route("features.update", feature.feature_id), {
                    onSuccess: () => {
                        setopen(false);
                        setEditOpen(false);
                    },
                });
            };
            const handleDelete = () => {
                router.delete(route("features.destroy", feature.feature_id), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        setIsOpen(false);
                        setopen(false);
                    },
                });
            };
            return (
                <DropdownMenu
                    open={isopen || Editopen ? true : open}
                    onOpenChange={() => setopen(!open)}
                >
                    <DropdownMenuTrigger>
                        <Button variant="ghost" className="h-8 ">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            {width >= 767 ? (
                                <Dialog
                                    open={Editopen}
                                    onOpenChange={setEditOpen}
                                >
                                    <DialogTrigger className="flex justify-center">
                                        <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                        <span>{useTrans("Modifier")}</span>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                {useTrans(
                                                    "Modifier cette caractéristique"
                                                )}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {useTrans(
                                                    "Modifier cette caractéristique"
                                                )}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form
                                            className="grid items-start gap-4 px-4"
                                            onSubmit={submit}
                                        >
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="features_name"
                                                    value={useTrans(
                                                        "Nom de caractéristique"
                                                    )}
                                                />
                                                <Input
                                                    placeholder={useTrans(
                                                        "Example : wifi, dimension"
                                                    )}
                                                    id="features_name"
                                                    value={data.features_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "features_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.features_name
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="categorie_id"
                                                    value={useTrans(
                                                        "Catégorie"
                                                    )}
                                                />
                                                <Input
                                                    id="categorie_id"
                                                    disabled
                                                    value={
                                                        feature.category
                                                            .categorie_name
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.categorie_id
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <Checkbox
                                                    id="need_value"
                                                    checked={data.need_value}
                                                    onCheckedChange={() =>
                                                        setData(
                                                            "need_value",
                                                            !data.need_value
                                                        )
                                                    }
                                                />
                                                <InputLabel
                                                    htmlFor="need_value"
                                                    value={useTrans(
                                                        "Besoin de valeur"
                                                    )}
                                                />
                                            </div>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                            >
                                                {useTrans("Enregistrer")}
                                            </Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Drawer
                                    open={Editopen}
                                    onOpenChange={setEditOpen}
                                >
                                    <DrawerTrigger className="flex justify-center">
                                        <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                        <span>{useTrans("Modifier")}</span>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>
                                                {useTrans(
                                                    "Modifier cette caractéristique"
                                                )}
                                            </DrawerTitle>
                                            <DrawerDescription>
                                                {useTrans(
                                                    "Modifier cette caractéristique"
                                                )}
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <form
                                            className="grid items-start gap-4 px-4"
                                            onSubmit={submit}
                                        >
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="features_name"
                                                    value={useTrans(
                                                        "Nom de caractéristique"
                                                    )}
                                                />
                                                <Input
                                                    placeholder={useTrans(
                                                        "Example : wifi, dimension"
                                                    )}
                                                    id="features_name"
                                                    value={data.features_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "features_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.features_name
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="categorie_id"
                                                    value={useTrans(
                                                        "Catégorie"
                                                    )}
                                                />
                                                <Input
                                                    id="categorie_id"
                                                    disabled
                                                    value={
                                                        feature.category
                                                            .categorie_name
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.categorie_id
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <Checkbox
                                                    id="need_value"
                                                    checked={data.need_value}
                                                    onCheckedChange={() =>
                                                        setData(
                                                            "need_value",
                                                            !data.need_value
                                                        )
                                                    }
                                                />
                                                <InputLabel
                                                    htmlFor="need_value"
                                                    value={useTrans(
                                                        "Besoin de valeur"
                                                    )}
                                                />
                                            </div>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                            >
                                                {useTrans("Enregistrer")}
                                            </Button>
                                        </form>
                                        <DrawerFooter className="pt-2">
                                            <DrawerClose asChild>
                                                <Button variant="outline">
                                                    {useTrans("Annuler")}
                                                </Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            {width >= 767 ? (
                                <Dialog open={isopen} onOpenChange={setIsOpen}>
                                    <DialogTrigger
                                        className={buttonVariants({
                                            variant: "destructive",
                                        })}
                                    >
                                        <Trash className="mr-2 h-3.5 w-3.5 " />
                                        {useTrans("Supprimer")}
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                {useTrans("Vous êtes sure?")}{" "}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {useTrans(
                                                    "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre"
                                                )}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter className="gap-2 ">
                                            <Button
                                                variant="secondary"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {useTrans("Annuler")}
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete()}
                                                className="flex justify-center"
                                            >
                                                <Trash className="mx-2 h-3.5 w-3.5" />
                                                {useTrans("Supprimer")}
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Drawer open={isopen} onOpenChange={setIsOpen}>
                                    <DrawerTrigger
                                        className={buttonVariants({
                                            variant: "destructive",
                                        })}
                                    >
                                        <Trash className="mr-2 h-3.5 w-3.5 " />
                                        {useTrans("Supprimer")}
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>
                                                {useTrans("Vous êtes sure?")}{" "}
                                            </DrawerTitle>
                                            <DrawerDescription>
                                                {useTrans(
                                                    "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette caractéristique et chaque chambre avoir cette caractéristique va le perdre"
                                                )}{" "}
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <DrawerFooter className="pt-2">
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete()}
                                                className="flex justify-center"
                                            >
                                                <Trash className="mx-2 h-3.5 w-3.5" />
                                                {useTrans("Supprimer")}
                                            </Button>
                                            <DrawerClose asChild>
                                                <Button variant="outline">
                                                    {useTrans("Annuler")}
                                                </Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
