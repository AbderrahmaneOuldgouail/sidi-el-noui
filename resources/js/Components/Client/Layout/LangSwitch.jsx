import * as React from "react";
import { Button } from "@/Components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import { cn } from "@/lib/utils";
import { router, usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export function LangSwitch() {
    const { t } = useTranslation("translation", { keyPrefix: "client.navbar" });
    const [processing, setProcessing] = React.useState(false);

    const { i18n } = useTranslation();
    const { locale } = usePage().props;

    const handleSwitch = (lng) => {
        i18n.changeLanguage(lng);
        router.visit(route("client.switch.lang"), {
            data: { lang: lng },
            preserveState: true,
            preserveScroll: true,
            onStart: () => {
                setProcessing(true);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };
    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                            handleSwitch(locale == "ar" ? "fr" : "ar")
                        }
                        disabled={processing}
                    >
                        <span
                            className={cn(
                                "absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 ",
                                locale === "ar"
                                    ? "rotate-0 scale-100"
                                    : "-rotate-90 scale-0"
                            )}
                        >
                            ar
                        </span>
                        <span
                            className={cn(
                                "absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 ",
                                locale === "fr"
                                    ? "rotate-0 scale-100"
                                    : "rotate-90 scale-0"
                            )}
                        >
                            fr
                        </span>
                        <span className="sr-only">Switch langue</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">{t("swichLang")} </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
