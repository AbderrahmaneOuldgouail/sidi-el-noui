import React from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/Hooks/useStore";
import SideBar from "@/Components/Admin/Layout/SideBar";
import { useSidebarToggle } from "@/Hooks/useSidebarToggle";
import { Navbar } from "@/Components/Admin/Layout/NavBar";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";
import { useTrans } from "@/Hooks/useTrans";
import { router } from "@inertiajs/react";

export default function AdminPanelLayout({ children }) {
    const sidebar = useStore(useSidebarToggle, (state) => state);
    const { toast } = useToast();

    Echo.channel(`booking-channel`).listen("NewBooking", (e) => {
        toast({
            description:
                e.booking.user.first_name +
                " " +
                useTrans("à fait un nouveaux réservation"),
        });
        if (route().current() == "admin.dashboard") {
            router.reload({
                preserveScroll: true,
                preserveState: true,
            });
        }
    });

    if (!sidebar) return null;

    return (
        <ThemeProvider>
            <SideBar />
            <Navbar isOpen={sidebar?.isOpen} />
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-zinc-50 md:p-10 p-2 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72 "
                )}
            >
                {children}
            </main>
            <Toaster />
        </ThemeProvider>
    );
}
