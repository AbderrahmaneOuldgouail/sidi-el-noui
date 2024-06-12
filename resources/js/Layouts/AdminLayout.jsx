import Header from "@/Components/Admin/Header";
import SideBar from "@/Components/Admin/SideBar";
import React from "react";

export default function AdminLayout({ children }) {
    return (
        <>
            <Header />
            <div className="flex">
                <SideBar />
                <div className=" bg-white dark:bg-gray-800  overflow-hidden ">
                    {children}
                </div>
            </div>
        </>
    );
}
