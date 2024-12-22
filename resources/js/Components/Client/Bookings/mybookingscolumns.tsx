import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Eye } from "lucide-react";
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
import { router } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";

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
        accessorKey: "ref",
        cell: ({ row }) => {
            const booking = row.original;
            return (
                <div className="font-bold text-base">{booking.booking_id}</div>
            );
        },
        header: () => <ColumnHeader title={"ref"} />,
    },
    {
        accessorKey: "rooms",
        cell: ({ row }) => {
            const booking = row.original;
            return <span>{booking.rooms.length}</span>;
        },
        header: () => <ColumnHeader title={"rooms"} />,
    },
    {
        accessorKey: "dates",
        cell: ({ row }) => {
            const booking = row.original;
            return (
                <span>
                    {booking.check_in} - {booking.check_out}{" "}
                </span>
            );
        },
        header: () => <ColumnHeader title={"dates"} />,
    },
    {
        accessorKey: "bookingDate",
        cell: ({ row }) => {
            const booking = row.original;
            return <span>{booking.created_at.split("T")[0]} </span>;
        },
        header: () => <ColumnHeader title={"bookingDate"} />,
    },
    {
        accessorKey: "status",
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

        header: () => <ColumnHeader title={"status"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const booking = row.original;
            const { width } = useWindowDimensions();
            const [open, setopen] = React.useState(false);
            const [isopen, setIsOpen] = React.useState(false);
            const [processing, setProcessing] = React.useState(false);
            const { t } = useTranslation("translation", {
                keyPrefix: "client.myBookings",
            });

            const handleBookingStatus = () => {
                router.post(
                    route("client.bookings.cancel", booking.booking_id),
                    {},
                    {
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
                    }
                );
            };

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
                            disabled={processing}
                            onClick={() =>
                                router.get(
                                    route(
                                        "client.bookings.show",
                                        booking.booking_id
                                    ),
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
                            className="cursor-pointer"
                        >
                            <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            <span>{t("show")} </span>
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
                                            {t("cancel")}
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    {t("dialogTitle")}
                                                </DialogTitle>
                                                <DialogDescription>
                                                    {t("dialogDescreption")}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter className="gap-2 ">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleBookingStatus()
                                                    }
                                                >
                                                    {t("accept")}
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setopen(false);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {t("deni")}
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Drawer
                                        open={isopen}
                                        onOpenChange={setIsOpen}
                                    >
                                        <DrawerTrigger className="w-full">
                                                {t("cancel")}
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader className="text-left">
                                                <DrawerTitle>
                                                    {t("dialogTitle")}
                                                </DrawerTitle>
                                                <DrawerDescription>
                                                    {t("dialogDescreption")}
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter className="pt-2">
                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        handleBookingStatus()
                                                    }
                                                >
                                                    {t("accept")}
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => {
                                                        setopen(false);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {t("deni")}
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
