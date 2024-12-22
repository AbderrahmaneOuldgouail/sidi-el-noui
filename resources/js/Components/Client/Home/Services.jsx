import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

export default function Services({ services }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.services",
    });
    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen max-h-sceen"
            id="services-section"
        >
            <div className="absolute w-3/4 h-1/2 -rotate-12 top-40 rounded-full z-[0] inset-0 bg-gradient-to-r from-primarybg from-10% via-primarybg via-30% to-primarybg to-0% blur-2xl opacity-70"></div>
            <div className="font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                {t("title")}
            </div>
            <div className="flex justify-center">
                <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                    {t("description")}
                </div>
            </div>
            <Tabs
                defaultValue={services[0].service_id}
                className="w-full flex flex-col"
            >
                <ScrollArea className="w-full ">
                    <TabsList className="flex justify-center bg-transparent h-fit">
                        {services.map((service) => (
                            <TabsTrigger
                                value={service.service_id}
                                key={service.service_id}
                                className="flex-col uppercase font-bold w-fit text-foreground items-start border border-input bg-background px-6 mx-4 rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-muted data-[state=active]:text-primary data-[state=active]:border-primary"
                            >
                                {service.service_name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
                {services.map((service) => (
                    <TabsContent
                        value={service.service_id}
                        key={service.service_id}
                    >
                        <ServiceCard service={service} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
