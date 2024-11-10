import React, { useEffect, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { DataTable } from "@/Components/Admin/DataTable";
import { factureColumns } from "@/Components/Admin/Factures/FactureColumns";
import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";
import FactureSettings from "@/Components/Admin/Factures/FactureSettings";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { ReceiptText } from "lucide-react";

export default function Factures({ factures, bill_settings }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const facture_permissions = usePage().props.auth.permissions.facture;
    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title="Factures" />
            <PageHeading title={useTrans("Factures")} />
            {facture_permissions.create && (
                <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">
                        <Link href={route("bookings.index")}>
                            {useTrans("Générer pour une réservation")}
                        </Link>
                    </Button>
                    <FactureSettings bill_settings={bill_settings} />
                </div>
            )}
            <PlaceholderContent>
                {factures.data.lenght ? (
                    <DataTable
                        columns={factureColumns}
                        data={factures.data}
                        paginate={factures}
                        selection={false}
                    />
                ) : (
                    <EmptyPage
                        text="Aucun factures pour l'instant, essayez de créer une nouvelle"
                        icon={ReceiptText}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
