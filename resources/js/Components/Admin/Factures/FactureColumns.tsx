import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Eye, Send, Printer, FileDown } from "lucide-react";
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

export type Facture = {
    facture_id: number;
    created_at: string;
    data: {
        user: {
            first_name: string;
            last_name: string;
            email: string;
        };
    };
};

export const factureColumns: ColumnDef<Facture>[] = [
    {
        accessorKey: "N° Facture",
        cell: ({ row }) => {
            const facture = row.original;
            return <span>{facture.facture_id} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("N° Facture")}
            />
        ),
    },
    {
        accessorKey: "Client",
        cell: ({ row }) => {
            const facture = row.original;
            return (
                <div>
                    {facture.data.user.first_name} {facture.data.user.last_name}
                </div>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Client")} />
        ),
    },
    {
        accessorKey: "Email",
        cell: ({ row }) => {
            const facture = row.original;
            return <span>{facture.data.user.email} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Email")} />
        ),
    },
    {
        accessorKey: "Date",
        cell: ({ row }) => {
            function formatDate(dateString) {
                const date = new Date(dateString);

                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const year = date.getFullYear();

                return `${day}-${month}-${year}`;
            }
            const facture = row.original;
            return <span>{formatDate(facture.created_at)} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Date")} />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const facture = row.original;
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
                                href={route("factures.show", {
                                    id: facture.facture_id,
                                })}
                                className="flex w-full"
                            >
                                <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                {useTrans("Voir")}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link
                                href={route("factures.send", {
                                    id: facture.facture_id,
                                })}
                                className="flex w-full"
                            >
                                <Send className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                <span>{useTrans("Email")}</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a
                                href={route("factures.print", {
                                    id: facture.facture_id,
                                })}
                                target="_blank"
                                className="flex w-full"
                            >
                                <Printer className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                <span>{useTrans("Imprimer")}</span>
                            </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <a
                                href={route("factures.download", {
                                    id: facture.facture_id,
                                })}
                                className="flex w-full"
                            >
                                <FileDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                <span>{useTrans("Télécharger")}</span>
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
