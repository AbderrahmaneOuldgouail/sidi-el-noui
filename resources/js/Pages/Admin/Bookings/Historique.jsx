import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";

import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { historiqueColumns } from "@/Components/Admin/Bookings/HistoriqueColumns";
import { useTrans } from "@/Hooks/useTrans";

export default function Historique({ bookings }) {
    return (
        <AdminPanelLayout>
            <Head title="Historique" />
            <PageHeading title={useTrans("Historique")} />
            <PlaceholderContent>
                <DataTable
                    columns={historiqueColumns}
                    data={bookings.data}
                    paginate={bookings}
                    selection={false}
                />
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
