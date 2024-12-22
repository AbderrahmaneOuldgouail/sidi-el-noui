import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import RoomCard from "@/Components/Client/Home/RoomCard";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useTranslation } from "react-i18next";

export default function Rooms({ rooms }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.rooms",
    });
    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen max-h-sceen"
            id="rooms-section"
        >
            <div className="absolute w-1/2 sm:w-11/12 h-1/2 rotate-12 top-1/3 rounded-t-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-secondarybg to-0% blur-2xl opacity-70"></div>
            <div className="font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                {t("title")}
            </div>
            <div className="flex justify-center">
                <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                    {t("descreption")}
                </div>
            </div>
            <Tabs
                defaultValue={rooms[0].room_number}
                className="w-full flex flex-col"
            >
                <ScrollArea className="w-full ">
                    <TabsList className="flex justify-center bg-transparent h-fit">
                        {rooms.map((room) => (
                            <TabsTrigger
                                value={room.room_number}
                                key={room.room_number}
                                className="flex-col w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary"
                            >
                                <div className="font-bold uppercase ">
                                    {room.type_designation}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {room.rooms_count} {t("tabTrigger")}
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                {rooms.map((room) => (
                    <TabsContent
                        value={room.room_number}
                        key={room.room_number}
                    >
                        <RoomCard room={room} />{" "}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
