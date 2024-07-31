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
import { Switch } from "@/Components/ui/switch";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Promotions({ promotions }) {
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });
    const { toast } = useToast();
    const [open, setOpen] = useState(false);
    const { data, setData, post, errors } = useForm({
        promo_descreption: "",
        promo_start_date: "",
        promo_end_date: "",
        promo_value: "",
        is_active: "",
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
            setData("promo_start_date", formattedDate);
        }
        if (range?.to) {
            const formattedDate = formatDate(range.to);
            setData("promo_end_date", formattedDate);
        }
        setDateRange(range);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("promotions.store"));
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

    console.log(promotions);
    return (
        <AdminPanelLayout>
            <Head title="Promotions" />
            <PageHeading title={"Promotions"} />
            <div className="flex justify-end">
                <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                    <DialogTrigger asChild>
                        <Button variant="secondary">Crée un promotion</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Créer un nouvaux promotion
                            </DialogTitle>
                        </DialogHeader>
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
                                            setData(
                                                "promo_descreption",
                                                e.target.value
                                            )
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
                                <InputLabel htmlFor="is_active">
                                    active
                                </InputLabel>
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
                                <InputError
                                    message={errors.assets}
                                    className="mt-2"
                                />
                            </div>
                            <DialogFooter>
                                <Button variant="secondary" type="submit">
                                    Crée
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <PlaceholderContent>
                {promotions.map((promo) => (
                    <Link href={route("promotions.show", promo.promotion_id)}>
                        <Card className="rounded-lg border-none mt-6">
                            <CardContent className="p-6">
                                <div>
                                    {promo.promo_start_date} to{" "}
                                    {promo.promo_end_date}
                                </div>
                                <div>{promo.promo_value}</div>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button variant="destructive">
                                    <Link
                                        href={route(
                                            "promotions.destroy",
                                            promo.promotion_id
                                        )}
                                        as="button"
                                        method="delete"
                                        className=" flex w-full"
                                    >
                                        Supprimer
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
