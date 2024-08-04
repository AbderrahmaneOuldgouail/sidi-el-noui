import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { FileUploader } from "react-drag-drop-files";

import { Button } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import MyFileUploader from "@/Components/Admin/Shared/MyFileUploader";
import { ImagesViewer } from "@/Components/Admin/Shared/ImagesViewer";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import LabelDescreption from "@/Components/LabelDescreption";
import { Separator } from "@/Components/ui/separator";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import DbImageViewer from "@/Components/Admin/Shared/DbImageViewer";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function EditEvent({ event }) {
    const [images, setImages] = useState([]);
    const [dateRange, setDateRange] = useState({
        from: new Date(event.event_start_date),
        to: new Date(event.event_end_date),
    });

    const { data, setData, post, errors } = useForm({
        event_name: event.event_name,
        event_descreption: event.event_descreption,
        event_start_date: event.event_start_date,
        event_end_date: event.event_end_date,
        event_price: event.event_price,
        assets: [],
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("events.update", event.event_id));
    };

    const handleFiles = (file) => {
        const files = Array.from(file);
        const promises = files.map((f) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(f);
            });
        });

        Promise.all(promises).then((images) => {
            setImages(images);
        });
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
    return (
        <AdminPanelLayout>
            <Head title="Service" />
            <PageHeading title={useTrans("Modification d'évènement")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="Date d'évènement"
                                value={useTrans("Date d'évènement")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Entrer la date ou le range de date de début et fin d'évènement"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="Date d'évènement"
                                value={useTrans("Date d'évènement")}
                            />
                            <DatePickerWithRange
                                date={dateRange}
                                onDateChange={handleDateChange}
                            />
                            <InputError
                                message={errors.event_start_date}
                                className="mt-2"
                            />
                            <InputError
                                message={errors.event_end_date}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="event_name"
                                value={useTrans("Nom de l'évènement")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Entrer un nom claire et simple pour le nom de l'évènement"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_name"
                                value={useTrans("Nom de l'évènement")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                placeholder={useTrans(
                                    "Exemple : fête 16 Avrile"
                                )}
                                id="event_name"
                                value={data.event_name}
                                onChange={(e) =>
                                    setData("event_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.event_name}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="event_price"
                                value={useTrans("Prix")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Quelle est le prix d'accés d'évènement"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_price"
                                value={useTrans("Prix")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
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
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="event_descreption"
                                value={useTrans("Description")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Vous pouvez ajouter des titre ou bien des style au desciption"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_descreption"
                                value={useTrans("Description")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
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
                    </div>
                    <Separator />
                    <div>
                        <div className="md:flex my-4">
                            <div className="w-full md:w-1/3 pb-2">
                                <InputLabel
                                    htmlFor="assets"
                                    value={useTrans("Photos")}
                                />
                                <LabelDescreption>
                                    {useTrans(
                                        "Ajouter des photos au l'évènement (ne dépasse pas 10 photos par évènement)"
                                    )}
                                </LabelDescreption>
                            </div>
                            <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                                <InputLabel
                                    htmlFor="assets"
                                    value={useTrans("Photos")}
                                />
                                <FileUploader
                                    handleChange={handleFiles}
                                    name="file"
                                    id="assets"
                                    types={fileTypes}
                                    multiple={true}
                                >
                                    <MyFileUploader />
                                </FileUploader>
                                <InputError
                                    message={errors.assets}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <ImagesViewer images={images} />
                        <DbImageViewer assets={event.assets} />
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Enregistrer")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
