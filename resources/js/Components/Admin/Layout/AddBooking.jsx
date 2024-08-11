import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";
import { CalendarPlus } from "lucide-react";

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
import { useTrans } from "@/Hooks/useTrans";

export function AddBooking() {
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });
    const [open, setOpen] = useState(false);
    const { data, post, setData, errors } = useForm({
        check_in: "",
        check_out: "",
        guest_number: "",
        room_number: "",
    });
    const { width } = useWindowDimensions();
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            setOpen(false);
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

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
        post(route("bookings.searchAviableRoom"));
    };
    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogTrigger asChild>
                    <Button variant="link">
                        <CalendarPlus size={18} className="mx-2" />
                        {useTrans("Ajouter une réservation")}
                    </Button>
                </DialogTrigger>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>
                            {useTrans("Ajouter une réservation")}
                        </DialogTitle>
                        <DialogDescription>
                            {useTrans("Chercher des chambres disponible")}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={submit} className="grid items-start gap-4">
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="dates"
                                value={useTrans(
                                    "Date début et fin de réservation"
                                )}
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
                                value={useTrans("Nombre des personne")}
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
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="room_number"
                                value={useTrans("Nombre des chambres")}
                            />
                            <Input
                                disabled={data.guest_number > 1 ? false : true}
                                type="number"
                                min={2}
                                max={data.guest_number}
                                className="ml-4 w-full"
                                id="room_number"
                                value={data.room_number}
                                onChange={(e) =>
                                    setData("room_number", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.room_number}
                                className="mt-2"
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="secondary" type="submit">
                                {useTrans("Recherche")}
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
                    {useTrans("Ajouter une réservation")}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {useTrans("Ajouter une réservation")}
                    </DrawerTitle>
                    <DrawerDescription>
                        {" "}
                        {useTrans("Chercher des chambres disponible")}
                    </DrawerDescription>
                </DrawerHeader>
                <form onSubmit={submit} className="grid items-start gap-4 px-4">
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="dates"
                            value={useTrans("Date début et fin de réservation")}
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
                            value={useTrans("Nombre des personne")}
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
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="room_number"
                            value={useTrans("Nombre des chambres")}
                        />
                        <Input
                            disabled={data.guest_number > 1 ? false : true}
                            type="number"
                            min={2}
                            max={data.guest_number}
                            className="ml-4 w-full"
                            id="room_number"
                            value={data.room_number}
                            onChange={(e) =>
                                setData("room_number", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.room_number}
                            className="mt-2"
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            variant="secondary"
                            className="w-full"
                            type="submit"
                        >
                            {useTrans("Recherche")}
                        </Button>
                    </DialogFooter>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{useTrans("Annuler")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
