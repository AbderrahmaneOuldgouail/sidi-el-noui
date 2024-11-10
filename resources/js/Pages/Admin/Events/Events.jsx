import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import EventCard from "@/Components/Admin/Events/EventCard";
import { useTrans } from "@/Hooks/useTrans";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { Megaphone } from "lucide-react";

export default function Events({ events, event_permission }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    console.log(events);
    return (
        <AdminPanelLayout>
            <Head title="Events" />
            <PageHeading title={useTrans("Evènements")} />
            <div className="flex justify-end">
                {event_permission.create && (
                    <Button variant="secondary">
                        <Link href={route("events.create")}>
                            {useTrans("Créer un évènement")}
                        </Link>
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                {events.lenght ? (
                    <>
                        <div className="font-bold p-4">
                            {useTrans("List des évènements")} :
                        </div>
                        {events.map((event) => (
                            <EventCard event={event} key={event.event_id} />
                        ))}
                    </>
                ) : (
                    <EmptyPage
                        text="Aucun évènement pour l'instant, essayez de créer une nouvelle"
                        icon={Megaphone}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
