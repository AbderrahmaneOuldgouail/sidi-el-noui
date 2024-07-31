import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";

import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import { Card, CardContent } from "@/Components/ui/card";

import PageHeading from "@/Components/ui/PageHeading";
import { Book } from "lucide-react";
import { Button } from "@/Components/ui/button";

export default function Bookings({ bookings }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    console.log(bookings.data);
    return (
        <AdminPanelLayout>
            <Head title="Bookings" />
            <PageHeading title={"Réservations"} />
            <PlaceholderContent>
                <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">
                    <Card className="rounded-lg border-none mt-6 w-full">
                        <CardContent className="p-6">
                            Nouvell réservations
                            {bookings.data.map((booking) => (
                                <div key={booking.booking_id}>
                                    <div>
                                        {booking.user.first_name}{" "}
                                        {booking.user.last_name}
                                    </div>
                                    <div>{booking.booking_status}</div>
                                    <div>{booking.check_in}</div>
                                    <div>{booking.check_out}</div>
                                    <div>{booking.created_at}</div>
                                    <Button>
                                        <Link href={route("factures.create")}>
                                            Crée la facture
                                        </Link>
                                    </Button>
                                    <hr />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    {/* <Card className="rounded-lg border-none mt-6 w-full">
                        <CardContent className="p-6">
                            Historique de Réservation
                        </CardContent>
                    </Card> */}
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
