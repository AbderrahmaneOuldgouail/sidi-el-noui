import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/Components/ui/chart";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { useTrans } from "@/Hooks/useTrans";

export default function Chart({ bookingCounts }) {
    const dataChart = [
        bookingCounts.map((type) => {
            return {
                type: type.type_designation,
                bookings: type.booking_count,
            };
        }),
    ];

    const configChart = {
        bookings: {
            label: "Réservations",
            color: "hsl(var(--chart-1))",
        },
    };
    return (
        <Card className="w-full md:w-1/2   mt-4">
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
                    {useTrans("Les types plus réservé le mois dernier")}
                </span>
                <span className="text-sm text-muted-foreground">
                    {useTrans(
                        "Ces statistique inclus les réservations annuléers et refusées"
                    )}
                </span>
            </CardFooter>
        </Card>
    );
}
