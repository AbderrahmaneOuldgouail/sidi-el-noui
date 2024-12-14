import React, { useEffect } from "react";
import { Head, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";
import { FileDown, Printer, Send } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { AppLogo } from "@/Components/ui/app-logo";
import { useTranslation } from "react-i18next";

export default function Facture({ facture, data, mail, total_ttc_words }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const [processing, setProcessing] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "factures.table",
    });

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);
    return (
        <AdminPanelLayout>
            <Head title={t("factureTitle")} />
            <PageHeading title={t("factureTitle")} />
            <div className="flex justify-end gap-2">
                <Button
                    variant="secondary"
                    size="sm"
                    disabled={processing}
                    onClick={() =>
                        router.get(
                            route("factures.send", { id: facture.facture_id }),
                            {},
                            {
                                onStart: () => {
                                    setProcessing(true);
                                },
                                onFinish: () => {
                                    setProcessing(false);
                                },
                            }
                        )
                    }
                >
                    <Send className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                    <span>{t("email")}</span>
                </Button>
                <a
                    href={route("factures.print", {
                        id: facture.facture_id,
                    })}
                    target="_blank"
                >
                    <Button variant="secondary" size="sm" disabled={processing}>
                        <Printer className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        <span>{t("print")}</span>
                    </Button>
                </a>
                <a
                    href={route("factures.download", {
                        id: facture.facture_id,
                    })}
                >
                    <Button variant="secondary" size="sm" disabled={processing}>
                        <FileDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        <span>{t("download")}</span>
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
                                <span>{facture.booking.user.first_name}</span>
                                <span>{facture.booking.user.last_name}</span>
                                <span>
                                    {facture.booking.user.adresse &&
                                        " / Adresse : " +
                                            facture.booking.user.adresse +
                                            " / "}
                                </span>
                                <span>
                                    {facture.booking.user.nif &&
                                        "Numéro d'Identification Fiscale : " +
                                            facture.booking.user.nif +
                                            " / "}
                                </span>
                                <span>
                                    {facture.booking.user.nis &&
                                        "Numéro d'Identification Statistique : " +
                                            facture.booking.user.nis +
                                            " / "}
                                </span>
                                <span>
                                    {facture.booking.user.nrc &&
                                        "Numéro  de registre de commerce : " +
                                            facture.booking.user.nrc +
                                            " / "}
                                </span>
                                <span>
                                    {facture.booking.user.n_article &&
                                        "Numéro d'article : " +
                                            facture.booking.user.n_article}
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
                                    {data.rooms.map((room, index) => (
                                        <tr key={index}>
                                            <td className="border border-black p-2">
                                                {room.room}
                                            </td>
                                            <td className="border border-black p-2">
                                                {facture.booking.check_in} AU{" "}
                                                {facture.booking.check_out}
                                            </td>
                                            <td className="border border-black p-2">
                                                {(new Date(
                                                    facture.booking.check_out
                                                ) -
                                                    new Date(
                                                        facture.booking.check_in
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
                                    {data.consomations.map(
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
                                            {data.total_ht}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border border-black p-2 bg-muted text-muted-foreground">
                                            Total TVA {facture.tva}%
                                        </th>
                                        <td className="border border-black p-2">
                                            {data.total_tva}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Sous Total
                                        </td>
                                        <td className="border border-black p-2">
                                            {data.sous_total}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Taxe de séjour
                                        </td>
                                        <td className="border border-black p-2">
                                            {data.taxe_de_sejour}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Droit de timbre
                                        </td>
                                        <td className="border border-black p-2">
                                            {data.droit_de_timbre}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-2">
                                            Total TTC
                                        </td>
                                        <td className="border border-black p-2">
                                            {data.total_ttc}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-6">
                            LA PRESENTE FACTURE EST ARRETEE A LA SOMME DE :
                        </p>
                        <p className="font-bold">{total_ttc_words}</p>
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
