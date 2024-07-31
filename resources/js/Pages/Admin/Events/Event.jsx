import React, { useState, useEffect } from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { addDays } from "date-fns";

import { FileUploader } from "react-drag-drop-files";

import { Button } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Textarea } from "@/Components/ui/textarea";
import { AspectRatio } from "@/Components/ui/aspect-ratio";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { Trash } from "lucide-react";
import { useToast } from "@/Components/ui/use-toast";
import { Input } from "@/Components/ui/input";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Event({ event }) {
    const [dateRange, setDateRange] = useState({
        from: new Date(event.event_start_date),
        to: new Date(event.event_end_date),
    });
    const { toast } = useToast();
    const { data, setData, post, errors } = useForm({
        event_name: event.event_name,
        event_descreption: event.event_descreption,
        event_start_date: event.event_start_date,
        event_end_date: event.event_end_date,
        event_price: event.event_price,
        assets: [],
    });

    const flash = usePage().props.flash;

    const submit = (e) => {
        e.preventDefault();
        post(route("events.update", event.event_id));
    };

    const handleFiles = (file) => {
        setData("assets", file);
    };

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

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    console.log(errors)
    return (
        <AdminPanelLayout>
            <Head title="Evènement" />
            <PageHeading title={event.event_name} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <DatePickerWithRange
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />
                    <div className="mb-3 mt-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="event_name"
                                value="Nom d'évènement :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                placeholder="Example : Event name "
                                id="event_name"
                                value={data.event_name}
                                onChange={(e) =>
                                    setData("event_name", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.event_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="event_descreption"
                            value="Descreption :"
                        />
                        <Textarea
                            className="mt-2"
                            placeholder="Example : Descreption"
                            id="event_descreption"
                            value={data.event_descreption}
                            onChange={(e) =>
                                setData("event_descreption", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.event_descreption}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel htmlFor="event_price" value="Price :" />
                        <Input
                            className="mt-2"
                            placeholder="Example : 9500"
                            id="event_price"
                            value={data.event_price}
                            onChange={(e) =>
                                setData("event_price", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.event_price}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="assets"
                            value="Images de service :"
                            className="mb-2"
                        />
                        <FileUploader
                            id="assets"
                            handleChange={handleFiles}
                            name="file"
                            types={fileTypes}
                            multiple={true}
                        />
                        <InputError message={errors.assets} className="mt-2" />
                        {event.assets.map((asset) => (
                            <div
                                className="w-96"
                                onDoubleClick={() =>
                                    router.get(route("assets.delete", asset.id))
                                }
                            >
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="bg-muted"
                                >
                                    <img
                                        src={asset.url}
                                        alt={asset.name}
                                        className="rounded-md object-cover"
                                    />
                                </AspectRatio>
                                <Link
                                    href={route("assets.delete", asset.id)}
                                    as="button"
                                >
                                    <Button variant="destructive">
                                        <Trash />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Button className='mt-6'>
                      Enregistré
                    </Button>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
