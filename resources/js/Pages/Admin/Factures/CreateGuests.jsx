import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { useTrans } from "@/Hooks/useTrans";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import { CircleMinus, CirclePlus } from "lucide-react";

export default function CreateGuests({ facture_id }) {
    const { data, setData, post, errors } = useForm({
        facture_id: facture_id,
        guests_list: [{ first_name: "", last_name: "" }],
    });

    console.log(usePage().props);

    const addGuest = () => {
        setData("guests_list", [
            ...data.guests_list,
            { first_name: "", last_name: "" },
        ]);
    };

    const minesGuest = (index) => {
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
            <Head title="List d'invités" />
            <div className="flex justify-end">
                <Button variant="secondary" size="sm" onClick={addGuest}>
                    <CirclePlus className="mr-2" />
                    Ajouter
                </Button>
            </div>
            <PlaceholderContent>
                <form onSubmit={submit}>
                    {data.guests_list.map((guest, index) => (
                        <>
                            <div className="md:flex my-4 gap-4">
                                <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                                    <InputLabel
                                        htmlFor={`first_name_${index}`}
                                        value={useTrans("Prénom")}
                                    />
                                    <Input
                                        className="mt-2 w-full bg-card"
                                        id={`first_name_${index}`}
                                        value={guest.first_name}
                                        onChange={(e) =>
                                            handleGuestChange(
                                                index,
                                                "first_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={
                                            errors[
                                                `guests_list.${index}.first_name`
                                            ]
                                        }
                                        className="mt-2"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                                    <InputLabel
                                        htmlFor={`last_name_${index}`}
                                        value={useTrans("Nom")}
                                    />
                                    <Input
                                        className="mt-2 w-full bg-card"
                                        id={`last_name_${index}`}
                                        value={guest.last_name}
                                        onChange={(e) =>
                                            handleGuestChange(
                                                index,
                                                "last_name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={
                                            errors[
                                                `guests_list.${index}.last_name`
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
                        </>
                    ))}
                    <div className="flex justify-end">
                        <Button variant="secondary" size="sm">
                            {useTrans("Enregistrer")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
