import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, isBefore } from "date-fns";
import { fr } from "date-fns/locale";

import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { useTranslation } from "react-i18next";

export function DatePickerWithRange({
    date,
    onDateChange,
    className,
    min,
}: {
    date: DateRange | undefined;
    onDateChange: (range: DateRange | undefined) => void;
    className?: string;
    min: number;
}) {
    const { t } = useTranslation();
    const disablePastDates = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return isBefore(date, today);
    };

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            " justify-start text-left font-normal bg-card",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>{t("components.datePicker.title")} </span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        min={min}
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={onDateChange}
                        numberOfMonths={2}
                        locale={fr}
                        weekStartsOn={6}
                        disabled={disablePastDates}
                        showOutsideDays={false}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
