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
import { Settings2 } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Input } from "@/Components/ui/input";
import LabelDescreption from "@/Components/LabelDescreption";
import { Separator } from "@/Components/ui/separator";

export default function Factures({ factures, bill_settings }) {
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const flash = usePage().props.flash;
    const permissions = usePage().props.auth.permissions;
    const { data, setData, errors, post } = useForm({
        tva: bill_settings?.tva,
        timbre: bill_settings?.timbre,
        tourist_tax: bill_settings?.tourist_tax,
    });

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    const submit = (e) => {
        e.preventDefault();
        post(route("factures.bill.settings"), {
            onSuccess: () => setOpen(false),
        });
    };

    return (
        <AdminPanelLayout>
            <Head title="Factures" />
            <PageHeading title={useTrans("Factures")} />
            {permissions.role.create && (
                <div className="flex justify-end gap-2">
                    <Button variant="secondary" size="sm">
                        <Link href={route("bookings.index")}>
                            {useTrans("Générer pour une réservation")}
                        </Link>
                    </Button>
                    <Sheet open={open || !bill_settings} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <Settings2 />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    {useTrans("Parametre de facture")}
                                </SheetTitle>
                                <SheetDescription>
                                    {useTrans(
                                        "Modifier les constant de facturation içi"
                                    )}
                                </SheetDescription>
                                <form onSubmit={submit}>
                                    <div className="w-full bg-muted p-4 shadow my-4">
                                        <InputLabel htmlFor="tva" value="TVA" />
                                        <LabelDescreption>
                                            {useTrans("La valeur de TVA en %")}
                                        </LabelDescreption>
                                        <Input
                                            className="mt-2 w-full bg-card"
                                            id="tva"
                                            value={data.tva}
                                            onChange={(e) =>
                                                setData("tva", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.tva}
                                            className="mt-2"
                                        />
                                    </div>
                                    <Separator />
                                    <div className="w-full bg-muted p-4 shadow my-4">
                                        <InputLabel
                                            htmlFor="tourist_tax"
                                            value={useTrans("Taxe de séjour")}
                                        />
                                        <LabelDescreption>
                                            {useTrans(
                                                "la valeur de taxe de séjour en DA/personne"
                                            )}
                                        </LabelDescreption>
                                        <Input
                                            className="mt-2 w-full bg-card"
                                            id="tourist_tax"
                                            value={data.tourist_tax}
                                            onChange={(e) =>
                                                setData(
                                                    "tourist_tax",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.tourist_tax}
                                            className="mt-2"
                                        />
                                    </div>
                                    <Separator />
                                    <div className="w-full bg-muted p-4 shadow my-4">
                                        <InputLabel
                                            htmlFor="timbre"
                                            value={useTrans("Droit de timbre")}
                                        />
                                        <LabelDescreption>
                                            {useTrans(
                                                "La valeur de tibmre en %"
                                            )}
                                        </LabelDescreption>
                                        <Input
                                            className="mt-2 w-full bg-card"
                                            id="timbre"
                                            value={data.timbre}
                                            onChange={(e) =>
                                                setData(
                                                    "timbre",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.timbre}
                                            className="mt-2"
                                        />
                                    </div>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="w-full"
                                    >
                                        {useTrans("Enregistrer")}
                                    </Button>
                                </form>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            )}
            <PlaceholderContent>
                <DataTable
                    columns={factureColumns}
                    data={factures.data}
                    paginate={factures}
                    selection={false}
                />
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
