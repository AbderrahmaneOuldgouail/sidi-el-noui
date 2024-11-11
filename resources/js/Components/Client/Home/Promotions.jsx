import React, { useEffect, useState } from "react";
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

export default function Promotion({ promotion }) {
    return (
        <Card className="relative my-6 p-4 md:flex md:flex-row flex-col bg-transparent border-none shadow-none ">
            <div className="md:w-1/2 w-full  ">
                <img
                    src={promotion.assets[0].url}
                    className="object-cover w-full rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
                />
            </div>
            <div className="flex flex-col justify-between md:w-1/2 w-full ">
                <CardHeader className="font-bold text-xl flex flex-row items-center justify-end">
                    <div className="text-primary text-2xl ">
                        {useTrans("Réduction de")} {promotion.promo_value}{" "}
                        {useTrans("DA")}{" "}
                    </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    {promotion.promo_start_date == promotion.promo_end_date ? (
                        <div className="mb-4">
                            {useTrans("Le")} :{" "}
                            <span className="text-lg">
                                {promotion.promo_start_date}
                            </span>
                        </div>
                    ) : (
                        <div className="flex gap-2 justify-around mb-4">
                            <div>
                                {useTrans("De")} :{" "}
                                <span className=" text-lg">
                                    {promotion.promo_start_date}
                                </span>
                            </div>
                            <div>
                                {useTrans("Jusqu'a")} :{" "}
                                <span className=" text-lg">
                                    {promotion.promo_end_date}
                                </span>
                            </div>
                        </div>
                    )}
                    <Editor
                        className="bg-transparent border-none "
                        autofocus={false}
                        editable={false}
                        content={promotion.promo_descreption}
                        length={200}
                    />
                </CardContent>
                <CardFooter className="justify-end">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                            router.get(
                                route(
                                    "client.promotion.show",
                                    promotion.promotion_id
                                )
                            )
                        }
                    >
                        {useTrans("Voir Plus")}
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}
