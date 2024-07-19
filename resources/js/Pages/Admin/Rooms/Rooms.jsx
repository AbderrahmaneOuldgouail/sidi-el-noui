import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { DataTable } from "@/Components/Admin/DataTable";
import { Button } from "@/Components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import PageHeading from "@/Components/Admin/Shared/PageHeading";
import { columns } from "@/Components/Admin/Rooms/RoomColumns";

export default function Rooms({ rooms }) {
    console.log(route().current());

    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            {/* <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route(route().current())}>Chambres</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href={route(route().current())}>Tous Les Chambres</Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb> */}
            <PageHeading title={"Chambres"} />
            <div className="flex justify-end">
                <Button variant="secondary" disabled={rooms.total > 60}>
                    <Link href={route("rooms.create")}>Creé un chambre</Link>
                </Button>
            </div>
            <PlaceholderContent>
                <div className="max-w-7xl mx-auto ">
                    <DataTable
                        columns={columns}
                        data={rooms.data}
                        paginate={rooms}
                    />
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
