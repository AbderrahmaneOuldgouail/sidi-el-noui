import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import React from "react";

export default function AviableRoomsComponent({ rooms }) {
    return (
        <Accordion>
            {rooms.map((room, index) => (
                <AccordionItem value={index} key={index}>
                    <AccordionTrigger className="hover:no-underline">
                        Chambre N° {room.room_number} avec {room.beeds_number} lits 
                    </AccordionTrigger>
                    <AccordionContent></AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
