import React from "react";
import { Link } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";

export default function EventCardFooter({ event }) {
    return (
        <div className="flex justify-between items-center gap-4 ">
            <div className="flex items-center gap-4">
                <Button variant="secondary">
                    <Link
                        href={route("events.edit", event.event_id)}
                        as="button"
                    >
                        {useTrans("Modifier")}
                    </Link>
                </Button>
                <DeleteeDialog
                    id={event.event_id}
                    url={"events.destroy"}
                    message={
                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette évènement"
                    }
                />
            </div>
        </div>
    );
}
