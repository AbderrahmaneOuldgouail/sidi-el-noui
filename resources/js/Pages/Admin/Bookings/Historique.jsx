import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { historiqueColumns } from "@/Components/Admin/Bookings/HistoriqueColumns";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { Archive } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Historique({ bookings }) {
    const { t } = useTranslation();
    return (
        <AdminPanelLayout>
            <Head title={t("bookings.historicalTitle")} />
            <PageHeading title={t("bookings.historicalTitle")} />
            <PlaceholderContent>
                {bookings.data.length ? (
                    <DataTable
                        columns={historiqueColumns}
                        data={bookings.data}
                        paginate={bookings}
                        selection={false}
                    />
                ) : (
                    <EmptyPage text={t("bookings.emptyPage")} icon={Archive} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
