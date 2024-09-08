import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
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
import { router, usePage } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import { useTrans } from "@/Hooks/useTrans";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";

export type Users = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    created_at: string;
    role: {
        role_name: string;
    };
};

export const userColumns: ColumnDef<Users>[] = [
    {
        accessorKey: "Utilisateurs",
        cell: ({ row }) => {
            const user = row.original;
            return (
                <div>
                    {user.first_name} {user.last_name}
                </div>
            );
        },
        header: () => <ColumnHeader title={"Utilisateurs"} />,
    },
    {
        accessorKey: "Email",
        cell: ({ row }) => {
            const user = row.original;
            return <span>{user.email} </span>;
        },
        header: () => <ColumnHeader title={"Email"} />,
    },
    {
        accessorKey: "N° téléphone",
        cell: ({ row }) => {
            const user = row.original;
            return <span>{user.phone} </span>;
        },
        header: () => <ColumnHeader title={"N° téléphone"} />,
    },
    {
        accessorKey: "Rôle",
        cell: ({ row }) => {
            const user = row.original;
            return <Badge>{user.role.role_name} </Badge>;
        },
        header: () => <ColumnHeader title={"Rôle"} />,
    },
    {
        accessorKey: "date d'inscription",
        cell: ({ row }) => {
            const user = row.original;
            return <span> {user.created_at.split("T")[0]}</span>;
        },
        header: () => <ColumnHeader title={"date d'inscription"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const employ_permission = usePage().props.auth.permissions.employ;
            const roles = usePage().props.roles;

            const handleDelete = () => {
                router.delete(route("users.destroy", user.id), {
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
                        {employ_permission.update && (
                            <DropdownMenuItem
                                className="cursor-pointer flex"
                                onClick={() =>
                                    router.get(route("users.edit", user.id))
                                }
                            >
                                <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                <span>{useTrans("Modifier")}</span>
                            </DropdownMenuItem>
                        )}
                        {employ_permission.delete && (
                            <DropdownMenuItem>
                                {width >= 767 ? (
                                    <Dialog
                                        open={isopen}
                                        onOpenChange={() => setIsOpen(!isopen)}
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
                                                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce utilisateur"
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
                                        onOpenChange={() => etIsOpen(!isopen)}
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
                                                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce utilisateur"
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
