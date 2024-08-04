import React, { useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import EventCard from "@/Components/Admin/Events/EventCard";
import { useTrans } from "@/Hooks/useTrans";

export default function Events({ events }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title="Events" />
            <PageHeading title={useTrans("Evènements")} />
            <div className="flex justify-end">
                <Button variant="secondary">
                    <Link href={route("events.create")}>
                        {useTrans("Créer un évènement")}
                    </Link>
                </Button>
            </div>
            <PlaceholderContent>
                <div className="font-bold p-4">
                    {useTrans("List des évènements")} :
                </div>
                {events.map((event) => (
                    <EventCard event={event} />
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
