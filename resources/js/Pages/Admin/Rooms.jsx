import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { DataTable } from "@/Components/Admin/DataTable";
import { columns } from "../../Components/Admin/Columns";
import { Button } from "@/Components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";

export default function Rooms({ rooms }) {
    const { props } = usePage();
    console.log();
    return (
        <AdminLayout>
            <Head title="Rooms" />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route(route().current())}>Chambres</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb>
            rooms.total
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Rooms
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button disabled={rooms.total > 60 }>
                            <Link href={route("rooms.create")}>
                                Creé un chambre
                            </Link>
                        </Button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={rooms.data}
                        paginate={rooms}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
