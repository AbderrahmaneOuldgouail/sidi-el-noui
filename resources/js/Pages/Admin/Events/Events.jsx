import React, { useEffect, useState } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { addDays } from "date-fns";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { FileUploader } from "react-drag-drop-files";

import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Textarea } from "@/Components/ui/textarea";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { Input } from "@/Components/ui/input";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import EventCard from "@/Components/Admin/Events/EventCard";
import { useTrans } from "@/Hooks/useTrans";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Events({ events }) {
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const { data, setData, post, errors } = useForm({
        event_name: "",
        event_descreption: "",
        event_start_date: "",
        event_end_date: "",
        event_price: "",
        assets: [],
    });
    const flash = usePage().props.flash;

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    const handleDateChange = (range) => {
        if (range?.from) {
            const formattedDate = formatDate(range.from);
            setData("event_start_date", formattedDate);
        }
        if (range?.to) {
            const formattedDate = formatDate(range.to);
            setData("event_end_date", formattedDate);
        }
        setDateRange(range);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("events.store"));
    };

    const handleFiles = (file) => {
        setData("assets", file);
    };

    useEffect(() => {
        if (flash.message) {
            setOpen(false);
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    console.log(events);
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
