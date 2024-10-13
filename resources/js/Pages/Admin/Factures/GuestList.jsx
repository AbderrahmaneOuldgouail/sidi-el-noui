import React from "react";
import { Head, router } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";

export default function GuestList({ guests }) {
    return (
        <AdminPanelLayout>
            <Head title="List d'invités" />
            <div className="flex justify-end">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => router.get(route("guests.create", 5))}
                >
                    {useTrans("Ajouter des invités")}
                </Button>
            </div>
            <PlaceholderContent>
                <table className="border w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 ">{useTrans("Nom")} </th>
                            <th className="border px-4 ">
                                {useTrans("Prénom")}{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((guest) => (
                            <tr className="hover:bg-muted">
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
