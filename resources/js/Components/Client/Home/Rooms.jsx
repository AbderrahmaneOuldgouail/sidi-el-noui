import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import RoomCard from "./RoomCard";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { useTrans } from "@/Hooks/useTrans";

export default function Rooms({ rooms }) {
    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen max-h-sceen"
            id="rooms-section"
        >
            <div className="absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                {useTrans("Nos Chambres")}
            </div>
            <div className="flex justify-center">
                <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                    {useTrans(
                        "Découvrez nos chambres spacieuses et décorées avec, offrant tout le confort moderne pour un séjour des plus agréables. Que vous voyagiez seul, en couple ou en famille, nous avons la chambre parfaite pour vous."
                    )}
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
                                    {room.rooms_count} Chambre
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
                        <RoomCard room={room} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
