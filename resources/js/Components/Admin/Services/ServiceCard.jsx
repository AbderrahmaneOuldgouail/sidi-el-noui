import React, { useState } from "react";
import { Badge } from "@/Components/ui/badge";
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
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import ServiceCardFooter from "@/Components/Admin/Services/ServiceCardFooter";
import { Button } from "@/Components/ui/button";

export default function ServiceCard({service}) {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    const truncateText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.slice(0, length) + "...";
    };
    return (
        <Card
            className={cn(
                "transition-transform ease-in-out duration-700 relative my-6 ",
                isOpen ? "block" : " sm:flex block"
            )}
            key={service.service_id}
        >
            <div className={cn(isOpen ? "w-full" : "sm:w-1/2 w-full")}>
                <Carousel>
                    <CarouselContent className="h-full ">
                        {service.assets.map((asset, index) => (
                            <CarouselItem
                                key={index}
                                className={cn(
                                    isOpen ? "md:basis-1/2 lg:basis-1/3" : ""
                                )}
                            >
                                <Dialog>
                                    <DialogTrigger>
                                        <img
                                            src={asset.url}
                                            alt={`Selected ${index}`}
                                            className="rounded-md object-cover aspect-video"
                                        />
                                    </DialogTrigger>
                                    <DialogContent className="p-0">
                                        <img
                                            src={asset.url}
                                            alt={`Selected ${index}`}
                                            className="rounded-md object-cover aspect-video"
                                        />
                                    </DialogContent>
                                </Dialog>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-secondary left-0 text-secondary-foreground" />
                    <CarouselNext className="bg-secondary right-0 text-secondary-foreground" />
                </Carousel>
            </div>
            <div
                className={cn(
                    "flex flex-col justify-between ",
                    isOpen ? " w-full" : "sm:w-1/2 w-full"
                )}
            >
                <CardHeader className="text-lg font-bold text-xl flex flex-row items-center justify-between">
                    <div>{service.service_name}</div>
                    <div>
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
                <CardContent>
                    {isOpen
                        ? truncateText(service.service_descreption, 150)
                        : service.service_descreption}
                </CardContent>
                <CardFooter>
                    <ServiceCardFooter service={service} />
                </CardFooter>
            </div>
            {width >= 767 && (
                <div className="absolute -bottom-4 right-1/2 translate-x-1/2 z-20">
                    <Button
                        className="rounded-md w-8 h-8"
                        variant="outline"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronUp
                            className={cn(
                                "h-4 w-4 transition-transform ease-in-out duration-700",
                                isOpen === false ? "rotate-180" : "rotate-0"
                            )}
                        />
                    </Button>
                </div>
            )}
        </Card>
    );
}
