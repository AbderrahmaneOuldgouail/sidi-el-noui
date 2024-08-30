import React from "react";
import { router, Link, usePage } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Switch } from "@/Components/ui/switch";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";

export default function ServiceCardFooter({ service }) {
    const permissions = usePage().props.auth.permissions;

    return (
        <>
            {permissions.service.update && (
                <div>
                    <Switch
                        checked={service.availability}
                        onCheckedChange={() => {
                            router.post(route("services.toggle.availability"), {
                                service_id: service.service_id,
                            });
                        }}
                    />
                    <span className="ml-2 ">
                        {service.availability
                            ? useTrans("Marqué comme hors service")
                            : useTrans("Marqué comme disponible")}
                    </span>
                </div>
            )}
            <div className="flex items-center gap-4">
                {permissions.service.update && (
                    <Button variant="secondary">
                        <Link
                            href={route("services.edit", service.service_id)}
                            as="button"
                        >
                            {useTrans("Modifier")}
                        </Link>
                    </Button>
                )}
                {permissions.service.delete && (
                    <DeleteeDialog
                        id={service.service_id}
                        url={"services.destroy"}
                        message={
                            "Cette action ne peut pas être annulée. Vous allez supprimé définitivement ce élément et chaque caractéristique de cette categorie va supprimé"
                        }
                    />
                )}
            </div>
        </>
    );
}
