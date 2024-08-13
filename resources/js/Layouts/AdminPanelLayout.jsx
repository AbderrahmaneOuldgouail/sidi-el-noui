import React from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/Hooks/useStore";
import SideBar from "@/Components/Admin/Layout/SideBar";
import { useSidebarToggle } from "@/Hooks/useSidebarToggle";
import { Navbar } from "@/Components/Admin/Layout/NavBar";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { usePage } from "@inertiajs/react";

export default function AdminPanelLayout({ children }) {
    const sidebar = useStore(useSidebarToggle, (state) => state);
    const props = usePage().props;
    document.documentElement.dir = props.direction;

    if (!sidebar) return null;

    return (
        <ThemeProvider>
            <SideBar />
            <Navbar title="Dashboard" isOpen={sidebar?.isOpen} />
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-zinc-50 md:p-10 p-2  dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                {children}
            </main>
            <Toaster />
        </ThemeProvider>
    );
}
