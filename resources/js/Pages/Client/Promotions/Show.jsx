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
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function Show({ promotion }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.promotion",
    });
    return (
        <ClientLayout>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("metaDescription")} />
            </Head>

            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[20rem] bottom-[5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <PageHeading title={t("title")} className="my-10 relative" />
            <div className="rounded-lg my-4 relative">
                <Carousel>
                    <CarouselContent>
                        {promotion?.assets.map((asset) => (
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
            <div className="p-4 rounded-lg my-4 relative bg-card ">
                <div className="flex justify-between itmes-center font-bold">
                    {promotion.promo_start_date == promotion.promo_end_date ? (
                        <div className="mb-4">
                            {t("singleDate")} :{" "}
                            <span className="text-lg">
                                {promotion.promo_start_date}
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-col sm:flex-row gap-2 justify-around mb-4">
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
                    <div className="text-xl text-primary">
                        - {promotion.promo_value} DA
                    </div>
                </div>
                <Editor
                    className="bg-transparent border-none"
                    autofocus={false}
                    editable={false}
                    content={promotion.promo_descreption}
                />
            </div>
        </ClientLayout>
    );
}
