import React from "react";
import {router, usePage } from "@inertiajs/react";
import { LogOut, User, BookmarkCheck } from "lucide-react";

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
import { useTranslation } from "react-i18next";

export function UserNav() {
    const user = usePage().props.auth.user;
    const [processing, setProcessing] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "client.navbar.userNav",
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
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        {t("profile")}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user?.first_name} {user?.last_name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user?.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        disabled={processing}
                        onClick={() => {
                            router.get(
                                route("client.profile.edit"),
                                {},
                                {
                                    onStart: () => {
                                        setProcessing(true);
                                    },
                                    onFinish: () => {
                                        setProcessing(false);
                                    },
                                }
                            );
                        }}
                    >
                        <User className="w-4 h-4 mr-3 text-muted-foreground" />
                        {t("compte")}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        disabled={processing}
                        onClick={() => {
                            router.get(
                                route("client.bookings.index"),
                                {},
                                {
                                    onStart: () => {
                                        setProcessing(true);
                                    },
                                    onFinish: () => {
                                        setProcessing(false);
                                    },
                                }
                            );
                        }}
                    >
                        <BookmarkCheck className="w-4 h-4 mr-3 text-muted-foreground" />
                        {t("myBookings")}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => {
                        router.post(
                            route("logout"),
                            {},
                            {
                                onStart: () => {
                                    setProcessing(true);
                                },
                                onFinish: () => {
                                    setProcessing(false);
                                },
                            }
                        );
                    }}
                    disabled={processing}
                >
                    <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
                    {t("logOut")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
