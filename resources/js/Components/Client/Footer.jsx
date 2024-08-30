import React from "react";
import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { getNavList } from "@/lib/NavList";
import { cn } from "@/lib/utils";
import { AppLogo } from "@/Components/ui/app-logo";

export default function Footer() {
    const menuList = getNavList();

    return (
        <footer className="relative">
            <div className="lg:px-28 px-10 py-4 flex flex-col  gap-4 ">
                <div className="flex sm:flex-row pb-4 flex-col justify-between items-center gap-4 w-full">
                    <a
                        href="phone:04505050"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Phone />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1 ">
                            <div className="text-xs text-muted-foreground">
                                N° téléphone :{" "}
                            </div>
                            <div className="text-sm font-medium ">
                                0540304050
                            </div>
                        </div>
                    </a>
                    <a
                        href="mailto:sidielnoui@gmail.com"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Mail />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                Email :{" "}
                            </div>
                            <div className="text-sm font-medium">
                                sidielnoui@gmail.com
                            </div>
                        </div>
                    </a>
                    <a
                        href="https://www.googlemap.com"
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <MapPin />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                Adresse :{" "}
                            </div>
                            <div className="text-sm font-medium">
                                cheraga alger, Algerie
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex sm:flex-row flex-col items-start gap-4 ">
                    <div className="flex items-start justify-center gap-4 sm:w-2/4 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <span className="text-lg font-bold">Liens</span>
                            {menuList.map((link, idx) => (
                                <a
                                    key={idx}
                                    className={cn(
                                        "hover:text-primary",
                                        link.active
                                            ? "text-primary hover:text-primary "
                                            : ""
                                    )}
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ))}
                            {/* <Link
                                    key={idx}
                                    className={cn(
                                        "hover:text-primary w-fit",
                                        link.active
                                            ? "text-primary hover:text-primary "
                                            : ""
                                    )}
                                    href={route(link.href)}
                                >
                                    {link.label}
                                </Link> */}
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                            <span className="text-lg font-bold">
                                Réseaux Sosiaux
                            </span>
                            <a
                                href="phone:04505050"
                                className="flex gap-4 items-center "
                            >
                                <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                                    <Facebook />
                                </div>
                                <div className="text-sm font-medium">
                                    0540304050
                                </div>
                            </a>
                            <a
                                href="phone:04505050"
                                className="flex gap-4 items-center "
                            >
                                <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                                    <Instagram />
                                </div>
                                <div className="text-sm font-medium">
                                    0540304050
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-2/4">
                        <AppLogo className="w-20 h-20" />
                        <div>lorem ispum kda mena melhik</div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-4 text-center">
                <span>© 2024 Copyright: </span>
                <a className="font-semibold" href="https://sidielnouihotel.com">
                    SIDI EL NOUI
                </a>
            </div>
        </footer>
    );
}
