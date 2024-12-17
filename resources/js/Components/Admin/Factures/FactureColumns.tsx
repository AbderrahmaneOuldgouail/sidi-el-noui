import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
    MoreHorizontal,
    Eye,
    Send,
    Printer,
    FileDown,
    ClipboardList,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";

export type Facture = {
    facture_id: number;
    created_at: string;
    booking: {
        user: {
            first_name: string;
            last_name: string;
            email: string;
            role: {
                role_name: string;
            };
        };
    };
};

export const factureColumns: ColumnDef<Facture>[] = [
    {
        accessorKey: "billNumber",
        cell: ({ row }) => {
            const facture = row.original;
            return <span>{facture.facture_id} </span>;
        },
        header: () => <ColumnHeader title={"billNumber"} />,
    },
    {
        accessorKey: "client",
        cell: ({ row }) => {
            const facture = row.original;
            return (
                <div>
                    {facture.booking.user.first_name}{" "}
                    {facture.booking.user.last_name}
                </div>
            );
        },
        header: () => <ColumnHeader title={"client"} />,
    },
    {
        accessorKey: "email",
        cell: ({ row }) => {
            const facture = row.original;
            return <span>{facture.booking.user.email} </span>;
        },
        header: () => <ColumnHeader title={"email"} />,
    },
    {
        accessorKey: "date",
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
        header: () => <ColumnHeader title={"date"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const facture = row.original;
            const {t} = useTranslation("translation", {keyPrefix: "factures.table"})

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {facture.booking.user.role.role_name == "sositée" && (
                            <DropdownMenuItem>
                                <Link
                                    href={route("guests.show", {
                                        id: facture.facture_id,
                                    })}
                                    className="flex w-full"
                                >
                                    <ClipboardList className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                    {t("guestsList")}
                                </Link>
                            </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link
                                href={route("factures.show", {
                                    id: facture.facture_id,
                                })}
                                className="flex w-full"
                            >
                                <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                {t("show")}
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
                                <span>{t("email")}</span>
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
                                <span>{t("print")}</span>
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
                                <span>{t("download")}</span>
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
