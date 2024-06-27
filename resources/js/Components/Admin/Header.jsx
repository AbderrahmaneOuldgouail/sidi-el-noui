import React from "react";
import { useTheme } from "@/Providers/ThemeProvider";
import { Moon, Sun, Bell } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";

export default function Header() {
    const { setTheme } = useTheme();

    return (
        <header className="bg-primary dark:bg-primary-foreground p-4 flex justify-between items-center fixed w-full top-0 z-10">
            <div className="text-xl font-bold text-primary-foreground dark:text-white">
                Sidi El Noui
            </div>
            <div className="flex items-center space-x-4">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="icon">
                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem
                                        onClick={() => setTheme("light")}
                                    >
                                        Light
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => setTheme("dark")}
                                    >
                                        Dark
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => setTheme("system")}
                                    >
                                        System
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Dark mode</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button size="icon" >
                                <Bell />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Notifications</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </header>
    );
}
