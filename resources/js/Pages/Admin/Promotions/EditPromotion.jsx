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

export default function EditPromotion({ promotion }) {
    const [images, setImages] = useState([]);
    const [dateRange, setDateRange] = useState({
        from: new Date(promotion.promo_start_date),
        to: new Date(promotion.promo_end_date),
    });

    const { data, setData, post, errors } = useForm({
        promo_value: promotion.promo_value,
        promo_descreption: promotion.promo_descreption,
        promo_start_date: promotion.promo_start_date,
        promo_end_date: promotion.promo_end_date,
        assets: [],
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("promotions.update", promotion.promotion_id));
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
            <PageHeading title={useTrans("Modification de promotion")} />
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
                            <Input
                                className="mt-2 w-full bg-card"
                                id="promo_descreption"
                                value={data.promo_descreption}
                                onChange={(e) =>
                                    setData("promo_descreption", e.target.value)
                                }
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
                        <ImagesViewer images={images} />
                        <DbImageViewer assets={promotion.assets} />
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
