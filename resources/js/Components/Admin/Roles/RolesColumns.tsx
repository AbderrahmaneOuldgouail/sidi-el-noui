import React, { useState } from "react";
import { cn } from "@/lib/utils";
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
import { Badge } from "@/Components/ui/badge";
import { useTrans } from "@/Hooks/useTrans";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";

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
            <DataTableColumnHeader column={column} title={useTrans("Rôle")} />
        ),
    },
    {
        accessorKey: "Permissions",
        cell: ({ row }) => {
            const role = row.original;
            const [open, setOpen] = useState(false);
            return (
                <Collapsible>
                    <CollapsibleTrigger
                        onClick={() => setOpen(!open)}
                        className="flex gap-2"
                    >
                        <div>Permissions</div>
                        <ChevronUp
                            className={cn(
                                "h-4 w-4 transition-transform ease-in-out duration-700",
                                open === false ? "rotate-180" : "rotate-0"
                            )}
                        />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        {role.permissions.map((permission) => (
                            <div key={permission.permission_id}>
                                {permission.permission_name}
                            </div>
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Permissions")}
            />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const role = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const permissions = usePage().props.auth.permissions;

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
                        {permissions.role.update && (
                            <DropdownMenuItem>
                                <Link href={route("roles.edit", role.role_id)}>
                                    <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    <span>{useTrans("Modifier")}</span>
                                </Link>
                            </DropdownMenuItem>
                        )}
                        {permissions.role.delete && (
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
