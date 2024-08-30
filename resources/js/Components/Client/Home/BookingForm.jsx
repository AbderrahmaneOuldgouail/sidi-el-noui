import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { CirclePlus, CircleMinus, LoaderCircle } from "lucide-react";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";
import { DatePickerWithRange } from "@/Components/ui/DatePickerWithRange";
import { useTrans } from "@/Hooks/useTrans";

export default function BookingForm({ id }) {
    const { data, setData, get, processing } = useForm({
        check_in: "",
        check_out: "",
        guest_number: 0,
        kids_number: 0,
    });
    const [dateRange, setDateRange] = useState({
        from: "",
        to: "",
    });
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

    const incriment = (value) => {
        if (value == "guest_number") {
            setData("guest_number", data.guest_number + 1);
        } else {
            setData("kids_number", data.kids_number + 1);
        }
    };

    const dicriment = (value) => {
        if (value == "guest_number") {
            if (data.guest_number > 0) {
                setData("guest_number", data.guest_number - 1);
            }
        } else {
            if (data.kids_number > 0) {
                setData("kids_number", data.kids_number - 1);
            }
        }
    };

    const submit = (e) => {
        e.preventDefault();
        get(route("client.booking.search"));
    };
    return (
        <div className="relative z-[10] md:px-4 pb-6">
            <form
                onSubmit={submit}
                className="flex items-center md:items-end justify-between gap-2 flex-col md:flex-row"
            >
                <div className="w-2/3 md:w-1/4">
                    <InputLabel
                        value={useTrans("dates")}
                        htmlFor="dates"
                        className="mb-3"
                    />
                    <DatePickerWithRange
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />
                </div>
                <div className="w-2/3 md:w-1/4">
                    <InputLabel
                        htmlFor="guest_number"
                        value={useTrans("Nombre des personne")}
                        className="mb-3"
                    />
                    <div className="flex items-center justify-between border rounded-md p-1 bg-muted">
                        <CircleMinus
                            onClick={() => dicriment("guest_number")}
                            className="cursor-pointer hover:text-secondary"
                        />
                        <span>{data.guest_number} </span>
                        <CirclePlus
                            onClick={() => incriment("guest_number")}
                            className="cursor-pointer hover:text-secondary"
                        />
                    </div>
                </div>
                <div className="w-2/3 md:w-1/4">
                    <InputLabel
                        htmlFor="kids_number"
                        value={useTrans("nombre des bébé")}
                        className="mb-3"
                    />
                    <div className="flex items-center justify-between border rounded-md p-1 bg-muted">
                        <CircleMinus
                            onClick={() => dicriment("kids_number")}
                            className="cursor-pointer hover:text-secondary"
                        />
                        <span>{data.kids_number} </span>
                        <CirclePlus
                            onClick={() => incriment("kids_number")}
                            className="cursor-pointer hover:text-secondary"
                        />
                    </div>
                </div>
                <Button
                    variant="secondary"
                    size="sm"
                    className="md:w-1/12 sm:w-1/6 w-1/4"
                >
                    {processing ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        useTrans("Rechercher")
                    )}
                </Button>
            </form>
        </div>
    );
}
