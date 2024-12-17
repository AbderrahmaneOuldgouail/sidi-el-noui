import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useTranslation } from "react-i18next";
import RoomForm from "@/Components/Admin/Rooms/RoomForm";

export default function RoomEdit({ room, types, categorys }) {
    const { t } = useTranslation();
    return (
        <AdminPanelLayout>
            <Head title={t("rooms.editTitle")} />
            <PageHeading title={t("rooms.editTitle")} />
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <RoomForm
                        types={types}
                        categorys={categorys}
                        room={room[0]}
                    />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
