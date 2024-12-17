import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { router } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function ServiceCard({ service }) {
    const [processing, setProcessing] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.services",
    });
    return (
        <Card className="relative my-6 p-4 sm:flex sm:flex-row-reverse flex-col-reverse bg-transparent border-none shadow-none">
            <div className="sm:w-1/2 w-full">
                <img
                    src={service.assets[0]?.url}
                    alt={`${service.assets[0]?.name}`}
                    className="object-cover w-full min-h-fit rounded-xl relative z-10 aspect-video hover:corsur-pointer shadow-xl transition-transform duration-300 hover:scale-105 "
                />
            </div>
            <div className="flex flex-col justify-between sm:w-1/2 w-full">
                <CardHeader className="flex-row items-center justify-start">
                    <div className="font-bold text-xl uppercase">
                        {service.service_name}
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="flex gap-2 flex-wrap">
                        <Editor
                            className="bg-transparent border-none"
                            classNames={{
                                content: "text-ellipsis overflow-hidden ... ",
                            }}
                            autofocus={false}
                            editable={false}
                            content={service.service_descreption}
                            length={200}
                        />
                    </CardDescription>
                </CardContent>
                <CardFooter className="justify-start">
                    <Button
                        variant="secondary"
                        size="sm"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route(
                                    "client.service.show",
                                    service.service_id
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
