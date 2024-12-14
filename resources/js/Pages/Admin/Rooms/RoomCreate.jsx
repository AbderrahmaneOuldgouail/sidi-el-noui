import { Head, Link } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useTranslation } from "react-i18next";
import RoomForm from "@/Components/Admin/Rooms/RoomForm";

export default function RoomCreate({ types, categorys }) {
    const { t } = useTranslation();
    return (
        <AdminPanelLayout>
            <Head title={t("rooms.createTitle")} />
            <PageHeading title={t("rooms.createTitle")} />
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <RoomForm types={types} categorys={categorys} />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
