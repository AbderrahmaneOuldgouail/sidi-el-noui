import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Promotion({ promotion }) {
    const [processing, setProcessing] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.promotion",
    });
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
                        {t("cardHeader")} {promotion.promo_value} {t("da")}{" "}
                    </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    {promotion.promo_start_date == promotion.promo_end_date ? (
                        <div className="mb-4">
                            {t("singleDate")} :{" "}
                            <span className="text-lg">
                                {promotion.promo_start_date}
                            </span>
                        </div>
                    ) : (
                        <div className="flex gap-2 justify-around mb-4">
                            <div>
                                {t("multipleDateStart")} :{" "}
                                <span className=" text-lg">
                                    {promotion.promo_start_date}
                                </span>
                            </div>
                            <div>
                                {t("multipleDateEnd")} :{" "}
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
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route(
                                    "client.promotion.show",
                                    promotion.promotion_id
                                ),
                                {},
                                {
                                    onStart: () => {
                                        setProcessing(true);
                                    },
                                    onFinish: () => {
                                        setProcessing(false);
                                    },
                                }
                            )
                        }
                    >
                        {t("actionBtn")}
                    </Button>
                </CardFooter>
            </div>
        </Card>
    );
}
