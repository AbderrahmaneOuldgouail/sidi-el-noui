import { Head, Link } from "@inertiajs/react";
import CreateRoomForm from "@/Components/Admin/Rooms/CreateRoomForm";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useTrans } from "@/Hooks/useTrans";

export default function RoomCreate({ types, categorys }) {
    return (
        <AdminPanelLayout>
            <Head title="Rooms crete" />
            <PageHeading title={useTrans("Chambre Création")} />
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <CreateRoomForm types={types} categorys={categorys} />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
