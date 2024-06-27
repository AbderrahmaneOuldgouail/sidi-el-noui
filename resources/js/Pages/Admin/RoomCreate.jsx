import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import CreateRoomForm from "@/Components/Admin/Rooms/CreateRoomForm";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";


export default function RoomCreate({ types, categorys }) {
    return (
        <AdminLayout>
            <Head title="Rooms crete" />
            <Breadcrumb>
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
            </Breadcrumb>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Rooms crete
                        </div>
                    </div>
                    <CreateRoomForm types={types} categorys={categorys} />
                </div>
            </div>
        </AdminLayout>
    );
}
