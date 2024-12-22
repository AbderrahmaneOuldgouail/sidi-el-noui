import React, { useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import Promotion from "@/Components/Client/Home/Promotions";
import Events from "@/Components/Client/Home/Events";
import Rooms from "@/Components/Client/Home/Rooms";
import Services from "@/Components/Client/Home/Services";
import HomeHeading from "@/Components/Client/Home/HomeHeading";
import { useToast } from "@/Components/ui/use-toast";
import Contact from "@/Components/Client/Home/Contact";
import { useTranslation } from "react-i18next";

export default function Home({ events, promotions, rooms, services }) {
    const { toast } = useToast();
    const { t } = useTranslation("translation", { keyPrefix: "client.home" });
    const flash = usePage().props.flash;
    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    return (
        <ClientLayout>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("metaDescreption")} />
            </Head>

            <div className="relative h-dvh f " id="home-section">
                <div className="absolute size-1/2 ltr:translate-x-full -translate-x-full rounded-full z-[0] inset-0 bg-gradient-to-r from-primarybg from-10% via-primarybg via-30% to-primarybg to-90% blur-2xl opacity-70"></div>
                <HomeHeading id="booking-form" />
            </div>
            {promotions && (
                <div className="my-6 relative min-h-screen max-h-sceen">
                    <div className="absolute w-3/4 h-1/2 sm:rotate-45 top-20 rounded-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-secondarybg to-90% blur-2xl opacity-70"></div>
                    <div className="font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                        {t("promotions")}
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                            {t("promotionsDescreption")}
                        </div>
                    </div>
                    <Promotion promotion={promotions} />
                </div>
            )}
            {events && (
                <div className="my-6 relative min-h-screen max-h-sceen">
                    <div className="absolute w-3/4 h-1/2 -rotate-12 top-20 rounded-full z-[0] inset-0 bg-gradient-to-r from-secondarybg from-10% via-secondarybg via-30% to-primarybg to-0% blur-2xl opacity-70"></div>

                    <div className="font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                        {t("events")}
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                            {t("eventsDescreption")}
                        </div>
                    </div>
                    <Events event={events} />
                </div>
            )}
            {rooms.length > 0 && <Rooms rooms={rooms} />}
            {services.length > 0 && <Services services={services} />}
            <Contact rooms={rooms} />
        </ClientLayout>
    );
}
