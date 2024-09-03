import React from "react";
import { Head, useForm } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { DataTable } from "@/Components/Admin/DataTable";
import PageHeading from "@/Components/ui/PageHeading";
import { columns } from "@/Components/Admin/Rooms/RoomColumns";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import RoomCard from "@/Components/Admin/Rooms/RoomCard";
import TopButton from "@/Components/Admin/Layout/TopButton";
import MobilePagination from "@/Components/Admin/Shared/MobilePagination";
import { useTrans } from "@/Hooks/useTrans";

export default function Rooms({ rooms, room_permission }) {
    const { width } = useWindowDimensions();

    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading title={useTrans("Chambres", "Rooms")} />
            {room_permission.create && (
                <TopButton
                    href={route("rooms.create")}
                    text={useTrans("Crée un chambre")}
                />
            )}
            <PlaceholderContent>
                {width <= 767 ? (
                    <div>
                        {rooms.data.map((room) => (
                            <RoomCard key={room.room_number} room={room} />
                        ))}
                        <MobilePagination data={rooms} />
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto invisible md:visible">
                        <DataTable
                            columns={columns}
                            data={rooms.data}
                            paginate={rooms}
                            selection={false}
                        />
                    </div>
                )}
                {/* {rooms.map((room) => (
                    <Toggle
                        key={room.room_number}
                        pressed={isPressedFn(room.id)}
                        onPressedChange={(p) => handleRooms(p, room.id)}
                    >
                        {room.room_number}
                    </Toggle>
                ))} */}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
