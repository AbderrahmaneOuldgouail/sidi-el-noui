import { router, usePage } from "@inertiajs/react";
import { Bell } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useTranslation } from "react-i18next";
import { RedBeadge } from "@/Components/ui/red-badge";
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
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/Components/ui/dropdown-menu";

export function NotificationsNav() {
    const notifs = usePage().props.notifs;
    const { t } = useTranslation("translation", {
        keyPrefix: "layout.navBar.notifications",
    });

    function timeSince(date) {
        const now = new Date();
        const past = new Date(date);
        const secondsAgo = Math.floor((now - past) / 1000);

        const minutesAgo = Math.floor(secondsAgo / 60);
        const hoursAgo = Math.floor(minutesAgo / 60);
        const daysAgo = Math.floor(hoursAgo / 24);

        if (daysAgo > 0) {
            return `${daysAgo} jrs`;
        } else if (hoursAgo > 0) {
            return `${hoursAgo} h`;
        } else if (minutesAgo > 0) {
            return `${minutesAgo} min`;
        } else {
            return `${secondsAgo} s`;
        }
    }

    const ViewNotification = (notif) => {
        router.get(
            route("bookings.show", notif.data.booking_id),
            {},
            {
                onSuccess: () => {
                    router.post(route("notifications.read"), { id: notif.id });
                },
            }
        );
    };

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
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="#" alt="Avatar" />
                                    <AvatarFallback className="bg-transparent uppercase">
                                        {notifs.length > 0 ? (
                                            <span className="relative">
                                                <Bell size={18} />
                                                <RedBeadge className="right-0" />
                                            </span>
                                        ) : (
                                            <Bell size={18} />
                                        )}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{t("tolip")}</TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuGroup>
                    {notifs.slice(0, 10).map((notif, idx) => (
                        <DropdownMenuItem
                            className="hover:cursor-pointer"
                            key={idx}
                            onClick={() => ViewNotification(notif)}
                        >
                            {t("new")}{" "}
                            <DropdownMenuShortcut>
                                {timeSince(notif?.created_at)}{" "}
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => {
                        router.get(route("notifications.index"));
                    }}
                >
                    {t("all")}{" "}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
