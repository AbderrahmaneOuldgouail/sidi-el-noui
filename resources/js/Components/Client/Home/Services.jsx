import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import ServiceCard from "./ServiceCard";
import { useTrans } from "@/Hooks/useTrans";
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
            <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[-10%] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
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
