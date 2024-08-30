import React, { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { Badge } from "@/Components/ui/badge";
import { BedSingle, CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useTrans } from "@/Hooks/useTrans";

export default function RoomsServces({
    rooms,
    services,
    booking_data,
    selectedRooms,
    setSelectedRooms,
    data,
    setData,
    total,
    setTotal,
    beedsNumber,
    setBeedsNumber,
}) {
    const addRoom = (room) => {
        setTotal(total + room.room_price);
        setBeedsNumber(beedsNumber + Number(room.beeds_number));
        setSelectedRooms([...selectedRooms, room]);
        setData((prevData) => {
            prevData.rooms.push(room.id);
            return { ...prevData };
        });
    };

    const generateTableRows = (data) => {
        const rows = [];

        for (const [roomType, beds] of Object.entries(data)) {
            let typeRowSpan = 0;

            for (const bed of Object.values(beds)) {
                typeRowSpan += Object.keys(bed).length;
            }

            let firstTypeRow = true;

            for (const [bedNumber, prices] of Object.entries(beds)) {
                let bedRowSpan = Object.keys(prices).length;
                let firstBedRow = true;

                for (const [price, rooms] of Object.entries(prices)) {
                    rows.push(
                        <tr key={`${roomType}-${bedNumber}-${price}`}>
                            {firstTypeRow && (
                                <td
                                    className="boreder border-2 border-secondary px-3 align-top "
                                    rowSpan={typeRowSpan}
                                >
                                    <div className="flex flex-col items-start ">
                                        <div>{roomType}</div>
                                        <div>
                                            {rooms[0].features.map(
                                                (feature) => (
                                                    <Badge
                                                        className="m-px"
                                                        key={feature.feature_id}
                                                    >
                                                        {feature.features_name}
                                                        {feature.need_value ==
                                                            true &&
                                                            ": " +
                                                                feature.pivot
                                                                    .valeur}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </td>
                            )}
                            {firstBedRow && (
                                <td
                                    className="boreder border-2 border-secondary px-3 "
                                    rowSpan={bedRowSpan}
                                >
                                    <div className="flex">
                                        {Array.from(
                                            { length: bedNumber },
                                            (_, index) => (
                                                <BedSingle key={index} />
                                            )
                                        )}
                                    </div>
                                </td>
                            )}
                            <td className="boreder border-2 border-secondary px-3">
                                {price} {useTrans("DA")}{" "}
                            </td>
                            <td className="boreder-b border-2 border-b-secondary px-3 flex justify-between items-center">
                                {rooms.length} Chambre
                                {rooms.length == 1 ? "" : "s"}
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="z-[1]"
                                    disabled={
                                        beedsNumber >=
                                            booking_data.guest_number ||
                                        (rooms.length <= 1 &&
                                            selectedRooms.includes(
                                                rooms[rooms.length - 1]
                                            )) ||
                                        selectedRooms.includes(
                                            rooms.filter(
                                                (r) =>
                                                    r.id !==
                                                    rooms[rooms.length - 1].id
                                            )[
                                                rooms.filter(
                                                    (r) =>
                                                        r.id !==
                                                        rooms[rooms.length - 1]
                                                            .id
                                                ).length - 1
                                            ]
                                        )
                                    }
                                    onClick={() =>
                                        addRoom(
                                            selectedRooms.includes(
                                                rooms[rooms.length - 1]
                                            )
                                                ? rooms.filter(
                                                      (r) =>
                                                          r.id !==
                                                          rooms[
                                                              rooms.length - 1
                                                          ].id
                                                  )[
                                                      rooms.filter(
                                                          (r) =>
                                                              r.id !==
                                                              rooms[
                                                                  rooms.length -
                                                                      1
                                                              ].id
                                                      ).length - 1
                                                  ]
                                                : rooms[rooms.length - 1]
                                        )
                                    }
                                >
                                    <CirclePlus />
                                </Button>
                            </td>
                        </tr>
                    );
                    firstTypeRow = false;
                    firstBedRow = false;
                }
            }
        }

        return rows;
    };

    const increment = (consumption) => {
        setTotal(total + consumption.consumption_price);
        setData((prevData) => {
            const existingIndex = prevData.consomation.findIndex(
                (c) => c.consumption_id === consumption.consumption_id
            );
            if (existingIndex > -1) {
                prevData.consomation[existingIndex].quantity += 1;
            } else {
                prevData.consomation.push({
                    consumption_id: consumption.consumption_id,
                    quantity: 1,
                    price: consumption.consumption_price,
                    name: consumption.consumption_name,
                });
            }
            return { ...prevData };
        });
    };

    const decrement = (consumption) => {
        setData((prevData) => {
            const existingIndex = prevData.consomation.findIndex(
                (c) => c.consumption_id === consumption.consumption_id
            );
            if (existingIndex > -1) {
                setTotal(total - consumption.consumption_price);
                if (prevData.consomation[existingIndex].quantity === 1) {
                    prevData.consomation.splice(existingIndex, 1);
                } else {
                    prevData.consomation[existingIndex].quantity -= 1;
                }
            }
            return { ...prevData };
        });
    };

    const getQuantity = (consumption_id) => {
        const item = data?.consomation.find(
            (c) => c.consumption_id === consumption_id
        );
        return item ? item.quantity : 0;
    };
    return (
        <Accordion
            type="single"
            collapsible
            className="w-3/4"
            defaultValue="rooms"
        >
            <AccordionItem value="rooms">
                <AccordionTrigger className="bg-card mb-2 p-3 rounded">
                    Is it accessible?
                </AccordionTrigger>
                <AccordionContent>
                    <table className="relative border-muted border-1 border bg-card z-[10]">
                        <thead className="relative">
                            <tr className="border border-secondary  border-2">
                                <th className="w-1/2">Type de logement</th>
                                <th>Nombre de lits</th>
                                <th className="w-1/4">Tarif</th>
                                <th className="w-1/4">
                                    Selectionner des chambrs
                                </th>
                            </tr>
                        </thead>
                        <tbody>{generateTableRows(rooms)}</tbody>
                    </table>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rooms-1">
                <AccordionTrigger className="bg-card mb-2 p-3 rounded">
                    Services
                </AccordionTrigger>
                <AccordionContent>
                    <div className="relative bg-card z-[10] p-4 rounded">
                        {services.map((service) => (
                            <div className="mb-2" key={service.service_id}>
                                <div className="font-bold">
                                    {service.service_name}
                                </div>
                                <div>
                                    {service.consomation.map((consomation) => (
                                        <div
                                            className="flex justify-between gap-4 items-center"
                                            key={consomation.consumption_id}
                                        >
                                            <div>
                                                {consomation.consumption_name} à{" "}
                                                <span className="font-bold">
                                                    {
                                                        consomation.consumption_price
                                                    }{" "}
                                                    DA
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-center border rounded p-1 bg-muted">
                                                <CircleMinus
                                                    onClick={() =>
                                                        decrement(consomation)
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
                                                        increment(consomation)
                                                    }
                                                    className="cursor-pointer hover:text-secondary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
