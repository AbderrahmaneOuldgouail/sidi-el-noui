import React from "react";
import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { getNavList } from "@/lib/NavList";
import { AppLogo } from "@/Components/ui/app-logo";
import { useTranslation } from "react-i18next";

const email = import.meta.env.VITE_EMAIL || "example@gmail.com";
const phone = import.meta.env.VITE_PHONE || "0123456789";
const address = import.meta.env.VITE_ADDRESS || "01, adress Adress";
const maps = import.meta.env.VITE_MAPS || "url";
const facebook = import.meta.env.VITE_FACEBOOK_URL || "url";
const instagram = import.meta.env.VITE_INSTAGRAM_URL || "url";

export default function Footer() {
    const menuList = getNavList();
    const current = route().current();
    const { t } = useTranslation("translation", {
        keyPrefix: "client.footer",
    });

    return (
        <footer className="relative">
            <div className="lg:px-28 px-10 py-4 flex flex-col  gap-4 ">
                <div className="flex sm:flex-row pb-4 flex-col justify-between items-center gap-4 w-full">
                    <a
                        href={`phone:${phone}`}
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Phone />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1 ">
                            <div className="text-xs text-muted-foreground">
                                {t("phone")} :{" "}
                            </div>
                            <div className="text-sm font-medium ">{phone}</div>
                        </div>
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <Mail />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                {t("email")} :{" "}
                            </div>
                            <div className="text-sm font-medium">{email}</div>
                        </div>
                    </a>
                    <a
                        target="blank"
                        href={maps}
                        className="flex gap-4 items-center justify-start w-full"
                    >
                        <div className="text-primary bg-secondary p-1 rounded-md h-9 w-9 flex justify-center items-center">
                            <MapPin />
                        </div>
                        <div className="flex sm:flex-col gap-4 sm:gap-1">
                            <div className="text-xs text-muted-foreground">
                                {t("address")} :{" "}
                            </div>
                            <div className="text-sm font-medium">{address}</div>
                        </div>
                    </a>
                </div>
                <div className="flex sm:flex-row flex-col items-start gap-4 ">
                    <div className="flex items-start justify-center gap-4 sm:w-2/4 w-full">
                        <div className="flex flex-col gap-2 w-1/2">
                            <span className="text-lg font-bold">
                                {t("links")}{" "}
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
                                {t("socialMedia")}
                            </span>
                            <a
                                href={facebook}
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
                                href={instagram}
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
                        <div>{t("description")} </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-secondary-foreground py-4 px-16 flex justify-between items-center ">
                <a target="blank" href="https://duobix.com">
                    Duobix Software
                </a>
                <div>
                    <span>© 2024 Copyright </span>
                    <a
                        className="font-semibold"
                        href="https://hotelsidielnoui.dz"
                        target="blank"
                    >
                        SIDI EL NOUI
                    </a>
                </div>
            </div>
        </footer>
    );
}
