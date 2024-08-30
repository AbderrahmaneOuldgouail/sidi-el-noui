import * as React from "react";

import { Button } from "@/Components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import { useTrans } from "@/Hooks/useTrans";
import { cn } from "@/lib/utils";
import { router } from "@inertiajs/react";

export function LangSwitch() {
    const locale = localStorage.getItem("locale") || "fr";
    const [lang, setLang] = React.useState(locale);

    const handleSwitch = () => {
        const newLang = lang === "ar" ? "fr" : "ar";
        setLang(newLang);
        localStorage.setItem("locale", newLang);
        router.visit(route("client.switch.lang"));
    };
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background"
                        variant="outline"
                        size="icon"
                        onClick={handleSwitch}
                    >
                        <span
                            className={cn(
                                "absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 ",
                                lang === "ar"
                                    ? "rotate-0 scale-100"
                                    : "-rotate-90 scale-0"
                            )}
                        >
                            ar
                        </span>
                        <span
                            className={cn(
                                "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 ",
                                lang === "fr"
                                    ? "rotate-0 scale-100"
                                    : "rotate-90 scale-0"
                            )}
                        >
                            fr
                        </span>
                        <span className="sr-only">Switch langue</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    {useTrans("Changer la langue")}{" "}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
