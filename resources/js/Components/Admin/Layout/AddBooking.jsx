import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";
import { CalendarPlus } from "lucide-react";
import { addDays } from "date-fns";

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
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";

import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { Input } from "@/Components/ui/input";

export function AddBooking() {
    const [dateRange, setDateRange] = useState({
        from: new Date(),
        to: addDays(new Date(), 3),
    });
    const [open, setOpen] = useState(false);
    const { data, post, setData, errors } = useForm({
        check_in: "",
        check_out: "",
        guest_number: "",
        room_number: "",
    });
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

    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogTrigger asChild>
                <Button variant="link">
                    <CalendarPlus size={18} className="mx-2" />
                    Ajouter une réservation
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Ajouter une réservation</DialogTitle>
                    <DialogDescription>
                        Chercher des chambres disponible
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    {/* <DatePickerWithRange /> */}
                    <DatePickerWithRange
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />

                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="guest_number"
                                value="Nombre des personne :"
                                className="w-fit"
                            />
                            <Input
                                className="ml-4 w-full"
                                type="number"
                                min={1}
                                id="guest_number"
                                value={data.guest_number}
                                onChange={(e) =>
                                    setData("guest_number", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.guest_number}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="flex items-center">
                            <InputLabel
                                htmlFor="room_number"
                                value="Nombre des chambres :"
                                className="w-fit"
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
                        </div>
                        <InputError
                            message={errors.room_number}
                            className="mt-2"
                        />
                    </div>
                    <DialogFooter>
                        <Button variant="secondary" type="submit">
                            Rechercher
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
