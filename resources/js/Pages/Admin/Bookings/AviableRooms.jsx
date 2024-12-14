import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import InputLabel from "@/Components/InputLabel";
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
import { CircleMinus, CirclePlus } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function AviableRooms({ rooms, bookingData, services }) {
    const [count, setCount] = useState(0);
    const { t } = useTranslation("translation", { keyPrefix: "aviableRooms" });
    const { data, setData, post, errors, processing } = useForm({
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

    const handleRooms = (room) => {
        setData((data) => {
            const roomIndex = data.rooms.findIndex((r) => r.id === room.id);
            if (roomIndex !== -1) {
                data.rooms.splice(roomIndex, 1);
            } else {
                data.rooms.push({ id: room.id, room_price: room.room_price });
            }
            return { ...data };
        });
    };

    const increment = (consumption) => {
        setCount(count + 1);
        setData((prevData) => {
            const existingIndex = prevData.consomation.findIndex(
                (c) => c.consumption_id === consumption.consumption_id
            );
            if (existingIndex > -1) {
                prevData.consomation[existingIndex].quantity += 1;
            } else {
                prevData.consomation.push({
                    consumption_id: consumption.consumption_id,
                    current_consumption_price: consumption.consumption_price,
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
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    {bookingData.is_company == 1 ? (
                        <div className="flex gap-2 w-full">
                            <FormInput
                                label={t("name")}
                                error={errors.first_name}
                                type="text"
                                data={data.first_name}
                                setData={handleSetData}
                                fieldName="first_name"
                            />
                            <FormInput
                                label={t("adress")}
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
                                label={t("name")}
                                error={errors.first_name}
                                type="text"
                                data={data.first_name}
                                setData={handleSetData}
                                fieldName="first_name"
                            />
                            <FormInput
                                label={t("lastName")}
                                error={errors.last_name}
                                type="text"
                                data={data.last_name}
                                setData={handleSetData}
                                fieldName="last_name"
                            />
                        </div>
                    )}
                    <Separator />
                    {bookingData.is_company == 1 && (
                        <>
                            <div className="flex gap-2 w-full">
                                <FormInput
                                    label={t("nif")}
                                    error={errors.nif}
                                    type="text"
                                    data={data.nif}
                                    setData={handleSetData}
                                    fieldName="nif"
                                />
                                <FormInput
                                    label={t("nis")}
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
                                    label={t("nrc")}
                                    error={errors.nrc}
                                    type="text"
                                    data={data.nrc}
                                    setData={handleSetData}
                                    fieldName="nrc"
                                />
                                <FormInput
                                    label={t("na")}
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
                        label={t("email")}
                        label_descreption={t("emailDescreption")}
                        error={errors.email}
                        type="email"
                        data={data.email}
                        setData={handleSetData}
                        fieldName="email"
                    />
                    <Separator />
                    <FormInput
                        label={t("phone")}
                        label_descreption={t("phoneDescreption")}
                        error={errors.phone}
                        type="text"
                        data={data.phone}
                        setData={handleSetData}
                        fieldName="phone"
                    />
                </form>
                <Separator className="my-2" />
                <InputLabel className="mb-2">{t("tableHeader")}</InputLabel>
                <table className="table-auto border-collapse w-full border">
                    <thead>
                        <tr>
                            <th>{t("roomNumber")}</th>
                            <th>{t("type")}</th>
                            <th>{t("ttc")} </th>
                            <th>{t("features")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((room) => (
                            <tr
                                key={room.room_number}
                                onClick={() => handleRooms(room)}
                                className={cn(
                                    "hover:bg-muted text-center border cursor-pointer",
                                    data.rooms.findIndex(
                                        (r) => r.id === room.id
                                    ) !== -1
                                        ? "bg-secondary hover:bg-secondary/90"
                                        : ""
                                )}
                            >
                                <td>
                                    {t("roomCode")} {room.room_number}
                                </td>
                                <td>{room.type.type_designation}</td>
                                <td>
                                    {room.room_price} {t("da")}
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
                <InputLabel>{t("cunsumptionHeader")}</InputLabel>
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
                                                                    consomation
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
                        disabled={processing}
                    >
                        {t("submit")}
                    </Button>
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
