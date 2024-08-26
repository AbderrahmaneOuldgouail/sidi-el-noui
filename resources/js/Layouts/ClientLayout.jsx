<<<<<<< HEAD
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
=======
import React from "react";

export default function ClientLayout({ children }) {
    return (
        <div>
            <div className=" bg-white dark:bg-gray-800  overflow-hidden ">
                {children}
>>>>>>> 66b34ba96f44b8b56890a52d4c08669be71e3d91
            </div>
        </div>
    );
}
