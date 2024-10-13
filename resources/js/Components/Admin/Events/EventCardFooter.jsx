import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";

export default function EventCardFooter({ event }) {
    const event_permission = usePage().props.event_permission;
    return (
        <div className="flex items-center gap-4 justify-between w-full">
            <div>
                {useTrans("Créé par")} :{" "}
                <span >
                    {event.user.first_name} {event.user.last_name}
                </span>
            </div>
            <div className="flex gap-2">
                {event_permission.update && (
                    <Button variant="secondary">
                        <Link
                            href={route("events.edit", event.event_id)}
                            as="button"
                        >
                            {useTrans("Modifier")}
                        </Link>
                    </Button>
                )}
                {event_permission.delete && (
                    <DeleteeDialog
                        id={event.event_id}
                        url={"events.destroy"}
                        message={
                            "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette évènement"
                        }
                    />
                )}
            </div>
        </div>
    );
}
