import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
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

export default function Rooms({ rooms }) {
    const { data, setData, post, errors } = useForm({
        rooms: [],
    });
    const permissions = usePage().props.auth.permissions;
    const { width } = useWindowDimensions();
    const isPressedFn = (room) => data?.rooms.includes(room);

    const handleRooms = (pressed, id) => {
        setData((data) => {
            if (pressed) {
                data.rooms.push(id);
            } else {
                data.rooms.splice(data.rooms.indexOf(id), 1);
            }

            return { ...data };
        });
    };

    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading title={useTrans("Chambres")} />
            {permissions.room.create && (
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
