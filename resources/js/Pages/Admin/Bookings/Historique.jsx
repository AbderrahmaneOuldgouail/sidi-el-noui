import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";

import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { historiqueColumns } from "@/Components/Admin/Bookings/HistoriqueColumns";
import { useTrans } from "@/Hooks/useTrans";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { Archive } from "lucide-react";

export default function Historique({ bookings }) {
    return (
        <AdminPanelLayout>
            <Head title="Historique" />
            <PageHeading title={useTrans("Historique")} />
            <PlaceholderContent>
                {bookings.data.length ? (
                    <DataTable
                        columns={historiqueColumns}
                        data={bookings.data}
                        paginate={bookings}
                        selection={false}
                    />
                ) : (
                    <EmptyPage
                        text="Aucun réservations pour l'instant, essayez de créer une nouvelle"
                        icon={Archive}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
