import { Link } from "@inertiajs/react";
import React from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";

export default function SideBar({ isOpen, toggleSidebar }) {
    return (
        <aside
            className={`bg-primary dark:bg-primary-foreground shadow-md h-screen p-4 fixed top-16 z-10 ${
                isOpen ? "w-64" : "w-16"
            } transition-width duration-300`}
        >
            <div className="flex justify-end">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <button
                                onClick={toggleSidebar}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                            >
                                {isOpen ? (
                                    <ChevronsLeft className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
                                ) : (
                                    <ChevronsRight className="h-[1.2rem] w-[1.2rem] rotate-360 scale-110 transition-all " />
                                )}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            {isOpen ? (
                                <p>Hide Side Bar</p>
                            ) : (
                                <p>Show Side Bar</p>
                            )}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            {isOpen && (
                <nav>
                    <ul className="space-y-4 mt-4">
                        <li>
                            <Link
                                href={route("admin.dashboard")}
                                className="flex items-center text-primary-foreground dark:text-white hover:text-secondary"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("rooms.index")}
                                className="flex items-center text-primary-foreground dark:text-white hover:text-secondary"
                            >
                                Rooms
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("admin.logout")}
                                method="post"
                                as="button"
                                className="flex items-center text-primary-foreground dark:text-white hover:text-secondary"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </aside>
    );
}
