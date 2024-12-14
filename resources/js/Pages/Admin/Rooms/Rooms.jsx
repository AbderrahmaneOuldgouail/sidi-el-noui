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
import { Hotel } from "lucide-react";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { useTranslation } from "react-i18next";

export default function Rooms({ rooms, room_permission }) {
    const { width } = useWindowDimensions();
    const {t} = useTranslation("translation", {keyPrefix: "rooms"})

    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            {room_permission.create && (
                <TopButton
                    href={route("rooms.create")}
                    text={t("topButton")}
                />
            )}
            <PlaceholderContent>
                {rooms.data.length ? (
                    width <= 767 ? (
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
                    )
                ) : (
                    <EmptyPage
                        icon={Hotel}
                        text={t("emptyText")}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
