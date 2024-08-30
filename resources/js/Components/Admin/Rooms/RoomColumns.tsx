import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Dot, MoreHorizontal, Eye, Pencil } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu";
import { Link, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { DataTableColumnHeader } from "../DataTableColumnHeader";
import { Badge } from "@/Components/ui/badge";
import { useTrans } from "@/Hooks/useTrans";
import { Editor } from "@/Components/Admin/Shared/Editor";

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
        accessorKey: "Numéro de chmabre",
        cell: ({ row }) => {
            const room = row.original;
            return <span> {room.room_number}</span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Numéro de chmabre")}
            />
        ),
    },
    {
        accessorKey: "Type",
        cell: ({ row }) => {
            const room = row.original;
            return <span> {room.type.type_designation} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Type")} />
        ),
    },
    // {
    //     accessorKey: "Description",
    //     cell: ({ row }) => {
    //         const room = row.original;
    //         const truncateText = (text, length) => {
    //             if (text.length <= length) {
    //                 return text;
    //             }
    //             return text.slice(0, length) + "...";
    //         };
    //         // return <span> {room.room_descreption}</span>;
    //         return (
    //             <Editor
    //                 autofocus={false}
    //                 editable={false}
    //                 content={room.room_descreption}
    //                 classNames={{ content: "resize-none" }}
    //             />
    //         );
    //     },
    //     header: ({ column }) => (
    //         <DataTableColumnHeader
    //             column={column}
    //             title={useTrans("Description")}
    //         />
    //     ),
    // },
    {
        accessorKey: "Status",
        cell: ({ row }) => {
            const room = row.original;
            return (
                <div className="flex items-center justify-center space-x-2">
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
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Status")} />
        ),
    },
    {
        accessorKey: "Prix",
        header: ({ column }) => (
            <DataTableColumnHeader
                className="justify-end"
                column={column}
                title={useTrans("Prix de chmabre")}
            />
        ),
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "DZD",
            }).format(row.original.room_price);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const room = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {usePage().props.auth.permissions.room.viewAny && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("rooms.show", room.room_number)}
                                    className="flex w-full"
                                >
                                    <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    {useTrans("Voir")}
                                </Link>
                            </DropdownMenuItem>
                        )}
                        {usePage().props.auth.permissions.room.update && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("rooms.edit", room.room_number)}
                                    className="flex w-full"
                                >
                                    <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    {useTrans("Modifier")}
                                </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        {usePage().props.auth.permissions.room.update && (
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
                                        ? useTrans("Marqué comme disponible")
                                        : useTrans("Marqué comme hors service")}
                                </span>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
