import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";
import { CalendarPlus, CirclePlus, CircleMinus } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";
import { useTranslation } from "react-i18next";

export function AddBooking() {
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });
    const { data, get, setData, processing, setError, errors, clearErrors } =
        useForm({
            check_in: "",
            check_out: "",
            guest_number: 0,
            is_company: 0,
        });
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const { t } = useTranslation("translation", { keyPrefix: "layout.navBar" });
    const e = usePage().props.errors;

    useEffect(() => {
        if (flash.message) {
            setOpen(false);
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    useEffect(() => {
        if (Object.keys(e).length !== 0) {
            setError("check_in", e.check_in);
            setError("check_out", e.check_out);
            setError("guest_number", e.guest_number);
            setOpen(true);
        }
    }, [e]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    const incriment = () => {
        clearErrors("guest_number");
        setData("guest_number", data.guest_number + 1);
    };

    const dicriment = () => {
        clearErrors("guest_number");
        if (data.guest_number > 0) {
            setData("guest_number", data.guest_number - 1);
        }
    };

    const handleDateChange = (range) => {
        clearErrors("check_in");
        clearErrors("check_out");
        if (range?.from) {
            const formattedDate = formatDate(range.from);
            setData("check_in", formattedDate);
        }
        if (range?.to) {
            const formattedDate = formatDate(range.to);
            setData("check_out", formattedDate);
        }
        setDateRange(range);
    };

    const submit = (e) => {
        e.preventDefault();
        get(route("bookings.searchAviableRoom"));
    };

    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="link">
                        <CalendarPlus size={18} className="mx-2" />
                        {t("addBooking")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{t("addBooking")}</DialogTitle>
                        <DialogDescription>
                            {t("dialog.dialogDescreption")}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submit} className="grid items-start gap-4">
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="dates"
                                value={t("dialog.form.dates")}
                            />
                            <DatePickerWithRange
                                date={dateRange}
                                onDateChange={handleDateChange}
                                min={2}
                            />
                            <InputError
                                message={errors.check_in}
                                className="mt-2"
                            />
                            <InputError
                                message={errors.check_out}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <InputLabel
                                    htmlFor="guest_number"
                                    value={t("dialog.form.guestNumber")}
                                />
                                <div className="flex items-center justify-center w-1/4 border rounded p-1 bg-muted">
                                    <CircleMinus
                                        onClick={() => dicriment()}
                                        className="cursor-pointer hover:text-secondary"
                                    />
                                    <span className="w-1/2 flex justify-center">
                                        {data.guest_number}
                                    </span>
                                    <CirclePlus
                                        onClick={() => incriment()}
                                        className="cursor-pointer hover:text-secondary"
                                    />
                                </div>
                            </div>
                            <InputError
                                message={errors.guest_number}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <Checkbox
                                id="need_value"
                                checked={data.is_company == 1 ? true : false}
                                onCheckedChange={() =>
                                    setData(
                                        "is_company",
                                        data.is_company == 1 ? 0 : 1
                                    )
                                }
                            />
                            <InputLabel
                                htmlFor="need_value"
                                value={t("dialog.form.needValue")}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                variant="secondary"
                                type="submit"
                                disabled={processing}
                            >
                                {t("dialog.form.submit")}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="link">
                    <CalendarPlus size={18} className="mx-2" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{t("addBooking")}</DrawerTitle>
                    <DrawerDescription>
                        {" "}
                        {t("dialog.dialogDescreption")}
                    </DrawerDescription>
                </DrawerHeader>
                <form onSubmit={submit} className="grid items-start gap-4 px-4">
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="dates"
                            value={t("dialog.form.dates")}
                        />
                        <DatePickerWithRange
                            date={dateRange}
                            onDateChange={handleDateChange}
                        />
                        <InputError
                            message={errors.check_in}
                            className="mt-2"
                        />
                        <InputError
                            message={errors.check_out}
                            className="mt-2"
                        />
                    </div>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="guest_number"
                            value={t("dialog.form.guestNumber")}
                        />
                        <Input
                            type="number"
                            min={1}
                            id="guest_number"
                            value={data.guest_number}
                            onChange={(e) =>
                                setData("guest_number", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.guest_number}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Checkbox
                            id="need_value"
                            checked={data.is_company}
                            onCheckedChange={() =>
                                setData("is_company", !data.is_company)
                            }
                        />
                        <InputLabel
                            htmlFor="need_value"
                            value={t("dialog.form.needValue")}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            variant="secondary"
                            className="w-full"
                            type="submit"
                            disabled={processing}
                        >
                            {t("dialog.form.submit")}
                        </Button>
                    </DialogFooter>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">
                            {" "}
                            {t("dialog.form.cancel")}
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
