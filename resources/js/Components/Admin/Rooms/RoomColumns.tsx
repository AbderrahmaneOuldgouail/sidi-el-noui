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
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { DataTableColumnHeader } from "../DataTableColumnHeader";

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
        accessorKey: "room_number",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Numéro de chambre" />
        ),
    },
    {
        accessorKey: "room_type",
        cell: ({ row }) => {
            const room = row.original;
            return <span> {room.type.type_designation} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
    },
    {
        accessorKey: "room_descreption",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Descreption" />
        ),
    },
    {
        accessorKey: "room_status",
        cell: ({ row }) => {
            const room = row.original;
            return (
                <div className="flex items-center space-x-2">
                    <span
                        className={`w-2 h-2 rounded-full 
            ${room.room_status === "hors service" ? "text-red-500" : ""}
            ${room.room_status === "libre" ? "text-green-600" : ""}
            ${room.room_status === "occupé" ? "text-orange-500" : ""}
        `}
                    >
                        <Dot />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider ">
                        {room.room_status}
                    </span>
                </div>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
    {
        accessorKey: "room_price",
        header: ({ column }) => (
            <DataTableColumnHeader
                className="justify-end"
                column={column}
                title="Prix"
            />
        ),
        cell: ({ row }) => {
            const room_price = parseFloat(row.getValue("room_price"));
            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "DZD",
            }).format(room_price);

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
                        <DropdownMenuItem>
                            <Link
                                href={route("rooms.show", room.room_number)}
                                className="flex w-full"
                            >
                                <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                Voir
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link
                                href={route("rooms.edit", room.room_number)}
                                className="flex w-full"
                            >
                                <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                Modifier
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator></DropdownMenuSeparator>
                        <DropdownMenuItem>
                            <Switch
                                checked={room.room_status !== "hors service"}
                                onCheckedChange={() => {
                                    router.post(route("rooms.toggle.status"), {
                                        room_number: room.room_number,
                                        room_status:
                                            room.room_status === "hors service"
                                                ? "libre"
                                                : "hors service",
                                    });
                                }}
                            />
                            <span className="ml-2 ">
                                {room.room_status === "hors service"
                                    ? "Marqué comme disponible"
                                    : "Marqué comme hors service"}
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
