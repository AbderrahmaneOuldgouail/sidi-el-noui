import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";

import PageHeading from "@/Components/ui/PageHeading";
import { useTrans } from "@/Hooks/useTrans";
import { LangSwitch } from "@/Components/Admin/Layout/LangSwitch";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
import { Button } from "@/Components/ui/button";

export default function Dashboard() {
    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            <PageHeading title={"Tablaux De Bord"} />
            <LangSwitch />
            <PlaceholderContent>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
