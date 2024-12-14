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
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";

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
        accessorKey: "utilisateurs",
        cell: ({ row }) => {
            const user = row.original;
            return (
                <div>
                    {user.first_name} {user.last_name}
                </div>
            );
        },
        header: () => <ColumnHeader title={"utilisateurs"} />,
    },
    {
        accessorKey: "email",
        cell: ({ row }) => {
            const user = row.original;
            return <span>{user.email} </span>;
        },
        header: () => <ColumnHeader title={"email"} />,
    },
    {
        accessorKey: "phone",
        cell: ({ row }) => {
            const user = row.original;
            return <span>{user.phone} </span>;
        },
        header: () => <ColumnHeader title={"phone"} />,
    },
    {
        accessorKey: "role",
        cell: ({ row }) => {
            const user = row.original;
            return <Badge>{user.role.role_name} </Badge>;
        },
        header: () => <ColumnHeader title={"role"} />,
    },
    {
        accessorKey: "createdAtDate",
        cell: ({ row }) => {
            const user = row.original;
            return <span> {user.created_at.split("T")[0]}</span>;
        },
        header: () => <ColumnHeader title={"createdAtDate"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const [processing, setProcessing] = React.useState(false);
            const employ_permission = usePage().props.auth.permissions.employ;
            const { t } = useTranslation("translation", { keyPrefix: "users" });

            const handleDelete = () => {
                router.delete(route("users.destroy", user.id), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        setopen(false);
                        setIsOpen(false);
                    },
                    onStart: () => {
                        setProcessing(true);
                    },
                    onFinish: () => {
                        setProcessing(false);
                    },
                });
            };

            return (
                <DropdownMenu
                    open={isopen || open}
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
                                disabled={processing}
                                onClick={() =>
                                    router.get(
                                        route("users.edit", user.id),
                                        {},
                                        {
                                            onStart: () => {
                                                setProcessing(true);
                                            },
                                            onFinish: () => {
                                                setProcessing(false);
                                            },
                                        }
                                    )
                                }
                            >
                                <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                <span>{t("edit")}</span>
                            </DropdownMenuItem>
                        )}
                        {employ_permission.delete && (
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
                                            {t("delete")}
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    {t("dialogHeader")}{" "}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {t("dialogDescreption")}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="gap-2 ">
                                                <Button
                                                    variant="secondary"
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                >
                                                    {t("cancel")}
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDelete()
                                                    }
                                                    disabled={processing}
                                                    className="flex justify-center"
                                                >
                                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                                    {t("delete")}
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
                                            {t("delete")}
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader className="text-left">
                                                <DrawerTitle>
                                                    {t("dialogHeader")}{" "}
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    {t("dialogDescreption")}{" "}
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter className="pt-2">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleDelete()
                                                    }
                                                    disabled={processing}
                                                    className="flex justify-center"
                                                >
                                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                                    {t("delete")}
                                                </Button>
                                                <DrawerClose asChild>
                                                    <Button variant="outline">
                                                        {t("cancel")}
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
