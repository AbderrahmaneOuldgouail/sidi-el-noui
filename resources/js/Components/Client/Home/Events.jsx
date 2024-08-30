import React from "react";
import { useTrans } from "@/Hooks/useTrans";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { router } from "@inertiajs/react";

export default function Events({ event }) {
    return (
        <Card className="relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none ">
            <div className="sm:w-1/2 w-full">
                <img
                    src={event.assets[0].url}
                    alt={`Selected ${event.assets[0].id}`}
                    className="object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
                />
            </div>
            <div className="flex flex-col justify-between sm:w-1/2 w-full">
                <CardHeader className="text-lg font-bold text-xl flex flex-row items-center justify-between">
                    <div>{event.event_name}</div>
                    <div className="text-primary text-2xl font-bold">
                        {event.event_price} {useTrans("DA")}{" "}
                    </div>
                </CardHeader>
                <CardContent className="text-muted-foreground flex-grow">
                    {event.event_start_date == event.event_end_date ? (
                        <div className="mb-4">
                            {useTrans("Le")} :{" "}
                            <span className=" text-lg">
                                {event.event_start_date}
                            </span>
                        </div>
                    ) : (
                        <div className="flex gap-2 justify-between mb-4">
                            <div>
                                {useTrans("De")} :{" "}
                                <span className=" text-lg">
                                    {event.event_start_date}
                                </span>
                            </div>
                            <div>
                                {useTrans("Jusqu'a")} :{" "}
                                <span className=" text-lg">
                                    {event.event_end_date}
                                </span>
                            </div>
                        </div>
                    )}
                    <Editor
                        className="bg-transparent border-none "
                        autofocus={false}
                        editable={false}
                        content={event.event_descreption}
                        length={200}
                    />
                </CardContent>
                <CardFooter className="justify-start z-[1]">
                    <Button variant="secondary" size="sm">
                        Voir Plus
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}
