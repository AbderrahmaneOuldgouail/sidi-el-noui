import React from "react";
import { Head } from "@inertiajs/react";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import PageHeading from "@/Components/ui/PageHeading";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/Components/ui/chart";
import { useTrans } from "@/Hooks/useTrans";

export default function Dashboard({
    check_ins,
    check_outs,
    day_bookings,
    last_day_bookings,
    month_bookings,
    last_month_bookings,
    rooms,
}) {
    const calculate = (last, now) => {
        if (last > 0) {
            return 100 * ((now - last) / last);
        } else {
            return 0;
        }
    };

    const dataChart = [
        Object.keys(rooms).map((type) => {
            return {type: type, bookings: rooms[type].length };
        }),
    ];

    const configChart = {
        bookings: {
            label: "Réservations",
            color: "hsl(var(--chart-1))",
        },
    };


    return (
        <AdminPanelLayout>
            <Head title="Dashboard" />
            <PageHeading title={useTrans("Tablaux De Bord")} />
            <PlaceholderContent>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex gap-6 flex-full lg:w-1/2">
                        <Card className="w-1/2">
                            <CardHeader className="p-2 pb-0 flex-row justify-between items-center text-sm font-medium">
                                <span>Entrés d'aujourduit</span>
                                <ArrowLeft className="text-green-600 dark:text-green-400 " />
                            </CardHeader>
                            <CardContent className="p-2 font-bold text-4xl">
                                + {check_ins}
                            </CardContent>
                        </Card>
                        <Card className="w-1/2">
                            <CardHeader className="p-2 pb-0 flex-row justify-between items-center text-sm font-medium">
                                <span>Sorties d'aujourduit</span>
                                <ArrowRight className="text-red-600 dark:text-red-600" />
                            </CardHeader>
                            <CardContent className="p-2 font-bold text-4xl">
                                + {check_outs}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex gap-6 flex-full lg:w-1/2">
                        <Card className="w-1/2">
                            <CardHeader className="p-2 pb-0 text-sm font-medium">
                                Réservation de jour
                            </CardHeader>
                            <CardContent className="p-2 font-bold text-4xl">
                                + {day_bookings}
                            </CardContent>
                            <CardFooter
                                className={cn(
                                    "p-2 pt-0 text-sm font-medium",
                                    last_day_bookings > day_bookings
                                        ? "text-red-600 dark:text-red-400"
                                        : "text-green-600 dark:text-green-400"
                                )}
                            >
                                {calculate(last_day_bookings, day_bookings) >
                                    0 && "+"}
                                {calculate(last_day_bookings, day_bookings)}
                                {"% "}
                                du dernier jour
                            </CardFooter>
                        </Card>
                        <Card className="w-1/2">
                            <CardHeader className="p-2 pb-0 text-sm font-medium">
                                Réservation de mois
                            </CardHeader>
                            <CardContent className="p-2 font-bold text-4xl">
                                + {month_bookings}
                            </CardContent>
                            <CardFooter
                                className={cn(
                                    "p-2 pt-0 text-sm font-medium",
                                    last_month_bookings > month_bookings
                                        ? "text-red-600 dark:text-red-400"
                                        : "text-green-600 dark:text-green-400"
                                )}
                            >
                                {calculate(
                                    last_month_bookings,
                                    month_bookings
                                ) > 0 && "+"}
                                {calculate(last_month_bookings, month_bookings)}
                                {"% "}
                                du mois dernier
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <Card className="w-full md:w-1/2 mt-4">
                    <CardContent>
                        <ChartContainer
                            config={configChart}
                            className="min-h-[200px] w-full "
                        >
                            <BarChart accessibilityLayer data={dataChart[0]}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="type"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                    indicator="line"
                                />
                                <ChartLegend content={<ChartLegendContent />} />

                                <Bar
                                    dataKey="bookings"
                                    fill="var(--color-bookings)"
                                    radius={4}
                                />
                                <Bar />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start">
                        <span className="font-medium">
                            Les type plus réservé le mois dernier
                        </span>
                        <span className="text-sm text-muted-foreground">
                            Ces statistique inclus les réservations annulers et
                            refus
                        </span>
                    </CardFooter>
                </Card>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
