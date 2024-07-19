import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import CreateRoomForm from "@/Components/Admin/Rooms/CreateRoomForm";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/Admin/Shared/PageHeading";

export default function RoomCreate({ types, categorys }) {
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
                        <Link href={route(route().current())}>
                            Chambres Création
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb> */}
            <PageHeading title={"Chambre Création"}/>
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <CreateRoomForm types={types} categorys={categorys} />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
