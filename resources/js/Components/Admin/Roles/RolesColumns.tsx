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
import { router, usePage } from "@inertiajs/react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

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
        accessorKey: "role",
        cell: ({ row }) => {
            const role = row.original;
            return <div>{role.role_name}</div>;
        },
        header: ({ column }) => <ColumnHeader title={"role"} />,
    },
    {
        accessorKey: "permissions",
        cell: ({ row }) => {
            const role = row.original;
            const { width } = useWindowDimensions();
            const [isopen, setIsOpen] = React.useState(false);
            const { t } = useTranslation("translation", {
                keyPrefix: "roles",
            });

            return width >= 767 ? (
                <Dialog open={isopen} onOpenChange={setIsOpen}>
                    <DialogTrigger
                        className={cn(buttonVariants({ variant: "outline" }))}
                    >
                        {t("permissions")}
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-left rtl:text-right rtl:pr-4">
                                {t("dialogHeader")} {role.role_name}
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
                                {t("cancel")}
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            ) : (
                <Drawer open={isopen} onOpenChange={setIsOpen}>
                    <DrawerTrigger>{t("permissions")} </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle className="text-left rtl:text-right">
                                {t("dialogHeader")} {role.role_name}{" "}
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
                                <Button variant="outline">{t("cancel")}</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            );
        },
        header: ({ column }) => <ColumnHeader title={"permissions"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const role = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const [processing, setProcessing] = React.useState(false);
            const role_permission = usePage().props.role_permission;
            const { t } = useTranslation("translation", {
                keyPrefix: "roles",
            });

            const handleDelete = () => {
                router.delete(route("roles.destroy", role.role_id), {
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
                            <DropdownMenuItem className="p-0">
                                <Button
                                    onClick={() =>
                                        router.get(
                                            route("roles.edit", role.role_id),
                                            {},
                                            {
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
                                            }
                                        )
                                    }
                                    disabled={processing}
                                    variant="ghost"
                                >
                                    <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    <span>{t("edit")}</span>
                                </Button>
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
                                            {t("delete")}
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    {t("deleteDialogHeader")}{" "}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {t("deleteRoleDescreption")}
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
                                                    {t("deleteDialogHeader")}{" "}
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    {t("deleteRoleDescreption")}{" "}
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
