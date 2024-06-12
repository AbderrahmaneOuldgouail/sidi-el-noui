import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export default function ClientLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className=" bg-white dark:bg-gray-800  overflow-hidden ">
                {children}
            </div>
            <Footer />
        </div>
    );
}
