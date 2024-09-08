import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Eye, Pencil, Trash, ChevronUp } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link, router, usePage } from "@inertiajs/react";
import { DataTableColumnHeader } from "../DataTableColumnHeader";
import { useTrans } from "@/Hooks/useTrans";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";

export type Permission = {
    permission_id: number;
    permission_name: string;
};

export type Role = {
    role_id: number;
    role_name: string;
    permissions: Array<Permission>;
};

export const roleColumns: ColumnDef<Role>[] = [
    {
        accessorKey: "Rôle",
        cell: ({ row }) => {
            const role = row.original;
            return <div>{role.role_name}</div>;
        },
        header: ({ column }) => (
            // <DataTableColumnHeader column={column} title={useTrans("Rôle")} />
            <ColumnHeader title={"Rôle"} />
        ),
    },
    {
        accessorKey: "Permissions",
        cell: ({ row }) => {
            const role = row.original;
            const { width } = useWindowDimensions();
            const [isopen, setIsOpen] = React.useState(false);
            return width >= 767 ? (
                <Dialog open={isopen} onOpenChange={setIsOpen}>
                    <DialogTrigger>{useTrans("Permissions")}</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-left rtl:text-right rtl:pr-4">
                                {useTrans("List des permissions pour le rôle")}{" "}
                                {role.role_name}
                            </DialogTitle>
                            <DialogDescription className="flex flex-wrap">
                                {role.permissions.map((permission) => (
                                    <span
                                        className="px-2 py-1"
                                        key={permission.permission_id}
                                    >
                                        {permission.permission_name}
                                    </span>
                                ))}
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setIsOpen(false)}
                            >
                                {useTrans("Annuler")}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            ) : (
                <Drawer open={isopen} onOpenChange={setIsOpen}>
                    <DrawerTrigger>{useTrans("Permissions")} </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle className="text-left rtl:text-right">
                                {useTrans("List des permissions pour le rôle")}{" "}
                                {role.role_name}{" "}
                            </DrawerTitle>
                            <DrawerDescription className="flex flex-wrap">
                                {role.permissions.map((permission) => (
                                    <span
                                        className="px-2 py-1"
                                        key={permission.permission_id}
                                    >
                                        {permission.permission_name}
                                    </span>
                                ))}
                            </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter className="pt-2">
                            <DrawerClose asChild>
                                <Button variant="outline">
                                    {useTrans("Annuler")}
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            );
        },
        header: ({ column }) => (
            // <DataTableColumnHeader
            //     column={column}
            //     title={useTrans("Permissions")}
            // />
            <ColumnHeader title={"Permissions"} />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const role = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const role_permission = usePage().props.role_permission;

            const handleDelete = () => {
                router.delete(route("roles.destroy", role.role_id), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        setopen(false);
                        setIsOpen(false);
                    },
                });
            };
            return (
                <DropdownMenu
                    open={isopen ? true : open}
                    onOpenChange={() => setopen(!open)}
                >
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {role_permission.update && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("roles.edit", role.role_id)}
                                    className="flex"
                                >
                                    <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    <span>{useTrans("Modifier")}</span>
                                </Link>
                            </DropdownMenuItem>
                        )}
                        {role_permission.delete && (
                            <DropdownMenuItem>
                                {width >= 767 ? (
                                    <Dialog
                                        open={isopen}
                                        onOpenChange={setIsOpen}
                                    >
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
                                                    {useTrans(
                                                        "Vous êtes sure?"
                                                    )}{" "}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {useTrans(
                                                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions"
                                                    )}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="gap-2 ">
                                                <Button
                                                    variant="secondary"
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                >
                                                    {useTrans("Annuler")}
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDelete()
                                                    }
                                                    className="flex justify-center"
                                                >
                                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                                    {useTrans("Supprimer")}
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Drawer
                                        open={isopen}
                                        onOpenChange={setIsOpen}
                                    >
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
                                                    {useTrans(
                                                        "Vous êtes sure?"
                                                    )}{" "}
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    {useTrans(
                                                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce rôle, les utilisateur avec ce rôle sera prendre le rôle de simple admin et perdre tous leur permissions"
                                                    )}{" "}
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter className="pt-2">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDelete()
                                                    }
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
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
