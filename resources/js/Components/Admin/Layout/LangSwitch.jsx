import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import InputLabel from "@/Components/InputLabel";
import { router, usePage } from "@inertiajs/react";

export function LangSwitch() {
    const [lang, setLang] = useState(usePage().props.locale);
    const switchLang = (newLang) => {
        setLang(newLang);
        router.visit(route("switch.lang"), {
            data: { lang: newLang },
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <RadioGroup
            value={lang}
            onValueChange={switchLang}
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
}
