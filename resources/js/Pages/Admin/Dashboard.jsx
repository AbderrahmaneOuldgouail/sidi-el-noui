import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";

import {
    Tag,
    // Users,
    // Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    Hotel,
} from "lucide-react";
import PageHeading from "@/Components/Admin/Shared/PageHeading";


export default function Dashboard() {
    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            {/* <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href={route(route().current())}>Dashboard</Link>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb> */}
            <PageHeading title={'Tablaux De Bord'}/>
            <PlaceholderContent>
                Dashboard
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
