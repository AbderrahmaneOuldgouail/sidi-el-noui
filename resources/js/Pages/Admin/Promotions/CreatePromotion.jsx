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
import { Editor } from "@/Components/Admin/Shared/Editor";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreatePromotion() {
    const [importedFiles, setImportedFiles] = useState([]);
    const { data, setData, post, errors, clearErrors } = useForm({
        promo_value: "",
        promo_descreption: "",
        promo_start_date: "",
        promo_end_date: "",
        is_active: false,
        assets: [],
    });
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });

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

    const submit = (e) => {
        e.preventDefault();
        post(route("promotions.store"));
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
            setData("promo_start_date", formattedDate);
        }
        if (range?.to) {
            const formattedDate = formatDate(range.to);
            setData("promo_end_date", formattedDate);
        }
        setDateRange(range);
    };
    return (
        <AdminPanelLayout>
            <Head title="Service" />
            <PageHeading title={useTrans("Création de promotion")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="Date de promotion"
                                value={useTrans("Date de promotion")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Entrer la date ou le range de date de début et fin de promotion"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="Date de promotion"
                                value={useTrans("Date de promotion")}
                            />
                            <DatePickerWithRange
                                date={dateRange}
                                onDateChange={handleDateChange}
                            />
                            <InputError
                                message={errors.promo_start_date}
                                className="mt-2"
                            />
                            <InputError
                                message={errors.promo_end_date}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="promo_value"
                                value={useTrans("Valeur de promotion")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Entrer la Valeur de promotion en DA"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="promo_value"
                                value={useTrans("Valeur de promotion")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="promo_value"
                                value={data.promo_value}
                                onChange={(e) =>
                                    setData("promo_value", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.promo_value}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="promo_descreption"
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
                                htmlFor="promo_descreption"
                                value={useTrans("Description")}
                            />
                            <Editor
                                autofocus={false}
                                content={data.promo_descreption}
                                onContentChange={({ html }) => {
                                    setData("promo_descreption", html);
                                }}
                            />
                            <InputError
                                message={errors.promo_descreption}
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
                                        "Ajouter des photos au promotion (ne dépasse pas 10 photos par promotion)"
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
                        <ImagesViewer
                            images={importedFiles}
                            errors={errors}
                            deleteImage={deleteImage}
                        />{" "}
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Créer")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
