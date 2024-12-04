import { Link, router, usePage } from "@inertiajs/react";
import { LayoutGrid, LogOut, User, Languages, Inbox } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/Components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { LangSwitch } from "./LangSwitch";
import { RedBeadge } from "@/Components/ui/red-badge";
import LanguageSwitcher from "../Shared/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export function UserNav() {
    const user = usePage().props.auth.user;
    const message_permission = usePage().props.auth.permissions.message;
    const hasUnreadMessages = usePage().props.hasUnreadMessages;
    const { t } = useTranslation("translation", {
        keyPrefix: "layout.navBar.userNav",
    });
    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                className="relative h-8 w-8 rounded-full"
                            >
                                <Avatar className="h-8 w-8 relative">
                                    <AvatarImage src="#" alt="Avatar" />
                                    <AvatarFallback className="bg-transparent uppercase">
                                        {user.first_name.charAt(0)}
                                        {user.last_name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                {hasUnreadMessages && (
                                    <RedBeadge className="right-0" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{t("tolip")} </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user.first_name} {user.last_name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link
                            href={route("admin.dashboard")}
                            className="flex items-center"
                        >
                            <LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
                            {t("dashboard")}
                        </Link>
                    </DropdownMenuItem>
                    {(message_permission.viewAny ||
                        message_permission.update ||
                        message_permission.delete ||
                        message_permission.create) && (
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            asChild
                        >
                            <Link
                                href={route("messages.index")}
                                className="flex items-center"
                            >
                                {hasUnreadMessages ? (
                                    <div className="relative">
                                        <Inbox className="w-4 h-4 mr-3 text-muted-foreground" />
                                        <RedBeadge className="right-1/3" />
                                    </div>
                                ) : (
                                    <Inbox className="w-4 h-4 mr-3 text-muted-foreground" />
                                )}
                                {t("inbox")}
                            </Link>
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link
                            href={route("admin.profile.edit")}
                            className="flex items-center"
                        >
                            <User className="w-4 h-4 mr-3 text-muted-foreground" />
                            {t("account")}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Languages className="w-4 h-4 mr-3 text-muted-foreground" />
                        <LangSwitch />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Languages className="w-4 h-4 mr-3 text-muted-foreground" />
                        {/* <LanguageSwitcher /> */}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => {
                        router.post(route("admin.logout"));
                    }}
                >
                    <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
                    {t("logout")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
