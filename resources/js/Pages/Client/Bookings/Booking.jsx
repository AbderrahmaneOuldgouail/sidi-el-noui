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
import { useTranslation } from "react-i18next";

export default function MyBookings({ booking }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "client.myBookings.booking",
    });
    const [processing, setProcessing] = React.useState(false);
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
                <title>{t("title")}</title>
                <meta name="description" content={t("metaDescreption")} />
            </Head>

            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-1/2 h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>

            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <PageHeading title={t("title")} className="my-10 relative" />
            <div className="relative flex flex-col md:flex-row gap-2 m-6">
                <div className="md:w-1/3 md:flex-col w-full flex flex-col gap-2">
                    <Card>
                        <CardHeader className="font-bold p-2">
                            {t("infoCard")}
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
                                disabled={processing}
                                onClick={() =>
                                    router.get(
                                        route("client.profile.edit"),
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
                            >
                                {t("showProfile")}
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="font-bold p-2">
                            {t("bookingDetails")}
                        </CardHeader>
                        <CardContent className="flex justify-between p-2">
                            <div>
                                <div>{t("checkIn")} </div>
                                <div className="font-bold">
                                    {booking.check_in}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    12h00 - 23h00
                                </div>
                            </div>
                            <div>
                                <div>{t("checkOut")} </div>
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
                                <div>{t("guestNumber")} </div>
                                <span className="font-bold">
                                    {booking.guest_number}{" "}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {t("adult")}
                                </span>
                                {booking.kids_number ? (
                                    <>
                                        {" "}
                                        {t("and")}{" "}
                                        <span className="font-bold">
                                            {booking.kids_number}{" "}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {t("babys")}
                                        </span>
                                    </>
                                ) : null}
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col items-start p-2">
                            <div>{t("time")} </div>
                            <div className="font-bold">
                                {(new Date(booking.check_out) -
                                    new Date(booking.check_in)) /
                                    (1000 * 60 * 60 * 24)}{" "}
                                {t("nights")}
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="p-2 font-bold">
                            {t("pricingCardHeader")}
                        </CardHeader>
                        <CardContent className="p-2 text-3xl font-bold text-primary">
                            {totalPrice(booking.rooms)} {t("da")}
                        </CardContent>
                        <CardFooter className="p-2 text-muted-foreground">
                            {t("pricingCardFooter")}
                        </CardFooter>
                    </Card>
                </div>
                <div className="md:w-2/3 w-full h-fit bg-card p-2 pb-6 rounded-lg">
                    {booking.rooms.map((room) => (
                        <Card className="w-full mb-2" key={room.room_number}>
                            <CardHeader className="font-bold p-2 pb-0 flex-row items-center justify-between">
                                <div>
                                    {t("room")} {room.type.type_designation}{" "}
                                    {t("with")} {room.beeds_number} {t("beeds")}
                                </div>
                                <div className="text-xl text-primary">
                                    {(new Date(booking.check_out) -
                                        new Date(booking.check_in)) /
                                        (1000 * 60 * 60 * 24)}{" "}
                                    x {room.pivot.room_price} {t("da")}
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
                                        {t("showMore")}
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
                                                    {t("room")}{" "}
                                                    {room.type.type_designation}{" "}
                                                    {t("with")}{" "}
                                                    {room.beeds_number}{" "}
                                                    {t("beeds")}
                                                </div>
                                                <div className="text-xl text-primary">
                                                    {" "}
                                                    {room.pivot.room_price}{" "}
                                                    {t("da")}
                                                </div>
                                            </div>
                                            {room.features.length > 0 && (
                                                <div className="my-2 ">
                                                    <Separator />
                                                    <div className="font-bold text-foreground pb-2 flex justify-start">
                                                        {t("features")} :
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
                                    {consomation.consumption_price} {t("da")}
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </ClientLayout>
    );
}
