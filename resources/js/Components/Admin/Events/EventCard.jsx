import React, { useState } from "react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTrans } from "@/Hooks/useTrans";
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
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/Components/ui/button";
import EventCardFooter from "./EventCardFooter";
import { Editor } from "@/Components/Admin/Shared/Editor";

export default function EventCard({ event }) {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="transition-transform ease-in-out duration-700 relative my-6 ">
            <div className="w-full">
                <Carousel>
                    <CarouselContent className="h-full ">
                        {event.assets.map((asset, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <img
                                    src={asset.url}
                                    alt={`Selected ${index}`}
                                    className="rounded-md object-cover aspect-video w-full"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-secondary left-0 text-secondary-foreground" />
                    <CarouselNext className="bg-secondary right-0 text-secondary-foreground" />
                </Carousel>
            </div>
            <div className="flex flex-col justify-between w-full">
                <CardHeader className="text-lg font-bold text-xl flex flex-row items-center justify-between">
                    <div>{event.event_name}</div>
                    <div className="flex items-center gap-2 bg-muted p-2 rounded">
                        <span>{useTrans("Prix")} </span>
                        {":"}
                        <span className="text-destructive text-2xl font-bold">
                            {event.event_price}
                        </span>{" "}
                        <span>{useTrans("DA")} </span>
                    </div>
                </CardHeader>
                {isOpen && (
                    <>
                        <CardContent>
                            {event.event_start_date == event.event_end_date ? (
                                <div>
                                    {useTrans("Date d'évènement")} :{" "}
                                    <span className="font-bold text-lg">
                                        {event.event_start_date}
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        {useTrans("Date début d'évènement")} :{" "}
                                        <span className="font-bold text-lg">
                                            {event.event_start_date}
                                        </span>
                                    </div>
                                    <div>
                                        {useTrans("Date fin d'évènement")} :{" "}
                                        <span className="font-bold text-lg">
                                            {event.event_end_date}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className="font-bold text-lg my-4">
                                    {useTrans("Description")} :{" "}
                                </div>
                                <Editor
                                    autofocus={false}
                                    editable={false}
                                    content={event.event_descreption}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <EventCardFooter event={event} />
                        </CardFooter>
                    </>
                )}
            </div>
            {width >= 767 && (
                <div className="absolute -bottom-4 right-1/2 translate-x-1/2 z-20">
                    <div
                        className={buttonVariants({
                            variant: "outline",
                            size: "icon",
                        })}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronUp
                            className={cn(
                                "h-4 w-4 transition-transform ease-in-out duration-700 ",
                                isOpen === false ? "rotate-180" : "rotate-0"
                            )}
                        />
                    </div>
                </div>
            )}
        </Card>
    );
}
