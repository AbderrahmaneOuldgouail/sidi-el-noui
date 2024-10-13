import React from "react";
import { Button } from "@/Components/ui/button";
import { ChevronRight, CircleMinus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Badge } from "@/Components/ui/badge";
import { Editor } from "@/Components/Admin/Shared/Editor";

import { useTrans } from "@/Hooks/useTrans";

export default function BookingsCard({
    setFinal,
    selectedRooms,
    data,
    total,
    setBeedsNumber,
    beedsNumber,
    setTotal,
    setSelectedRooms,
    setData,
    booking_data,
}) {
    let nights =
        (new Date(booking_data.check_out) - new Date(booking_data.check_in)) /
        (1000 * 60 * 60 * 24);
    const unselectRoom = (room) => {
        setTotal(total - room.room_price * nights);
        setBeedsNumber(beedsNumber - Number(room.beeds_number));
        setSelectedRooms(selectedRooms.filter((r) => r.id !== room.id));
        setData((prevData) => {
            const existingIndex = prevData.rooms.findIndex(
                (r) => r === room.id
            );
            prevData.rooms.splice(existingIndex, 1);

            return { ...prevData };
        });
    };

    const unselectConsommation = (consomation) => {
        setTotal(
            total - consomation.current_consumption_price * consomation.quantity
        );
        setData((prevData) => {
            const existingIndex = data.consomation.findIndex(
                (c) => c.consumption_id === consomation.consumption_id
            );
            prevData.consomation.splice(existingIndex, 1);
            return { ...prevData };
        });
    };
    return (
        <div className="w-1/4 rounded px-1 bg-card ">
            <div className="sticky top-10">
                <Button
                    onClick={() => setFinal(true)}
                    variant="secondary"
                    size="sm"
                    className="my-4 w-full z-[1] justify-between"
                    disabled={selectedRooms == false}
                >
                    {useTrans("Dernière étape")} <ChevronRight />
                </Button>
                {total > 0 && (
                    <div>
                        <p className="text-lg font-bold">
                            {useTrans("Total")} : {total} {useTrans("DA")}{" "}
                        </p>
                    </div>
                )}
                <div>
                    {selectedRooms.map((room) => (
                        <div
                            key={room.room_number}
                            className="flex gap-2 justify-between py-1 "
                        >
                            <Dialog>
                                <DialogTrigger className="hover:underline">
                                    {useTrans("Chambre N°")} :{" "}
                                    {room.room_number}
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>
                                            {useTrans("Chambre")}{" "}
                                            {room.type.type_designation}{" "}
                                            {useTrans("avec")}{" "}
                                            {room.beeds_number}{" "}
                                            {useTrans("lits")}{" "}
                                            {useTrans("Pour : ")}{" "}
                                            {room.room_price} {useTrans("DA")}
                                        </DialogTitle>
                                        {room.assets.length > 0 && (
                                            <Carousel>
                                                <CarouselContent>
                                                    {room.assets.map(
                                                        (asset) => (
                                                            <CarouselItem
                                                                key={asset.id}
                                                            >
                                                                <img
                                                                    src={
                                                                        asset.url
                                                                    }
                                                                    alt={
                                                                        asset.name
                                                                    }
                                                                    className="w-full h-32 object-cover aspect-video rounded-md"
                                                                />
                                                            </CarouselItem>
                                                        )
                                                    )}
                                                </CarouselContent>
                                                <CarouselPrevious />
                                                <CarouselNext />
                                            </Carousel>
                                        )}
                                        {room.features.length > 0 && (
                                            <div className="font-bold flex">
                                                {useTrans("Caractéristiques")} :{" "}
                                            </div>
                                        )}
                                        <div>
                                            {room.features.map((feature) => (
                                                <Badge
                                                    className="m-px"
                                                    key={feature.feature_id}
                                                >
                                                    {feature.features_name}
                                                    {feature.need_value ==
                                                        true &&
                                                        ": " +
                                                            feature.pivot
                                                                .valeur}
                                                </Badge>
                                            ))}
                                        </div>
                                        <DialogDescription>
                                            <Editor
                                                className="bg-transparent border-none"
                                                classNames={{
                                                    content:
                                                        "text-ellipsis overflow-hidden ... ",
                                                }}
                                                autofocus={false}
                                                editable={false}
                                                content={room.room_descreption}
                                                length={200}
                                            />
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => unselectRoom(room)}
                            >
                                <CircleMinus />
                            </Button>
                        </div>
                    ))}
                    {data?.consomation.map((consomation) => (
                        <div
                            key={consomation.consumption_id}
                            className="flex gap-2 justify-between py-1 "
                        >
                            <div className="flex flex-col">
                                <div>{consomation.name}</div>
                                <div className="text-muted-foreground text-sm">
                                    {consomation.price} x {consomation.quantity}
                                </div>
                            </div>

                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() =>
                                    unselectConsommation(consomation)
                                }
                            >
                                <CircleMinus />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
