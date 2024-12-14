import React from "react";
import { Head, useForm } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CreateGuests({ facture_id }) {
    const { t } = useTranslation("translation", { keyPrefix: "guests" });
    const { data, setData, post, errors, processing } = useForm({
        facture_id: facture_id,
        guests_list: [{ guest_first_name: "", guest_last_name: "" }],
    });

    const addGuest = () => {
        setData("guests_list", [
            ...data.guests_list,
            { guest_first_name: "", guest_last_name: "" },
        ]);
    };

    const minesGuest = (index) => {
        if (data.guests_list.length == 1) {
            return;
        }
        const updatedGuests = data.guests_list.filter((_, i) => i !== index);
        setData("guests_list", updatedGuests);
    };

    const handleGuestChange = (index, field, value) => {
        const updatedGuests = data.guests_list.map((guest, i) =>
            i === index ? { ...guest, [field]: value } : guest
        );
        setData("guests_list", updatedGuests);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("guests.store"));
    };

    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <div className="flex justify-end">
                <Button variant="secondary" size="sm" onClick={addGuest}>
                    <CirclePlus className="mr-2 rtl:ml-2" />
                    {t("addBtn")}
                </Button>
            </div>
            <PlaceholderContent>
                <form onSubmit={submit}>
                    {data.guests_list.map((guest, index) => (
                        <React.Fragment key={index}>
                            <div className="md:flex my-4 gap-4">
                                <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                                    <InputLabel
                                        htmlFor={`guest_first_name_${index}`}
                                        value={t("firstName")}
                                    />
                                    <Input
                                        className="mt-2 w-full bg-card"
                                        id={`guest_first_name_${index}`}
                                        value={guest.guest_first_name}
                                        onChange={(e) =>
                                            handleGuestChange(
                                                index,
                                                "guest_first_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={
                                            errors[
                                                `guests_list.${index}.guest_first_name`
                                            ]
                                        }
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                                    <InputLabel
                                        htmlFor={`guest_last_name_${index}`}
                                        value={t("lastName")}
                                    />
                                    <Input
                                        className="mt-2 w-full bg-card"
                                        id={`guest_last_name_${index}`}
                                        value={guest.guest_last_name}
                                        onChange={(e) =>
                                            handleGuestChange(
                                                index,
                                                "guest_last_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={
                                            errors[
                                                `guests_list.${index}.guest_last_name`
                                            ]
                                        }
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex items-center ">
                                    <CircleMinus
                                        className="cursor-pointer hover:text-red-600"
                                        onClick={() => minesGuest(index)}
                                    />
                                </div>
                            </div>
                            <Separator className="my-4" />
                        </React.Fragment>
                    ))}
                    <div className="flex justify-end">
                        <Button
                            variant="secondary"
                            size="sm"
                            disabled={processing}
                        >
                            {t("saveBtn")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
