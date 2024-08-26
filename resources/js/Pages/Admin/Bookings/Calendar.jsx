import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";

import PageHeading from "@/Components/ui/PageHeading";
import Calender from "@/Components/Admin/Shared/Calender";

export default function Calendar({ rooms }) {
    console.log(rooms);

    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            <PageHeading title={"Calendrier"} />
            <PlaceholderContent>
                <div className="w-full relative h-[600px]">
                    <Calender rooms={rooms} />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
