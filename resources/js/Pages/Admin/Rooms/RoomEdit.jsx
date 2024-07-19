import { Head, Link } from "@inertiajs/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import EditRoomForm from "@/Components/Admin/Rooms/EditRoomForm";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/Admin/Shared/PageHeading";

export default function RoomEdit({ room, types, categorys }) {
    return (
        <AdminPanelLayout>
            <Head title="Rooms crete" />
            {/* <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route("rooms.index")}>Chambres</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link
                            href={route(route().current(), room[0].room_number)}
                        >
                            Chambres Modification
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb> */}
            <PageHeading title={'Chambre Modéfication'}/>
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
