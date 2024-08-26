import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import { Toggle, toggleVariants } from "@/Components/ui/toggle";

import PageHeading from "@/Components/ui/PageHeading";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import FormInput from "@/Components/Admin/Shared/FormInput";
import { Separator } from "@/Components/ui/separator";
import { useTrans } from "@/Hooks/useTrans";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import LabelDescreption from "@/Components/LabelDescreption";
import { cn } from "@/lib/utils";

export default function AviableRooms({ rooms, bookingData, services }) {
    const [count, setCount] = useState(0);
    const { data, setData, post, errors } = useForm({
        rooms: [],
        consomation: [],
        check_in: bookingData.check_in,
        check_out: bookingData.check_out,
        guest_number: bookingData.guest_number,
        is_company: bookingData.is_company,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        adresse: "",
        nis: "",
        nif: "",
        nrc: "",
        n_article: "",
    });

    console.log(errors);

    const handleRooms = (id) => {
        setData((data) => {
            if (data.rooms.includes(id)) {
                data.rooms.splice(data.rooms.indexOf(id), 1);
            } else {
                data.rooms.push(id);
            }

            return { ...data };
        });
    };

    const increment = (consumption_id) => {
        setCount(count + 1);
        setData((prevData) => {
            const existingIndex = prevData.consomation.findIndex(
                (c) => c.consumption_id === consumption_id
            );
            if (existingIndex > -1) {
                prevData.consomation[existingIndex].quantity += 1;
            } else {
                prevData.consomation.push({
                    consumption_id: consumption_id,
                    quantity: 1,
                });
            }
            return { ...prevData };
        });
    };

    const decrement = (consumption_id) => {
        if (count > 0) {
            setCount(count - 1);
            setData((prevData) => {
                const existingIndex = prevData.consomation.findIndex(
                    (c) => c.consumption_id === consumption_id
                );
                if (existingIndex > -1) {
                    if (prevData.consomation[existingIndex].quantity === 1) {
                        prevData.consomation.splice(existingIndex, 1);
                    } else {
                        prevData.consomation[existingIndex].quantity -= 1;
                    }
                }
                return { ...prevData };
            });
        }
    };

    const getQuantity = (consumption_id) => {
        const item = data.consomation.find(
            (c) => c.consumption_id === consumption_id
        );
        return item ? item.quantity : 0;
    };

    const handleSetData = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("bookings.store"));
    };

    return (
        <AdminPanelLayout>
            <Head title="Chambres disponible" />
            <PageHeading title={useTrans("Chambres disponible")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    {bookingData.is_company ? (
                        <div className="flex gap-2 w-full">
                            <FormInput
                                label="Nom"
                                error={errors.first_name}
                                type="text"
                                data={data.first_name}
                                setData={handleSetData}
                                fieldName="first_name"
                            />
                            <FormInput
                                label="Adresse"
                                error={errors.adresse}
                                type="text"
                                data={data.adresse}
                                setData={handleSetData}
                                fieldName="adresse"
                            />
                        </div>
                    ) : (
                        <div className="flex gap-2 w-full">
                            <FormInput
                                label="Nom"
                                error={errors.first_name}
                                type="text"
                                data={data.first_name}
                                setData={handleSetData}
                                fieldName="first_name"
                            />
                            <FormInput
                                label="Prénom"
                                error={errors.last_name}
                                type="text"
                                data={data.last_name}
                                setData={handleSetData}
                                fieldName="last_name"
                            />
                        </div>
                    )}
                    <Separator />
                    {bookingData.is_company && (
                        <>
                            <div className="flex gap-2 w-full">
                                <FormInput
                                    label="Numéro d'Identification Fiscale"
                                    error={errors.nif}
                                    type="text"
                                    data={data.nif}
                                    setData={handleSetData}
                                    fieldName="nif"
                                />
                                <FormInput
                                    label="Numéro d'Identification Statistique"
                                    error={errors.nis}
                                    type="text"
                                    data={data.nis}
                                    setData={handleSetData}
                                    fieldName="nis"
                                />
                            </div>
                            <Separator />
                            <div className="flex gap-2 w-full">
                                <FormInput
                                    label="Numéro  de registre de commerce"
                                    error={errors.nrc}
                                    type="text"
                                    data={data.nrc}
                                    setData={handleSetData}
                                    fieldName="nrc"
                                />
                                <FormInput
                                    label="Numéro d'article"
                                    error={errors.n_article}
                                    type="text"
                                    data={data.n_article}
                                    setData={handleSetData}
                                    fieldName="n_article"
                                />
                            </div>
                            <Separator />
                        </>
                    )}
                    <FormInput
                        label="Email"
                        label_descreption="L'email doit être unique pour chaque utilisateur"
                        error={errors.email}
                        type="email"
                        data={data.email}
                        setData={handleSetData}
                        fieldName="email"
                    />
                    <Separator />
                    <FormInput
                        label="N° téléphone"
                        label_descreption="Le N° téléphone doit être unique pour chaque utilisateur"
                        error={errors.phone}
                        type="text"
                        data={data.phone}
                        setData={handleSetData}
                        fieldName="phone"
                    />
                </form>
                <Separator className="my-2" />
                <InputLabel className="mb-2">
                    {useTrans("Choisi un ou plusieur chambres à réserver")}
                </InputLabel>
                <table className="table-auto border-collapse w-full border">
                    <thead>
                        <th>{useTrans("Numéro de chambre")}</th>
                        <th>{useTrans("Type de chambre")}</th>
                        <th>{useTrans("Prix TTC")} </th>
                        <th>{useTrans("Caractéristiques")}</th>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr
                                key={room.room_number}
                                onClick={() => handleRooms(room.id)}
                                className={cn(
                                    "hover:bg-accent text-center border cursor-pointer",
                                    data.rooms.includes(room.id)
                                        ? "bg-muted"
                                        : ""
                                )}
                            >
                                <td>Chambre N° {room.room_number}</td>
                                <td>{room.type.type_designation}</td>
                                <td>
                                    {room.room_price} {useTrans("DA")}
                                </td>
                                <td className="flex flex-wrap flex-row p-2 ">
                                    {room.features.map((feature) => (
                                        <Badge>
                                            {feature.features_name}{" "}
                                            {feature.need_value == true &&
                                                " : " + feature.pivot.valeur}
                                        </Badge>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Separator className="my-2" />
                <InputLabel>
                    {useTrans("Ajouter les consommation de cetter réservation")}
                </InputLabel>
                <Accordion type="multiple" className="">
                    {services.map((service) => (
                        <AccordionItem
                            key={service.service_id}
                            value={service.service_name}
                        >
                            <AccordionTrigger>
                                {service.service_name}
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="flex flex-wrap items-center gap-4">
                                    {service.consomation.map(
                                        (consomation, idx) => {
                                            return (
                                                <div
                                                    className="flex justify-between gap-4 items-center"
                                                    key={
                                                        consomation.consumption_id
                                                    }
                                                >
                                                    <InputLabel
                                                        value={
                                                            consomation.consumption_name
                                                        }
                                                    />
                                                    <div className="flex items-center justify-center border rounded p-1 bg-muted">
                                                        <CircleMinus
                                                            onClick={() =>
                                                                decrement(
                                                                    consomation.consumption_id
                                                                )
                                                            }
                                                            className="cursor-pointer hover:text-secondary"
                                                        />
                                                        <span className="w-1/2 flex justify-center">
                                                            {getQuantity(
                                                                consomation.consumption_id
                                                            )}
                                                        </span>
                                                        <CirclePlus
                                                            onClick={() =>
                                                                increment(
                                                                    consomation.consumption_id
                                                                )
                                                            }
                                                            className="cursor-pointer hover:text-secondary"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    {/* <div key={idx}>
                                                    <Button
                                                        onClick={() =>
                                                            decrement(
                                                                consomation.consumption_id
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </Button>
                                                    {
                                                        consomation.consomation_name
                                                    }
                                                    <span>
                                                        {getQuantity(
                                                            consomation.consumption_id
                                                        )}
                                                    </span>
                                                    <Button
                                                        onClick={() =>
                                                            increment(
                                                                consomation.consumption_id
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </div> */}
                    <InputError
                        message={errors.consomations?.message}
                        className="mt-2"
                    />
                </Accordion>
                <Separator className="my-2" />
                <div className="flex justify-end">
                    <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
                        onClick={submit}
                    >
                        {useTrans("Réserver")}
                    </Button>
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
