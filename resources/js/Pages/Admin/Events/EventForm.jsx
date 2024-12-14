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
import LabelDescreption from "@/Components/LabelDescreption";
import { Separator } from "@/Components/ui/separator";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { useTranslation } from "react-i18next";
import DbImageViewer from "@/Components/Admin/Shared/DbImageViewer";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function EventForm({ event }) {
    const { t } = useTranslation("translation", { keyPrefix: "events.form" });
    const [dbImages, setDbImages] = useState(event?.assets);
    const [importedFiles, setImportedFiles] = useState([]);
    const [dateRange, setDateRange] = useState({
        from: event ? new Date(event.event_start_date) : "",
        to: event ? new Date(event.event_end_date) : "",
    });

    const { data, setData, post, errors, clearErrors, processing } = useForm({
        event_name: event ? event.event_name : "",
        event_descreption: event ? event.event_descreption : "",
        event_start_date: event ? event.event_start_date : "",
        event_end_date: event ? event.event_end_date : "",
        event_price: event ? event.event_price : "",
        assets: [],
        remouved_assets: [],
        required_assets: false,
    });

    const remouveAsset = (index) => {
        setData((prevData) => ({
            ...prevData,
            remouved_assets: [...prevData.remouved_assets, index],
        }));
        setDbImages((prevDbImages) => {
            const updatedDbImages = prevDbImages.filter(
                (image) => image.id !== index
            );

            setData((prevData) => ({
                ...prevData,
                required_assets: updatedDbImages.length === 0,
            }));

            return updatedDbImages;
        });
    };

    const submit = (e) => {
        e.preventDefault();
        event
            ? post(route("events.update", event.event_id))
            : post(route("events.store"));
    };

    const handleFiles = (files) => {
        if (!files || !files.length) return;

        const newFiles = Array.from(files);

        setImportedFiles((prevData) => {
            const updatedFiles = newFiles.map((file) => ({
                file,
                url: URL.createObjectURL(file),
            }));
            return [...prevData, ...updatedFiles];
        });

        setData("assets", [...data.assets, ...newFiles]);
    };

    const deleteImage = (index) => {
        setImportedFiles((prevData) => {
            const updatedFiles = [...prevData];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });

        const updatedAssets = [...data.assets];
        updatedAssets.splice(index, 1);
        setData("assets", updatedAssets);
        clearErrors(`assets.${index}`);
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
            <Head title={event ? t("editTitle") : t("createTitle")} />
            <PageHeading title={event ? t("editTitle") : t("createTitle")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="Date d'évènement"
                                value={t("eventDate")}
                            />
                            <LabelDescreption>
                                {t("eventDateDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="Date d'évènement"
                                value={t("eventDate")}
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
                                value={t("Name")}
                            />
                            <LabelDescreption>
                                {t("nameDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_name"
                                value={t("Name")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                placeholder={t("namePlaceholder")}
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
                                value={t("price")}
                            />
                            <LabelDescreption>
                                {t("priceDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_price"
                                value={t("price")}
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
                                value={t("descreption")}
                            />
                            <LabelDescreption>
                                {t("descreptionDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="event_descreption"
                                value={t("descreption")}
                            />
                            <Editor
                                autofocus={false}
                                content={data.event_descreption}
                                onContentChange={({ html }) => {
                                    setData("event_descreption", html);
                                }}
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
                                    value={t("assets")}
                                />
                                <LabelDescreption>
                                    {t("assetsDescreption")}
                                </LabelDescreption>
                            </div>
                            <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                                <InputLabel
                                    htmlFor="assets"
                                    value={t("assets")}
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
                        <ImagesViewer
                            images={importedFiles}
                            errors={errors}
                            deleteImage={deleteImage}
                        />{" "}
                        {event && (
                            <DbImageViewer
                                assets={dbImages}
                                remouveAsset={remouveAsset}
                            />
                        )}
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                            disabled={processing}
                        >
                            {event ? t("editBtn") : t("createBtn")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
