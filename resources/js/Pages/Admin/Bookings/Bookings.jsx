import React, { useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";

import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";

import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { historiqueColumns } from "@/Components/Admin/Bookings/HistoriqueColumns";
import { useTrans } from "@/Hooks/useTrans";
import { ToastAction } from "@/Components/ui/toast";

export default function Bookings({ bookings }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            flash.message.status == "success"
                ? toast({
                      description: flash.message?.message,
                  })
                : toast({
                      variant: "destructive",
                      title: "Ereur !",
                      description: flash.message?.message,
                      action: flash.message?.action != null && (
                          <ToastAction
                              altText="Paramètre de facturation"
                              onClick={() =>
                                  router.get(route("factures.index"))
                              }
                          >
                              Paramètre de facturation
                          </ToastAction>
                      ),
                  });
        }
    }, [flash.message, toast]);
    return (
        <AdminPanelLayout>
            <Head title="Bookings" />
            <PageHeading title={useTrans("Réservations")} />
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
