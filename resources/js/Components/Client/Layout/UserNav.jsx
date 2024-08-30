import { Link, router, usePage } from "@inertiajs/react";
import { LogOut, User, Languages, BookmarkCheck } from "lucide-react";

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
import { useTrans } from "@/Hooks/useTrans";
import { LangSwitch } from "@/Components/Admin/Layout/LangSwitch";

export function UserNav() {
    const user = usePage().props.auth.user;
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
                                        {/* {user.first_name.charAt(0)}
                                        {user.last_name.charAt(0)} */}
                                        AO
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        {useTrans("Profile")}
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
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link
                            href={route("admin.profile.edit")}
                            className="flex items-center"
                        >
                            <User className="w-4 h-4 mr-3 text-muted-foreground" />
                            {useTrans("Compte")}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer" asChild>
                        <Link
                            href={route("admin.profile.edit")}
                            className="flex items-center"
                        >
                            <BookmarkCheck className="w-4 h-4 mr-3 text-muted-foreground" />
                            {useTrans("Mes réservations")}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Languages className="w-4 h-4 mr-3 text-muted-foreground" />
                        <LangSwitch />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="hover:cursor-pointer"
                    onClick={() => {
                        router.post(route("logout"));
                    }}
                >
                    <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
                    {useTrans("Se déconnecter")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
