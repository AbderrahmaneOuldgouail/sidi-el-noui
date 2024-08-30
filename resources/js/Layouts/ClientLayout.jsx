import Navbar from "@/Components/Client/Layout/Navbar";
import Footer from "@/Components/Client/Footer";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { Toaster } from "@/Components/ui/toaster";

export default function ClientLayout({ children }) {
    const locale = localStorage.getItem("locale") || "fr";
    document.documentElement.dir = locale == "ar" ? "rtl" : "ltr";

    return (
        <ThemeProvider>
            <div className="bg-muted -z-[2]">
                <Navbar />
                <main className=" lg:mx-28 min-h-screen ">{children}</main>
                <Footer />
            </div>
            <Toaster />
        </ThemeProvider>
    );
}
