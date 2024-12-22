import React from "react";
import { cn } from "@/lib/utils";
import { useStore } from "@/Hooks/useStore";
import SideBar from "@/Components/Admin/Layout/SideBar";
import { useSidebarToggle } from "@/Hooks/useSidebarToggle";
import { Navbar } from "@/Components/Admin/Layout/NavBar";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { useToast } from "@/Components/ui/use-toast";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function AdminPanelLayout({ children }) {
    const sidebar = useStore(useSidebarToggle, (state) => state);
    const { toast } = useToast();
    const { locale } = usePage().props;
    const { t } = useTranslation("translation", { keyPrefix: "layout" });

    React.useEffect(() => {
        document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
    }, [locale]);

    React.useEffect(() => {
        if (typeof Echo !== undefined) {
            const channel = Echo.channel(`booking-channel`);

            channel.listen("NewBooking", (e) => {
                toast({
                    description:
                        e.booking.user.first_name +
                        " " +
                        t("notif"),
                });
            });
            return () => {
                channel.stopListening("NewBooking");
            };
        }
    }, [toast]);

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
