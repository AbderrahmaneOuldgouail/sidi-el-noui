import Header from "@/Components/Admin/Header";
import SideBar from "@/Components/Admin/SideBar";
import React, { useState } from "react";
import { ThemeProvider } from "@/Providers/ThemeProvider";

export default function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Header />
            <div className="flex pt-16">
                <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
                <div
                    className={`bg-white dark:bg-gray-800 flex-grow p-4 ${
                        isOpen ? "ml-64" : "ml-16"
                    } transition-margin duration-300`}
                >
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
