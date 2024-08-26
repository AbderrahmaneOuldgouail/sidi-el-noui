import Navbar from "@/Components/Client/Navbar";
import Footer from "@/Components/Client/Footer";

export default function ClientLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-muted">
            <div className="w-full mx-auto bg-primary flex-grow">
                <Navbar />
                <div className="bg-muted dark:bg-gray-800 overflow-hidden">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
