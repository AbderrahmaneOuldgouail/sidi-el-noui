import React, { useState } from "react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
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
import PromotionCardFooter from "./PromotionCardFooter";
import { Badge } from "@/Components/ui/badge";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { useTranslation } from "react-i18next";

export default function PromotionCard({ promotion }) {
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "promotions.card",
    });

    return (
        <Card className="transition-transform ease-in-out duration-700 relative my-6 ">
            <div className="w-full">
                <Carousel>
                    <CarouselContent className="h-full ">
                        {promotion.assets.map((asset, index) => (
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
                <CardHeader className=" font-bold text-xl flex flex-row items-center justify-between">
                    <div className="text-destructive text-2xl font-bold">
                        - {promotion.promo_value} {t("da")}{" "}
                    </div>
                    <div>
                        {promotion.is_active ? (
                            <Badge variant="success">
                                {t("activeState")}
                            </Badge>
                        ) : (
                            <Badge variant="danger">
                                {t("inactiveState")}
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                {isOpen && (
                    <>
                        <CardContent>
                            {promotion.promo_start_date ==
                            promotion.promo_end_date ? (
                                <div>
                                    {t("date")} :{" "}
                                    <span className="font-bold text-lg">
                                        {promotion.promo_start_date}
                                    </span>
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        {t("startDate")} :{" "}
                                        <span className="font-bold text-lg">
                                            {promotion.promo_start_date}
                                        </span>
                                    </div>
                                    <div>
                                        {t("endDate")} :{" "}
                                        <span className="font-bold text-lg">
                                            {promotion.promo_end_date}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <div>
                                <div className="font-bold text-lg my-4">
                                    {t("descreption")} :{" "}
                                </div>
                                <Editor
                                    autofocus={false}
                                    editable={false}
                                    content={promotion.promo_descreption}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <PromotionCardFooter promotion={promotion} />
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
