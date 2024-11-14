import React from "react";
import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { getNavList } from "@/lib/NavList";
import { AppLogo } from "@/Components/ui/app-logo";
import { useTrans } from "@/Hooks/useTrans";

export default function Footer() {
    const menuList = getNavList();
    const current = route().current();

    return (
        <footer className="relative">
            <div className="lg:px-28 px-10 py-4 flex flex-col  gap-4 ">
                <div className="flex sm:flex-row pb-4 flex-col justify-between items-center gap-4 w-full">
                    <a
                        href="phone:023358230"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Phone />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1 ">
                            <div className="text-xs text-muted-foreground">
                                {useTrans("N° téléphone")} :{" "}
                            </div>
                            <div className="text-sm font-medium ">
                                023358230
                            </div>
                        </div>
                    </a>
                    <a
                        href="mailto:support@hotelsidielnoui.dz"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Mail />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                {useTrans("Email")} :{" "}
                            </div>
                            <div className="text-sm font-medium">
                                support@hotelsidielnoui.dz
                            </div>
                        </div>
                    </a>
                    <a
                        target="blank"
                        href="https://maps.app.goo.gl/PKkyi9AU14F6bXYd9"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <MapPin />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                {useTrans("Adresse")} :{" "}
                            </div>
                            <div className="text-sm font-medium">
                                chéraga alger, Algerie
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex sm:flex-row flex-col items-start gap-4 ">
                    <div className="flex items-start justify-center gap-4 sm:w-2/4 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <span className="text-lg font-bold">
                                {useTrans("Liens")}{" "}
                            </span>
                            {current != "client.index"
                                ? menuList.map((link, idx) => (
                                      <Link
                                          href={route("client.index")}
                                          key={idx}
                                          className="hover:text-primary "
                                      >
                                          {link.label}
                                      </Link>
                                  ))
                                : menuList.map((link, idx) => (
                                      <a
                                          key={idx}
                                          className="hover:text-primary"
                                          href={link.href}
                                      >
                                          {link.label}
                                      </a>
                                  ))}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                            <span className="text-lg font-bold">
                                {useTrans("Réseaux Sociaux")}
                            </span>
                            <a
                                href="https://web.facebook.com/p/Hotel-sidi-el-noui-100088684863459/?locale=fr_FR&_rdc=1&_rdr"
                                className="flex gap-4 items-center "
                            >
                                <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                                    <Facebook />
                                </div>
                                <div className="text-sm font-medium hover:underline">
                                    Sidi el noui
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/hotelsidielnoui?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                className="flex gap-4 items-center  "
                            >
                                <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                                    <Instagram />
                                </div>
                                <div className="text-sm font-medium hover:underline">
                                    Sidi_el_noui
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:w-2/4 w-full">
                        <AppLogo className="w-20 h-20" />
                        <div>
                            {useTrans(
                                "Bienvenue à SIDI EL NOUI - Votre refuge luxueux au cœur de Chéraga Découvrez un confort inégalé et une élégance raffinée en plein centre d'Alger. Notre hôtel offre des vues à couper le souffle, des équipements haut de gamme, et un service exceptionnel pour rendre votre séjour inoubliable."
                            )}{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-secondary-foreground py-4 px-16 flex justify-between items-center ">
                <a target="blank" href="https://duobix.com">
                    Duobix Software
                </a>
                <div>
                    <span>© 2024 Copyright: </span>
                    <a
                        className="font-semibold"
                        href="https://sidielnouihotel.dz"
                    >
                        SIDI EL NOUI
                    </a>
                </div>
            </div>
        </footer>
    );
}
