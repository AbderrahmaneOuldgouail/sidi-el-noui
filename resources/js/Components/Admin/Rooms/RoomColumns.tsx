import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Eye, Pencil } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu";
import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";

export type Payment = {
    room_number: string;
    room_price: number;
    room_status: "libre" | "occupé" | "hors service";
    room_descreption: string;
    type: {
        type_id: number;
        type_designation: string;
    };
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "roomNumber",
        cell: ({ row }) => {
            const room = row.original;
            return <span> {room.room_number}</span>;
        },
        header: ({ column }) => <ColumnHeader title={"roomNumber"} />,
    },
    {
        accessorKey: "type",
        cell: ({ row }) => {
            const room = row.original;
            return <span> {room.type.type_designation} </span>;
        },
        header: ({ column }) => <ColumnHeader title={"type"} />,
    },
    {
        accessorKey: "status",
        cell: ({ row }) => {
            const room = row.original;
            return (
                <div className="flex items-center justify-center rtl:justify-start space-x-2">
                    {room.room_status === "hors service" ? (
                        <Badge variant="danger">{room.room_status} </Badge>
                    ) : room.room_status === "libre" ? (
                        <Badge variant="success">{room.room_status} </Badge>
                    ) : (
                        <Badge variant="warning">{room.room_status} </Badge>
                    )}
                </div>
            );
        },
        header: ({ column }) => <ColumnHeader title={"status"} />,
    },
    {
        accessorKey: "price",
        header: ({ column }) => <ColumnHeader title={"price"} />,
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "DZD",
            }).format(row.original.room_price);

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const room = row.original;
            const room_permission = usePage().props.room_permission;
            const { t } = useTranslation("translation", { keyPrefix: "rooms" });

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {room_permission.viewAny && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("rooms.show", room.room_number)}
                                    className="flex w-full"
                                >
                                    <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    {t("show")}
                                </Link>
                            </DropdownMenuItem>
                        )}
                        {room_permission.update && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("rooms.edit", room.room_number)}
                                    className="flex w-full"
                                >
                                    <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    {t("edit")}
                                </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        {room_permission.update && (
                            <DropdownMenuItem>
                                <Switch
                                    checked={
                                        room.room_status !== "hors service"
                                    }
                                    onCheckedChange={() => {
                                        router.post(
                                            route("rooms.toggle.status"),
                                            {
                                                room_number: room.room_number,
                                                room_status:
                                                    room.room_status ===
                                                    "hors service"
                                                        ? "libre"
                                                        : "hors service",
                                            }
                                        );
                                    }}
                                />
                                <span className="ml-2 ">
                                    {room.room_status === "hors service"
                                        ? t("aviable")
                                        : t("inaviable")}
                                </span>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
