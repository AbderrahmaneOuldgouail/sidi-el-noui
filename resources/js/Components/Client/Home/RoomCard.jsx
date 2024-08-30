import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import React from "react";
import { useTrans } from "@/Hooks/useTrans";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";

export default function RoomCard({ room }) {
    return (
        <Card className="relative my-6 p-4 w-full sm:flex sm:flex-row flex-col bg-transparent border-none shadow-none">
            <div className="sm:w-1/2 w-full">
                <img
                    src={room.assets[0]?.url}
                    alt={`Selected ${room.assets[0]?.name}`}
                    className="object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
                />
            </div>
            <div className="flex flex-col justify-between sm:w-1/2 w-full">
                <CardHeader className="flex-row items-center justify-between">
                    <div className="font-bold text-xl uppercase">
                        {room.type_designation}
                    </div>
                    <div className="text-primary text-3xl font-bold ">
                        {room.room_price} {useTrans("DA")}{" "}
                    </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <div className="my-2">Caractéristique de la chambre :</div>
                    <CardDescription className="flex gap-2 flex-wrap">
                        {room.features.slice(0, 8).map((feature) => (
                            <Badge
                                className="m-0 w-autot"
                                key={feature.feature_id}
                            >
                                {feature.features_name}
                                {feature.need_value == true &&
                                    ": " + feature.pivot.valeur}
                            </Badge>
                        ))}
                    </CardDescription>
                </CardContent>
                <CardFooter className="justify-end">
                    <a href="#booking-form">
                        <Button variant="secondary">Réserver maintenant</Button>
                    </a>
                </CardFooter>
            </div>
        </Card>
    );
}
