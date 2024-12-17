import Navbar from "@/Components/Client/Layout/Navbar";
import Footer from "@/Components/Client/Footer";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/Components/ui/toaster";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function ClientLayout({ children }) {
    const { locale } = usePage().props;
    useEffect(() => {
        document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";
    }, [locale]);
    return (
        <ThemeProvider>
            <div className="bg-muted -z-[2]">
                <Navbar />
                <main className="m-3 sm:m-10 lg:mx-28 min-h-screen ">
                    {children}
                </main>
                <Footer />
            </div>
            <Toaster />
        </ThemeProvider>
    );
}
