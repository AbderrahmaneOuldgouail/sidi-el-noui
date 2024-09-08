import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { useTrans } from "@/Hooks/useTrans";
import { Skeleton } from "@/Components/ui/skeleton";
import DataCart from "@/Components/Admin/Dashboard/DataCart";

const Chart = React.lazy(() => import("@/Components/Admin/Dashboard/Chart"));

export default function Dashboard({
    check_ins,
    check_outs,
    day_bookings,
    last_day_bookings,
    month_bookings,
    last_month_bookings,
    bookingCounts,
}) {
    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            <PageHeading title={useTrans("Tableaux De Bord")} />
            <PlaceholderContent>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex gap-6 flex-full lg:w-1/2">
                        <DataCart
                            header_text="Entrés d'aujourd'hui"
                            left={true}
                            data={check_ins}
                            side="left"
                        />
                        <DataCart
                            header_text="Sorties d'aujourd'hui"
                            right={true}
                            data={check_outs}
                            side="right"
                        />
                    </div>
                    <div className="flex gap-6 flex-full lg:w-1/2">
                        <DataCart
                            header_text="Réservations de jour"
                            data={day_bookings}
                            last_data={last_day_bookings}
                            footer_text="du dernier jour"
                        />
                        <DataCart
                            header_text="Réservations de mois"
                            data={month_bookings}
                            last_data={last_month_bookings}
                            footer_text="du mois dernier"
                        />
                    </div>
                </div>
                <React.Suspense
                    fallback={
                        <Skeleton className="w-full md:w-1/2 mt-4 h-1/2" />
                    }
                >
                    <Chart bookingCounts={bookingCounts} />
                </React.Suspense>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
