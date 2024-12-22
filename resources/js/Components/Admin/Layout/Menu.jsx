import React from "react";
import { Ellipsis } from "lucide-react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/MenuList";
import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import { CollapseMenuButton } from "./CollapseMenuButton";

export function Menu({ isOpen }) {
    const pathname = route().current();
    const menuList = getMenuList(pathname);

    return (
        <ScrollArea className="[&>div>div[style]]:!block">
            <nav className="mt-8 h-full w-full">
                <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                    {menuList.map(
                        (list, index) =>
                            list != false && (
                                <li
                                    className={cn(
                                        "w-full",
                                        list.groupLabel ? "pt-5" : ""
                                    )}
                                    key={index}
                                >
                                    {(isOpen && list.groupLabel) ||
                                    isOpen === undefined ? (
                                        <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                                            {list.groupLabel}
                                        </p>
                                    ) : !isOpen &&
                                      isOpen !== undefined &&
                                      list.groupLabel ? (
                                        <TooltipProvider>
                                            <Tooltip delayDuration={100}>
                                                <TooltipTrigger className="w-full">
                                                    <div className="w-full flex justify-center items-center">
                                                        <Ellipsis className="h-5 w-5" />
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent side="right">
                                                    <p>{list.groupLabel}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ) : (
                                        <p className="pb-2"></p>
                                    )}
                                    {list.menus.map(
                                        (
                                            {
                                                href,
                                                label,
                                                icon: Icon,
                                                active,
                                                submenus,
                                            },
                                            index,
                                            item
                                        ) =>
                                            item[index] &&
                                            (submenus.length === 0 ? (
                                                <div
                                                    className="w-full"
                                                    key={index}
                                                >
                                                    <TooltipProvider
                                                        disableHoverableContent
                                                    >
                                                        <Tooltip
                                                            delayDuration={100}
                                                        >
                                                            <TooltipTrigger
                                                                asChild
                                                            >
                                                                <Button
                                                                    className={cn(
                                                                        "w-full justify-start h-10 mb-1 hover:border-2 hover:border-transparent",
                                                                        active
                                                                            ? "text-primary hover:text-primary "
                                                                            : ""
                                                                    )}
                                                                    variant={
                                                                        "ghost"
                                                                    }
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        href={route(
                                                                            href
                                                                        )}
                                                                    >
                                                                        <span
                                                                            className={cn(
                                                                                isOpen ===
                                                                                    false
                                                                                    ? ""
                                                                                    : "mr-4"
                                                                            )}
                                                                        >
                                                                            <Icon
                                                                                size={
                                                                                    18
                                                                                }
                                                                            />
                                                                        </span>
                                                                        <p
                                                                            className={cn(
                                                                                "max-w-[200px] truncate",
                                                                                isOpen ===
                                                                                    false
                                                                                    ? "-translate-x-96 opacity-0"
                                                                                    : "translate-x-0 opacity-100"
                                                                            )}
                                                                        >
                                                                            {
                                                                                label
                                                                            }
                                                                        </p>
                                                                    </Link>
                                                                </Button>
                                                            </TooltipTrigger>
                                                            {isOpen ===
                                                                false && (
                                                                <TooltipContent side="right">
                                                                    {label}
                                                                </TooltipContent>
                                                            )}
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>
                                            ) : (
                                                <div
                                                    className="w-full"
                                                    key={index}
                                                >
                                                    <CollapseMenuButton
                                                        icon={Icon}
                                                        label={label}
                                                        active={active}
                                                        submenus={submenus}
                                                        isOpen={isOpen}
                                                    />
                                                </div>
                                            ))
                                    )}
                                </li>
                            )
                    )}
                </ul>
            </nav>
        </ScrollArea>
    );
}
