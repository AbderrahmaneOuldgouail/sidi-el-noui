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
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import PromotionCardFooter from "./PromotionCardFooter";
import { Badge } from "@/Components/ui/badge";

export default function PromotionCard({ promotion }) {
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
        >
            <div className={cn(isOpen ? "w-full" : "sm:w-1/2 w-full")}>
                <Carousel>
                    <CarouselContent className="h-full ">
                        {promotion.assets.map((asset, index) => (
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
                    <div className="text-destructive text-2xl font-bold">
                        - {promotion.promo_value} {useTrans("DA")}{" "}
                    </div>
                    <div>
                        {promotion.is_active ? (
                            <Badge variant="success">
                                {useTrans("Active")}
                            </Badge>
                        ) : (
                            <Badge variant="danger">
                                {useTrans("Désactivé")}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    {promotion.promo_start_date == promotion.promo_end_date ? (
                        <div>
                            {useTrans("Date de promotion")} :{" "}
                            <span className="font-bold text-lg">
                                {promotion.promo_start_date}
                            </span>
                        </div>
                    ) : (
                        <div>
                            <div>
                                {useTrans("Date début de promotion")} :{" "}
                                <span className="font-bold text-lg">
                                    {promotion.promo_start_date}
                                </span>
                            </div>
                            <div>
                                {useTrans("Date fin de promotion")} :{" "}
                                <span className="font-bold text-lg">
                                    {promotion.promo_end_date}
                                </span>
                            </div>
                        </div>
                    )}
                    <div>
                        {isOpen
                            ? truncateText(promotion.promo_descreption, 150)
                            : promotion.promo_descreption}
                    </div>
                </CardContent>
                <CardFooter className="justify-end">
                    <PromotionCardFooter promotion={promotion} />
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
