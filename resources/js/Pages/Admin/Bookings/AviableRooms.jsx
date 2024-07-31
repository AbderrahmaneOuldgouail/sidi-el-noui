import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import { Toggle } from "@/Components/ui/toggle";

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

export default function AviableRooms({ rooms, bookingData, services }) {
    const [count, setCount] = useState(0);
    const { data, setData, post, errors } = useForm({
        rooms: [],
        consomation: [],
        bookingData: bookingData,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    const isPressedFn = (room) => data.rooms.includes(room);

    const handleRooms = (pressed, id) => {
        setData((data) => {
            if (pressed) {
                data.rooms.push(id);
            } else {
                data.rooms.splice(data.rooms.indexOf(id), 1);
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

    const submit = (e) => {
        e.preventDefault();
        post(route("bookings.store"));
    };
    console.log(data.consomation);
    return (
        <AdminPanelLayout>
            <Head title="Chambres disponible" />
            <PageHeading title={"Chambres disponible"} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="first_name"
                                value="Nom :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                id="first_name"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.first_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="last_name"
                                value="Prénom :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.last_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="email"
                                value="Email :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="phone"
                                value="Numéro téléphone :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                id="phone"
                                value={data.phone}
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    <Button variant="secondary" type="submit">
                        Enregistrer
                    </Button>
                </form>
                <hr />
                {rooms.map((room) => (
                    <Toggle
                        pressed={isPressedFn(room.id)}
                        onPressedChange={(p) => handleRooms(p, room.id)}
                        key={room.room_number}
                    >
                        room
                    </Toggle>
                ))}
                <hr />
                <Accordion type="multiple" className="w-2/3">
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
                                                <div key={idx}>
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
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
/* <Toggle
                                                    key={idx}
                                                    pressed={isPressedFnConsomation(
                                                        consomation.consumption_id
                                                    )}
                                                    onPressedChange={(p) =>
                                                        handleconsomations(
                                                            p,
                                                            consomation
                                                        )
                                                    }
                                                >
                                                    {
                                                        consomation.consumption_name
                                                    }
                                                    /{" "}
                                                    {
                                                        consomation.consumption_price
                                                    }
                                                </Toggle> */
