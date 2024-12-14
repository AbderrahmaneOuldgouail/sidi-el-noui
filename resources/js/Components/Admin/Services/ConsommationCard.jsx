import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import React from "react";
import DeleteeDialog from "../Shared/DeleteDialog";
import ConsommationDialog from "./ConsommationDialog";
import { Badge } from "@/Components/ui/badge";
import { useTranslation } from "react-i18next";

export default function ConsommationCard({ consumption, services }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "consumptions.card",
    });
    return (
        <Card className="w-full">
            <CardHeader className="flex-row items-center justify-between">
                <div className="font-bold text-xl">
                    {consumption.consumption_name}
                </div>
                <div>
                    <Badge variant="success">
                        {consumption.service.service_name}{" "}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
                {t("price")}{" "}
                <span className="text-destructive font-bold">
                    {consumption.consumption_price}
                </span>{" "}
                {t("da")}
            </CardContent>
            <CardFooter className="gap-4">
                <DeleteeDialog
                    id={consumption.consumption_id}
                    url={"consumptions.destroy"}
                    message={t("deleteConsumptionDescreption")}
                />
                <ConsommationDialog
                    consumption={consumption}
                    services={services}
                    mode={"edit"}
                />
            </CardFooter>
        </Card>
    );
}
