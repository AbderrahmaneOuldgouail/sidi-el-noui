import React from "react";
import PageHeading from "@/Components/ui/PageHeading";
import ClientLayout from "@/Layouts/ClientLayout";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Editor } from "@/Components/Admin/Shared/Editor";

import { Button, buttonVariants } from "@/Components/ui/button";
import { Head, router } from "@inertiajs/react";
import { Badge } from "@/Components/ui/badge";
import { Separator } from "@/Components/ui/separator";
import { useTrans } from "@/Hooks/useTrans";

export default function MyBookings({ booking }) {
    const totalPrice = () => {
        let total = 0;
        let days =
            (new Date(booking.check_out) - new Date(booking.check_in)) /
            (1000 * 60 * 60 * 24);
        booking.rooms.map((room) => {
            total += room.pivot.room_price * days;
        });

        booking.consomation.map((consomation) => {
            total += consomation.consumption_price * consomation.pivot.quantity;
        });

        return total;
    };
    return (
        <ClientLayout>
            <Head>
                <title>{useTrans("Réservation")}</title>
                <meta
                    name="description"
                    content={useTrans(
                        "Effectuez votre réservation à l'hôtel Sidi El Noui en quelques étapes simples."
                    )}
                />
            </Head>

            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[47rem] h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <PageHeading
                title={useTrans("Réservation")}
                className="my-10 relative"
            />
            <div className="relative flex flex-col md:flex-row gap-2 m-6">
                <div className="md:w-1/3 w-full flex md:flex-col gap-2">
                    <Card>
                        <CardHeader className="font-bold p-2">
                            {useTrans("Informations personnels")}
                        </CardHeader>
                        <CardContent className="flex justify-between p-2">
                            <div>
                                <div className="font-bold">
                                    {booking.user.first_name}{" "}
                                    {booking.user.last_name}{" "}
                                </div>
                                <div>{booking.user.email}</div>
                                <div className="text-sm text-muted-foreground">
                                    {booking.user.phone}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col items-end p-2">
                            <Button
                                variant="link"
                                onClick={() =>
                                    router.get(route("client.profile.edit"))
                                }
                            >
                                {useTrans("Voir le profile")}
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="font-bold p-2">
                            {useTrans("Détails de votre réservation")}
                        </CardHeader>
                        <CardContent className="flex justify-between p-2">
                            <div>
                                <div>{useTrans("Arrivée")} </div>
                                <div className="font-bold">
                                    {booking.check_in}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    12h00 - 23h00
                                </div>
                            </div>
                            <div>
                                <div>{useTrans("Départ")} </div>
                                <div className="font-bold">
                                    {booking.check_out}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    07h00 - 12h00
                                </div>
                            </div>
                        </CardContent>
                        <CardContent className="flex justify-between p-2">
                            <div>
                                <div>{useTrans("Nombre des personnes")} </div>
                                <span className="font-bold">
                                    {booking.guest_number}{" "}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {useTrans("adult")}
                                </span>
                                {booking.kids_number ? (
                                    <>
                                        {" "}
                                        {useTrans("et")}{" "}
                                        <span className="font-bold">
                                            {booking.kids_number}{" "}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {useTrans("bébés")}
                                        </span>
                                    </>
                                ) : null}
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col items-start p-2">
                            <div>{useTrans("Durée de séjour")} </div>
                            <div className="font-bold">
                                {(new Date(booking.check_out) -
                                    new Date(booking.check_in)) /
                                    (1000 * 60 * 60 * 24)}{" "}
                                {useTrans("nuit")}
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="p-2 font-bold">
                            {useTrans("Récapitulatif du montant")}
                        </CardHeader>
                        <CardContent className="p-2 text-3xl font-bold text-primary">
                            {totalPrice(booking.rooms)} {useTrans("DA")}
                        </CardContent>
                        <CardFooter className="p-2 text-muted-foreground">
                            {useTrans("Ce prix avec tout tax inclus")}
                        </CardFooter>
                    </Card>
                </div>
                <div className="md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg">
                    {booking.rooms.map((room) => (
                        <Card className="w-full mb-2" key={room.room_number}>
                            <CardHeader className="font-bold p-2 pb-0 flex-row items-center justify-between">
                                <div>
                                    {useTrans("Chambre")}{" "}
                                    {room.type.type_designation}{" "}
                                    {useTrans("avec")} {room.beeds_number}{" "}
                                    {useTrans("lits")}
                                </div>
                                <div className="text-xl text-primary">
                                    {(new Date(booking.check_out) -
                                        new Date(booking.check_in)) /
                                        (1000 * 60 * 60 * 24)}{" "}
                                    x {room.pivot.room_price} {useTrans("DA")}
                                </div>
                            </CardHeader>
                            <CardContent className="p-2 ">
                                {room.features.slice(0, 4).map((feature) => (
                                    <Badge
                                        className="m-0 w-autot"
                                        key={feature.feature_id}
                                    >
                                        {feature.features_name}
                                        {feature.need_value == true &&
                                            ": " + feature.pivot.valeur}
                                    </Badge>
                                ))}
                            </CardContent>
                            <CardFooter className="flex-col items-end p-2 pt-0">
                                <Dialog>
                                    <DialogTrigger
                                        className={buttonVariants({
                                            variant: "link",
                                        })}
                                    >
                                        {useTrans("Voir Plus")}
                                    </DialogTrigger>
                                    <DialogContent className="p-0 mb-10 max-h-screen">
                                        <DialogHeader>
                                            <DialogTitle className="p-0">
                                                <Carousel>
                                                    <CarouselContent>
                                                        {room.assets.map(
                                                            (asset) => (
                                                                <CarouselItem>
                                                                    <img
                                                                        src={
                                                                            asset.url
                                                                        }
                                                                        alt={
                                                                            asset.name
                                                                        }
                                                                        className="w-full"
                                                                    />
                                                                </CarouselItem>
                                                            )
                                                        )}
                                                    </CarouselContent>
                                                    <CarouselPrevious />
                                                    <CarouselNext />
                                                </Carousel>
                                            </DialogTitle>
                                        </DialogHeader>
                                        <DialogDescription className="p-4">
                                            <div className="font-bold text-foreground flex justify-between">
                                                <div>
                                                    {useTrans("Chambre")}{" "}
                                                    {room.type.type_designation}{" "}
                                                    {useTrans("avec")}{" "}
                                                    {room.beeds_number}{" "}
                                                    {useTrans("lits")}
                                                </div>
                                                <div className="text-xl text-primary">
                                                    {" "}
                                                    {room.pivot.room_price}{" "}
                                                    {useTrans("DA")}
                                                </div>
                                            </div>
                                            {room.features.length > 0 && (
                                                <div className="my-2 ">
                                                    <Separator />
                                                    <div className="font-bold text-foreground pb-2 flex justify-start">
                                                        {useTrans(
                                                            "Caractéristiques"
                                                        )}{" "}
                                                        :
                                                    </div>
                                                    {room.features
                                                        .slice(0, 4)
                                                        .map((feature) => (
                                                            <Badge
                                                                className="m-0 w-autot"
                                                                key={
                                                                    feature.feature_id
                                                                }
                                                            >
                                                                {
                                                                    feature.features_name
                                                                }
                                                                {feature.need_value ==
                                                                    true &&
                                                                    ": " +
                                                                        feature
                                                                            .pivot
                                                                            .valeur}
                                                            </Badge>
                                                        ))}
                                                </div>
                                            )}
                                            <div className="my-2">
                                                <Separator />
                                                <Editor
                                                    className="bg-transparent border-none max-h-[200px] overflow-auto"
                                                    autofocus={false}
                                                    editable={false}
                                                    content={
                                                        room.room_descreption
                                                    }
                                                />
                                            </div>
                                        </DialogDescription>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))}
                    {booking.consomation.map((consomation) => (
                        <Card
                            className="w-full mb-2"
                            key={consomation.consumption_id}
                        >
                            <CardHeader className="p-2 font-bold flex flex-row items-center justify-between">
                                <div>{consomation.consumption_name}</div>
                                <div className="text-xl text-primary">
                                    {consomation.pivot.quantity} x{" "}
                                    {consomation.consumption_price} DA
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </ClientLayout>
    );
}
