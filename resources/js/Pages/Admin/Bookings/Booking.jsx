import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { useTrans } from "@/Hooks/useTrans";

export default function Booking({ booking }) {
    console.log(booking);

    return (
        <AdminPanelLayout>
            <Head title="Réservation" />
            <PageHeading
                title={
                    useTrans("Réservation de ") +
                    booking.user.first_name +
                    " " +
                    booking.user.last_name
                }
            />
            <PlaceholderContent>
                <div className="flex gap-4 mb-4">
                    <Card className="w-1/2">
                        <CardHeader>
                            <CardTitle>{useTrans("Réservation")} </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className=" md:flex block">
                                <div className="md:w-1/2">
                                    {useTrans("Arrivée : ")} {booking.check_in}
                                </div>
                                <div className="md:w-1/2">
                                    {useTrans("Départ : ")} {booking.check_out}
                                </div>
                            </div>
                            <div>
                                {useTrans("Réserver le : ")}{" "}
                                {booking.created_at}{" "}
                            </div>
                            <div>
                                {useTrans("Pour : ")} {booking.guest_number}{" "}
                                {useTrans("personnes")}
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-1/2">
                        <CardHeader>
                            <CardTitle>{useTrans("Client")} </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className=" md:flex block">
                                <div className="md:w-1/2">
                                    {useTrans("Nom")} :{" "}
                                    {booking.user.first_name}
                                </div>
                                <div className="md:w-1/2">
                                    {useTrans("Prénom")} :{" "}
                                    {booking.user.last_name}
                                </div>
                            </div>
                            <div>
                                {useTrans("Email")} : {booking.user.email}{" "}
                            </div>
                            <div>
                                {useTrans("N° téléphone")} :{" "}
                                {booking.user.phone}{" "}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Separator />
                <Card className="my-4">
                    <CardHeader>
                        <CardTitle>{useTrans("Chambres")} </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {booking.rooms.map((room) => (
                            <div key={room.room_number}>
                                <div className="flex">
                                    <div className="w-1/2">
                                        {useTrans("La Chambre N°")} :{" "}
                                        {room.room_number}{" "}
                                    </div>
                                    <div className="w-1/2">
                                        {useTrans("Capacité")} :{" "}
                                        {room.beeds_number}{" "}
                                        {useTrans("personnes")}
                                    </div>
                                </div>
                                <div>
                                    {useTrans("Prix de chmabre")} :{" "}
                                    {room.room_price} {useTrans("DA")}
                                </div>
                                <Separator />
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Separator />
                {booking.consomation.length > 0 && (
                    <Card className="my-4">
                        <CardHeader>
                            <CardTitle>
                                {useTrans("List Des Consommations")}{" "}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {booking.consomation.map((consomation) => (
                                <div key={consomation.consumption_id}>
                                    <div className="flex justify-between">
                                        <div>
                                            {consomation.consumption_name}
                                        </div>
                                        <div>
                                            {" x "}
                                            {consomation.pivot.quantity}
                                        </div>
                                    </div>
                                    <Separator />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
