import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import InputLabel from "@/Components/InputLabel";
import { router, usePage } from "@inertiajs/react";

export function LangSwitch() {
    const props = usePage().props;
    const [lang, setLang] = useState(props.locale);
    const switchLang = (newLang) => {
        setLang(newLang);
        router.visit(route("switch.lang"), {
            data: { lang: newLang },
            preserveState: true,
            preserveScroll: true,
        });
    };
    document.documentElement.dir = props.direction;

    return (
        <RadioGroup value={lang} onValueChange={switchLang}>
            <div className="flex gap-2">
                <RadioGroupItem value="fr" id="fr" />
                <InputLabel htmlFor="fr" value={"fr"} />
            </div>
            <div className="flex gap-2">
                <RadioGroupItem value="ar" id="ar" />
                <InputLabel htmlFor="ar" value={"ar"} />
            </div>
        </RadioGroup>
    );
}
