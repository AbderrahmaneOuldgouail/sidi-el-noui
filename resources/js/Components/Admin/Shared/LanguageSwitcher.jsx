import React from "react";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import InputLabel from "@/Components/InputLabel";
import { useTranslation } from "react-i18next";
import { router, usePage } from "@inertiajs/react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { locale } = usePage().props;
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // document.documentElement.dir = lng == "ar" ? "rtl" : "ltr";
        router.visit(route("switch.lang"), {
            data: { lang: lng },
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <RadioGroup
            value={locale}
            onValueChange={changeLanguage}
            className="flex gap-2"
        >
            <div className="flex gap-2">
                <RadioGroupItem value="fr" id="fr" />
                <InputLabel
                    htmlFor="fr"
                    value={"Français"}
                    className="cursor-pointer"
                />
            </div>
            <div className="flex gap-2">
                <RadioGroupItem value="ar" id="ar" />
                <InputLabel
                    htmlFor="ar"
                    value={"العربية"}
                    className="cursor-pointer"
                />
            </div>
        </RadioGroup>
    );
};

export default LanguageSwitcher;
