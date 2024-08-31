import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
    MoreHorizontal,
    Eye,
    ReceiptText,
    HandCoins,
    Ticket,
} from "lucide-react";
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
import { Badge } from "@/Components/ui/badge";
import { useTrans } from "@/Hooks/useTrans";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { DataTableColumnHeader } from "@/Components/Admin/DataTableColumnHeader";

export type Bookings = {
    booking_id: number;
    check_in: string;
    check_out: string;
    guest_number: number;
    created_at: string;
    booking_status: "en attente" | "confirmer" | "refusé" | "annuler";
    rooms: {
        room_price: number;
        type: {
            type_designation: string;
        };
    };
};

export const mybookingscolumns: ColumnDef<Bookings>[] = [
    {
        accessorKey: "Ref",
        cell: ({ row }) => {
            const booking = row.original;
            return (
                <div className="font-bold text-base">{booking.booking_id}</div>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Ref")} />
        ),
    },
    {
        accessorKey: "Chambre",
        cell: ({ row }) => {
            const booking = row.original;
            console.log(booking.rooms);
            return (
                <span>
                    {booking.rooms.length} {useTrans("chambre")}
                    {booking.rooms.length > 1 && "s"}{" "}
                </span>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Chambres")}
            />
        ),
    },
    {
        accessorKey: "date d'entrée - date de sortie",
        cell: ({ row }) => {
            const booking = row.original;
            return (
                <span>
                    {booking.check_in} - {booking.check_out}{" "}
                </span>
            );
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("date d'entrée / sortie")}
            />
        ),
    },
    {
        accessorKey: "Date de réservation",
        cell: ({ row }) => {
            const booking = row.original;
            return <span>{booking.created_at.split("T")[0]} </span>;
        },
        header: ({ column }) => (
            <DataTableColumnHeader
                column={column}
                title={useTrans("Date de réservation")}
            />
        ),
    },
    {
        accessorKey: "Status",
        cell: ({ row }) => {
            const booking = row.original;
            return booking.booking_status == "confirmer" ? (
                <Badge variant="success">{booking.booking_status}</Badge>
            ) : booking.booking_status == "en attente" ? (
                <Badge variant="warning">{booking.booking_status}</Badge>
            ) : (
                <Badge variant="danger">{booking.booking_status}</Badge>
            );
        },

        header: ({ column }) => (
            <DataTableColumnHeader column={column} title={useTrans("Status")} />
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const booking = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);

            return (
                <DropdownMenu
                    open={isopen ? true : open}
                    onOpenChange={setopen}
                >
                    <DropdownMenuTrigger
                        className={buttonVariants({
                            variant: "ghost",
                            size: "icon",
                        })}
                    >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() =>
                                router.get(
                                    route(
                                        "client.bookings.show",
                                        booking.booking_id
                                    )
                                )
                            }
                            className="cursor-pointer"
                        >
                            <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            <span>{useTrans("Voir")} </span>
                        </DropdownMenuItem>
                        {booking.booking_status == "en attente" ||
                        booking.booking_status == "confirmer" ? (
                            <DropdownMenuItem className="cursor-pointer flex bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90">
                                {width >= 767 ? (
                                    <Dialog
                                        open={isopen}
                                        onOpenChange={setIsOpen}
                                    >
                                        <DialogTrigger className="w-full">
                                            {useTrans("Annuler")}
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    {useTrans(
                                                        "Vous êtes sure?"
                                                    )}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {useTrans(
                                                        "Vous êtes sur que vous voulez annuler cette réservation"
                                                    )}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="gap-2 ">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        router.post(
                                                            route(
                                                                "client.bookings.cancel",
                                                                booking.booking_id
                                                            )
                                                        )
                                                    }
                                                >
                                                    {useTrans("Oui")}
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setopen(false);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {useTrans("Non")}
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Drawer
                                        open={isopen}
                                        onOpenChange={setIsOpen}
                                    >
                                        <DrawerTrigger className="cursor-pointer flex">
                                            <Button variant="destructive">
                                                Annuler
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader className="text-left">
                                                <DrawerTitle>
                                                    {useTrans(
                                                        "Vous êtes sure?"
                                                    )}
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    {useTrans(
                                                        "Vous êtes sur que vous voulez annuler cette réservation"
                                                    )}
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter className="pt-2">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        router.post(
                                                            route(
                                                                "client.bookings.cancel",
                                                                booking.booking_id
                                                            )
                                                        )
                                                    }
                                                >
                                                    {useTrans("Oui")}
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setopen(false);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {useTrans("Non")}
                                                </Button>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                )}
                            </DropdownMenuItem>
                        ) : null}
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
