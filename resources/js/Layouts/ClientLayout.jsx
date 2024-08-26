import React from "react";

export default function ClientLayout({ children }) {
    return (
        <div>
            <div className=" bg-white dark:bg-gray-800  overflow-hidden ">
                {children}
            </div>
        </div>
    );
}
