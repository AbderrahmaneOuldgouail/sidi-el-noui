import React from "react";
import BookingForm from "./BookingForm";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";

export default function HomeHeading({ id }) {
    const { width } = useWindowDimensions();
    const { t } = useTranslation("translation", {
        keyPrefix: "client.sections.banner",
    });
    return (
        <div id={id}>
            <div className="relative h-full z-10 p-4 flex md:flex-row flex-col justify-around">
                <div className="flex flex-col justify-center md:w-1/2 w-full">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <div className="font-bold text-5xl py-4">
                            {t("title")}
                        </div>
                    </div>
                    <div className="text-muted-foreground  text-sm md:text-base p-6 pt-0">
                        <div>{t("descreption")}</div>
                    </div>
                </div>
                {width <= 767 && <BookingForm />}
                <div className="flex justify-center items-center">
                    <img
                        src="/assets/sidi-el-noui-logo-removebg.png"
                        className="object-content w-1/3 md:w-2/3 rounded-xl relative z-10  hover:corsur-pointer  transition-transform duration-300 hover:scale-105 "
                    />
                </div>
            </div>
            {width > 767 && <BookingForm />}
        </div>
    );
}
