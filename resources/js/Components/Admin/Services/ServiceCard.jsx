import React, { useState } from "react";
import { Badge } from "@/Components/ui/badge";
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
import ServiceCardFooter from "@/Components/Admin/Services/ServiceCardFooter";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { buttonVariants } from "@/Components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceCard({ service }) {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card
            className="transition-transform ease-in-out duration-700 relative my-6 "
            key={service.service_id}
        >
            <div className="w-full">
                <Carousel>
                    <CarouselContent className="h-full ">
                        {service.assets.map((asset, index) => (
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
                <CardHeader className="text-lg font-bold text-xl flex flex-row items-start justify-between">
                    <div>{service.service_name}</div>
                    <div className="m-0">
                        {service.availability ? (
                            <Badge variant="success">
                                {useTrans("Disponible")}
                            </Badge>
                        ) : (
                            <Badge variant="danger">
                                {useTrans("Indisponible")}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                {isOpen && (
                    <>
                        <CardContent>
                            <div className="font-bold text-lg my-4">
                                {useTrans("Description")} :{" "}
                            </div>
                            <Editor
                                autofocus={false}
                                editable={false}
                                content={service.service_descreption}
                            />
                        </CardContent>
                        <CardFooter className="justify-end gap-4 ">
                            <ServiceCardFooter service={service} />
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
