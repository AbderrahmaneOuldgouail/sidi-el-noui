import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";
import { useTrans } from "@/Hooks/useTrans";
import { FileDown, Printer, Send } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import { AppLogo } from "@/Components/ui/app-logo";

export default function Facture({ facture, mail, total_ttc }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    return (
        <AdminPanelLayout>
            <Head title="Facture" />
            <PageHeading title={"Facture"} />
            <div className="flex justify-end gap-2">
                <Link
                    href={route("factures.send", {
                        id: facture.facture_id,
                    })}
                    className={
                        "flex w-full" +
                        buttonVariants({ variant: "secondary", size: "sm" })
                    }
                    as="button"
                >
                    <Send className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    <span>{useTrans("Email")}</span>
                </Link>
                <a
                    href={route("factures.print", {
                        id: facture.facture_id,
                    })}
                    target="_blank"
                >
                    <Button variant="secondary" size="sm">
                        <Printer className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        <span>{useTrans("Imprimer")}</span>
                    </Button>
                </a>
                <a
                    href={route("factures.download", {
                        id: facture.facture_id,
                    })}
                >
                    <Button variant="secondary" size="sm">
                        <FileDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        <span>{useTrans("Télécharger")}</span>
                    </Button>
                </a>
            </div>
            <PlaceholderContent>
                <div className="p-10 font-sans">
                    <header className="flex justify-between mb-4">
                        <div>Hôtel Sidi El Noui</div>
                        <div>
                            <AppLogo className="h-10 w-10" />
                        </div>
                        <div>فندق سيدي النوي</div>
                    </header>
                    <hr className="mb-4" />
                    <main>
                        <section className="text-center font-semibold mb-5">
                            <div>
                                Siege Social : 18 rue Alioua Fodil CHERAGA
                            </div>
                            <div>
                                <span>Tél : 023 35 82 26 / 30 </span>
                                <span>Fax : 023 35 82 32 / 34</span>
                                <span>
                                    Mail:
                                    {mail}
                                </span>
                            </div>
                        </section>
                        <div className="w-1/2">
                            <div className="font-semibold mb-2">
                                <span className="inline-block w-1/2">
                                    Facture
                                </span>
                                <span className="inline-block w-1/2 text-right">
                                    {facture.facture_id}
                                </span>
                            </div>
                            <div className="font-semibold mb-2">
                                <span className="inline-block w-1/2">
                                    Facturé le
                                </span>
                                <span className="inline-block w-1/2 text-right">
                                    {facture.created_at.split("T")[0]}
                                </span>
                            </div>
                        </div>
                        <div className="text-left my-4">
                            <div>Doit</div>
                            <div className="border-2 border-black p-2 mt-2 h-36 flex flex-wrap gap-4">
                                <span>{facture.data.user.first_name}</span>
                                <span>{facture.data.user.last_name}</span>
                                {" / "}
                                <span>
                                    {facture.data.user.adresse &&
                                        "Adresse : " +
                                            facture.data.user.adresse}
                                </span>
                                {" / "}
                                <span>
                                    {facture.data.user.nif &&
                                        "Numéro d'Identification Fiscale : " +
                                            facture.data.user.nif}
                                </span>
                                {" / "}
                                <span>
                                    {facture.data.user.nis &&
                                        "Numéro d'Identification Statistique : " +
                                            facture.data.user.nis}
                                </span>
                                {" / "}
                                <span>
                                    {facture.data.user.nrc &&
                                        "Numéro  de registre de commerce : " +
                                            facture.data.user.nrc}
                                </span>
                                {" / "}
                                <span>
                                    {facture.data.user.n_article &&
                                        "Numéro d'article : " +
                                            facture.data.user.n_article}
                                </span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="w-full border-collapse border border-black mb-6">
                                <thead>
                                    <tr className="bg-muted text-muted-foreground">
                                        <th className="border border-black p-2">
                                            Description
                                        </th>
                                        <th className="border border-black p-2">
                                            Date
                                        </th>
                                        <th className="border border-black p-2">
                                            Nombre de jours
                                        </th>
                                        <th className="border border-black p-2">
                                            Quantité
                                        </th>
                                        <th className="border border-black p-2">
                                            Prix unitaire
                                        </th>
                                        <th className="border border-black p-2">
                                            Montant HT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {facture.data.rooms.map((room, index) => (
                                        <tr key={index}>
                                            <td className="border border-black p-2">
                                                {room.room}
                                            </td>
                                            <td className="border border-black p-2">
                                                {facture.data.booking.check_in}{" "}
                                                AU{" "}
                                                {facture.data.booking.check_out}
                                            </td>
                                            <td className="border border-black p-2">
                                                {(new Date(
                                                    facture.data.booking.check_out
                                                ) -
                                                    new Date(
                                                        facture.data.booking.check_in
                                                    )) /
                                                    (1000 * 60 * 60 * 24)}
                                            </td>
                                            <td className="border border-black p-2">
                                                {room.quantity}
                                            </td>
                                            <td className="border border-black p-2">
                                                {room.unitare_price}
                                            </td>
                                            <td className="border border-black p-2">
                                                {room.unitare_price *
                                                    room.quantity}
                                            </td>
                                        </tr>
                                    ))}
                                    {facture.data.consomations.map(
                                        (consomation, index) => (
                                            <tr key={index}>
                                                <td className="border border-black p-2">
                                                    {
                                                        consomation.consumption_name
                                                    }
                                                </td>
                                                <td className="border border-black p-2">
                                                    /
                                                </td>
                                                <td className="border border-black p-2">
                                                    /
                                                </td>
                                                <td className="border border-black p-2">
                                                    {consomation.quantity}
                                                </td>
                                                <td className="border border-black p-2">
                                                    {consomation.unitare_price}
                                                </td>
                                                <td className="border border-black p-2">
                                                    {consomation.unitare_price *
                                                        consomation.quantity}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                            <table className="w-2/5 ml-auto border-collapse border border-black">
                                <tbody>
                                    <tr>
                                        <th className="border border-black p-2 bg-muted text-muted-foreground">
                                            Total HT
                                        </th>
                                        <td className="border border-black p-2">
                                            {facture.data.total_ht}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border border-black p-2 bg-muted text-muted-foreground">
                                            Total TVA {facture.tva}%
                                        </th>
                                        <td className="border border-black p-2">
                                            {facture.data.total_tva}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Sous Total
                                        </td>
                                        <td className="border border-black p-2">
                                            {facture.data.sous_total}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Taxe de séjour
                                        </td>
                                        <td className="border border-black p-2">
                                            {facture.data.taxe_de_sejour}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Droit de timbre
                                        </td>
                                        <td className="border border-black p-2">
                                            {facture.data.droit_de_timbre}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Total TTC
                                        </td>
                                        <td className="border border-black p-2">
                                            {facture.data.total_ttc}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6">
                            LA PRESENTE FACTURE EST ARRETEE A LA SOMME DE :
                        </p>
                        <p className="font-bold">{total_ttc}</p>
                    </main>
                    <hr className="mt-6" />
                    <footer className="mt-4">
                        <div className="footer-1 text-center mb-2">
                            <div className="inline-block mx-2">
                                Sarl au capital de: 3 000 000 DA
                            </div>
                            <div className="inline-block mx-2">
                                RC : 16/00-0011557 B 00
                            </div>
                            <div className="inline-block mx-2">
                                NIF : 000016001155791
                            </div>
                            <div className="inline-block mx-2">
                                A.I : 16500 35 10 11
                            </div>
                        </div>
                        <div className="footer-2 text-center">
                            <div className="inline-block mx-2">
                                NIS : 0000165008341 61
                            </div>
                            <div className="inline-block mx-2">
                                CPA Agence de AIN BENIAN
                            </div>
                            <div className="inline-block mx-2">
                                RIB : 004 00 153 400 082361141
                            </div>
                        </div>
                    </footer>
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
