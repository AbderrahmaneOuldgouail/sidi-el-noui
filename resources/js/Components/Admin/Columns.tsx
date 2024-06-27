import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Eye, Pencil } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { Link } from "@inertiajs/react";

type Room_type = {
    type_id: number;
    type_designation: string;
};
export type Payment = {
    room_number: string;
    room_price: number;
    room_status: "free" | "busy" | "out of service";
    room_descreption: string;
    room_type: Array<String>;
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
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
    },
    {
        accessorKey: "room_status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
    },
    {
        accessorKey: "room_descreption",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Descreption" />
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
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
