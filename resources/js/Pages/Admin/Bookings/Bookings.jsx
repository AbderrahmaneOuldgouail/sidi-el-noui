import React, { useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { historiqueColumns } from "@/Components/Admin/Bookings/HistoriqueColumns";
import { ToastAction } from "@/Components/ui/toast";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { BookmarkCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Bookings({ bookings }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const { t } = useTranslation("translation", { keyPrefix: "bookings" });

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
                              altText={t("toastMessage")}
                              onClick={() =>
                                  router.get(route("factures.index"))
                              }
                          >
                              {t("toastMessage")}
                          </ToastAction>
                      ),
                  });
        }
    }, [flash.message, toast]);
    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            <PlaceholderContent>
                {bookings.data.length ? (
                    <DataTable
                        columns={historiqueColumns}
                        data={bookings.data}
                        paginate={bookings}
                        selection={false}
                    />
                ) : (
                    <EmptyPage text={t("emptyPage")} icon={BookmarkCheck} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
