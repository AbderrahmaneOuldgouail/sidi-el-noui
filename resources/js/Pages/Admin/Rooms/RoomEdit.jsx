import { Head, Link } from "@inertiajs/react";
import EditRoomForm from "@/Components/Admin/Rooms/EditRoomForm";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useTrans } from "@/Hooks/useTrans";

export default function RoomEdit({ room, types, categorys }) {
    return (
        <AdminPanelLayout>
            <Head title="Rooms crete" />
            <PageHeading title={useTrans("Chambre Modification")} />
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <EditRoomForm
                        types={types}
                        categorys={categorys}
                        room={room[0]}
                    />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
