import React from "react";
import { Head } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout";
import RoomCard from "./Component/RoomCard";
import ReservationForm from "./Component/ReservationForm";

export default function Rooms() {
    return (
        <ClientLayout>
            <Head title="Rooms" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="container mx-auto py-8">
                                <h2 className="text-5xl font-bold text-center mb-8 text-primary font-serif italic">
                                    Nos Chambres
                                </h2>
                                <RoomCard />
                                <ReservationForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
