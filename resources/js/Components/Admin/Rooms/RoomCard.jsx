import React, { useSyncExternalStore } from "react";
import { Link, router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/Components/ui/card";
import { Eye, Pencil } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Switch } from "@/Components/ui/switch";
import { useTranslation } from "react-i18next";

export default function RoomCard({ room }) {
    const {t} = useTranslation("translation", {keyPrefix: "rooms"})
    return (
        <Card className="rounded-lg border-none mt-6" key={room.room_number}>
            <CardContent className="p-6 flex justify-between items-center">
                <div>
                    <CardTitle>
                        {t("roomNumber")}{" "}
                        {room.room_number}
                        {" / "}
                        {room.type.type_designation}
                    </CardTitle>
                    <CardDescription>
                        {t("price")} : {room.room_price}{" "}
                        {t("da")}
                    </CardDescription>
                </div>
                <div>
                    <div className="flex items-center justify-center space-x-2">
                        {room.room_status === "hors service" ? (
                            <Badge variant="danger">{room.room_status} </Badge>
                        ) : room.room_status === "libre" ? (
                            <Badge variant="success">{room.room_status} </Badge>
                        ) : (
                            <Badge variant="warning">{room.room_status} </Badge>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <CardDescription className="flex">
                    <Switch
                        checked={room.room_status !== "hors service"}
                        onCheckedChange={() => {
                            router.post(
                                route("rooms.toggle.status"),
                                {
                                    room_number: room.room_number,
                                    room_status:
                                        room.room_status === "hors service"
                                            ? "libre"
                                            : "hors service",
                                },
                                {
                                    preserveState: true,
                                    preserveScroll: true,
                                }
                            );
                        }}
                    />
                    <span className="mx-2 ">
                        {room.room_status === "hors service"
                            ? t("aviable")
                            : t("inaviable")}
                    </span>
                </CardDescription>
                <div className="flex gap-4">
                    <Button variant="outline">
                        <Link
                            href={route("rooms.show", room.room_number)}
                            className="flex w-full"
                        >
                            <Eye className="mx-2 h-3.5 w-3.5 text-muted-foreground/70" />{" "}
                            {t("show")}
                        </Link>
                    </Button>
                    <Button variant="outline">
                        <Link
                            href={route("rooms.edit", room.room_number)}
                            className="flex w-full"
                        >
                            <Pencil className="mx-2 h-3.5 w-3.5 text-muted-foreground/70" />
                            {t("edit")}
                        </Link>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
