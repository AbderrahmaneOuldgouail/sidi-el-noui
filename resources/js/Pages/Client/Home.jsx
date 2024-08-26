import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import AutoCarousel from "./Component/Caro";
import Event from "./Component/Event";
import RoomCard from "./Component/RoomCard";

export default function Home() {
    return (
        <ClientLayout>
            <Head title="Home" />
            <div className="max-w-7xl sm:px-6 lg:px-16 mx-auto ">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm  bg-black/10">
                    <div className=" text-gray-900 dark:text-gray-100    ">
                        <AutoCarousel />
                        <div className="p-12">
                            <RoomCard />
                        </div>
                        <Event />
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
