import React from "react";
import { Head, router } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Button } from "@/Components/ui/button";
import { useTranslation } from "react-i18next";

export default function GuestList({ guests }) {
    const { t } = useTranslation("translation", { keyPrefix: "guests" });
    return (
        <AdminPanelLayout>
            <Head title="List d'invités" />
            <div className="flex justify-end">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => router.get(route("guests.create", 5))}
                >
                    {t("addGuestsBtn")}
                </Button>
            </div>
            <PlaceholderContent>
                <table className="border w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 ">{t("lastName")} </th>
                            <th className="border px-4 ">{t("firstName")} </th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest) => (
                            <tr className="hover:bg-muted" key={guest.guest_id}>
                                <td className="border px-4 ">
                                    {guest.guest_first_name}{" "}
                                </td>
                                <td className="border px-4 ">
                                    {guest.guest_last_name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
