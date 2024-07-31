import React, { useState, useEffect } from "react";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

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
import { Switch } from "@/Components/ui/switch";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Promotion({ promotion }) {
    const [dateRange, setDateRange] = useState({
        from: new Date(promotion.promo_start_date),
        to: new Date(promotion.promo_end_date),
    });
    const { toast } = useToast();
    const { data, setData, post, errors } = useForm({
        promo_descreption: promotion.promo_descreption,
        promo_start_date: promotion.promo_start_date,
        promo_end_date: promotion.promo_end_date,
        promo_value: promotion.promo_value,
        is_active: promotion.is_active,
        assets: [],
    });

    const flash = usePage().props.flash;

    const submit = (e) => {
        e.preventDefault();
        post(route("promotions.update", promotion.promotion_id));
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
            setData("promo_start_date", formattedDate);
        }
        if (range?.to) {
            const formattedDate = formatDate(range.to);
            setData("promo_end_date", formattedDate);
        }
        setDateRange(range);
    };

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    console.log(errors);
    console.log(promotion);
    return (
        <AdminPanelLayout>
            <Head title="Promotion" />
            <PageHeading title="Promotion" />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <DatePickerWithRange
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />
                    <div className="mb-3 mt-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="promo_descreption"
                                value="Descreption:"
                                className="w-fit"
                            />
                            <Textarea
                                className="mt-2"
                                placeholder="Example : Descreption"
                                id="promo_descreption"
                                value={data.promo_descreption}
                                onChange={(e) =>
                                    setData("promo_descreption", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.promo_descreption}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="promo_value"
                            value="Valeur de promotion :"
                        />
                        <Input
                            className="mt-2"
                            placeholder="Example : 100"
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
                    <div>
                        <InputLabel htmlFor="is_active">active</InputLabel>
                        <Switch
                            id="is_active"
                            checked={data.is_active}
                            onCheckedChange={() =>
                                setData("is_active", !data.is_active)
                            }
                        />
                    </div>
                    <div className="mb-3">
                        <InputLabel
                            htmlFor="assets"
                            value="Images de promotion :"
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
                    </div>
                    <Button variant="secondary" type="submit">
                        Enregistré
                    </Button>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
