import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import React from "react";
import DeleteeDialog from "../Shared/DeleteDialog";
import ConsommationDialog from "./ConsommationDialog";
import { useTrans } from "@/Hooks/useTrans";
import { Badge } from "@/Components/ui/badge";

export default function ConsommationCard({
    consumption,
    services,
}) {
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
                {useTrans("Prix Unitaire:")}{" "}
                <span className="text-destructive font-bold">
                    {consumption.consumption_price}
                </span>{" "}
                {useTrans("DA")}
            </CardContent>
            <CardFooter className="gap-4">
                <DeleteeDialog
                    id={consumption.consumption_id}
                    url={"consumptions.destroy"}
                    message={
                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette consommation"
                    }
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
