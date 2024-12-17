import React from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import PageHeading from "@/Components/ui/PageHeading";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { Badge } from "@/Components/ui/badge";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Show({ service }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.services",
    });
    return (
        <ClientLayout>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("metaDescreption")} />
            </Head>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <PageHeading
                title={service.service_name}
                className="my-10 relative"
            />
            <div className="rounded-lg my-4 relative">
                <Carousel>
                    <CarouselContent>
                        {service.assets.map((asset) => (
                            <CarouselItem
                                className="md:basis-1/2 lg:basis-1/3"
                                key={asset.id}
                            >
                                <img
                                    src={asset.url}
                                    alt={asset.name}
                                    className="rounded-md aspect-video object-cover w-full transition-transform duration-300 hover:scale-95"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="p-4 rounded-lg my-4 relative bg-card">
                <Editor
                    className="bg-transparent border-none"
                    autofocus={false}
                    editable={false}
                    content={service.service_descreption}
                />
                {service.consomation.length > 0 && (
                    <>
                        <div className="font-bold">{t("consumptions")}</div>
                        <div className="flex gap-2 my-2">
                            {service.consomation.map((consomation) => (
                                <Badge
                                    className="m-0 w-autot"
                                    key={consomation.consumption_id}
                                >
                                    {consomation.consumption_name}
                                </Badge>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </ClientLayout>
    );
}
