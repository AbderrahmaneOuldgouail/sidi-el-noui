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
import { useTrans } from "@/Hooks/useTrans";

export default function Home({ events, promotions, rooms, services }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    return (
        <ClientLayout>
            <Head title="Home" />
            <div
                className="relative md:h-[600px] h-dvh flex items-center justify-center "
                id="home-section"
            >
                <div className="absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.6)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
                <HomeHeading id="booking-form" />
            </div>
            {promotions  && (
                <div className="my-6 relative min-h-screen max-h-sceen">
                    <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[0] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.2)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
                    <div className="font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                        {useTrans("Promotions")}
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                            {useTrans(
                                "Offres Exclusives pour un Séjour Inoubliable Profitez de nos promotions exceptionnelles et réservez votre séjour à un prix avantageux. Découvrez nos offres spéciales et bénéficiez de réductions sur les chambres, les forfaits bien-être, et bien plus encore."
                            )}
                        </div>
                    </div>
                    <Promotion promotion={promotions} />
                </div>
            )}
            {events && (
                <div className="my-6 relative min-h-screen max-h-sceen">
                    <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(50%-28.5rem)] bottom-[0] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.5)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
                    <div className="font-bold border-b w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                        {useTrans("Evènements")}
                    </div>
                    <div className="flex justify-center">
                        <div className="text-muted-foreground p-6 sm:w-2/3  text-center">
                            {useTrans(
                                "Des Événements Inoubliables au Cœur d'Alger, Vivez des moments uniques en participant à nos événements exclusifs. Que ce soit pour des soirées thématiques, des concerts, ou des festivals locaux, notre hôtel est le point de départ idéal pour toutes vosaventures."
                            )}
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
