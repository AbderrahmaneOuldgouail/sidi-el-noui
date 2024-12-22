import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DataCart({
    data,
    last_data,
    header_text,
    footer_text = "",
    side,
}) {
    const calculate = (last, now) => {
        if (last > 0) {
            return 100 * ((now - last) / last);
        } else {
            return 0;
        }
    };
    return (
        <Card className="w-1/2">
            <CardHeader
                className={cn(
                    "p-2 pb-0 text-sm font-medium",
                    side && "flex-row justify-between items-center"
                )}
            >
                <span>{header_text}</span>
                {side == "left" && (
                    <ArrowLeft className="text-green-600 dark:text-green-400 " />
                )}
                {side == "right" && (
                    <ArrowRight className="text-red-600 dark:text-red-600" />
                )}
            </CardHeader>
            <CardContent className="p-2 font-bold text-4xl">
                + {data}
            </CardContent>
            {footer_text && (
                <CardFooter
                    className={cn(
                        "p-2 pt-0 text-sm font-medium",
                        last_data > data
                            ? "text-red-600 dark:text-red-400"
                            : "text-green-600 dark:text-green-400"
                    )}
                >
                    {calculate(last_data, data) > 0 && "+"}
                    {calculate(last_data, data)}
                    {"% "}
                    {footer_text}
                </CardFooter>
            )}
        </Card>
    );
}
