import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/Components/ui/button";
import { useTranslation } from "react-i18next";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import { useStore } from "@/Hooks/useStore";
import { useThemeStore } from "@/Hooks/useThemeStore";

export function ThemeToggle() {
    const theme = useStore(useThemeStore, (state) => state);
    const { t } = useTranslation();

    return (
        <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                    <Button
                        className="rounded-full w-8 h-8 bg-background"
                        variant="outline"
                        size="icon"
                        onClick={() => theme?.setTheme?.()}
                    >
                        <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-transform ease-in-out duration-500 dark:rotate-0 dark:scale-100" />
                        <MoonIcon className="absolute w-[1.2rem] h-[1.2rem] rotate-0 scale-1000 transition-transform ease-in-out duration-500 dark:-rotate-90 dark:scale-0" />
                        <span className="sr-only">Switch Theme</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    {t("layout.navBar.themeTolip")}{" "}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
