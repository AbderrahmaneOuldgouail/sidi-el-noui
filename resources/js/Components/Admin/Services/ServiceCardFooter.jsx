import React from "react";
import { router, usePage } from "@inertiajs/react";
import { Switch } from "@/Components/ui/switch";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";
import { useTranslation } from "react-i18next";

export default function ServiceCardFooter({ service }) {
    const service_permission = usePage().props.service_permission;
    const [process, setProcess] = React.useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "services.card",
    });

    return (
        <>
            {service_permission.update && (
                <div>
                    <Switch
                        checked={service.availability}
                        disabled={process}
                        onCheckedChange={() => {
                            router.post(
                                route("services.toggle.availability"),
                                {
                                    service_id: service.service_id,
                                },
                                {
                                    preserveState: true,
                                    preserveScroll: true,
                                    onStart: () => {
                                        setProcess(true);
                                    },
                                    onFinish: () => {
                                        setProcess(false);
                                    },
                                }
                            );
                        }}
                    />
                    <span className="ml-2 ">
                        {service.availability ? t("toggleOff") : t("toggleOn")}
                    </span>
                </div>
            )}
            <div className="flex items-center gap-4">
                {service_permission.update && (
                    <Button
                        variant="secondary"
                        disabled={process}
                        onClick={() =>
                            router.get(
                                route("services.edit", service.service_id),
                                {},
                                {
                                    onStart: () => {
                                        setProcess(true);
                                    },
                                    onFinish: () => {
                                        setProcess(false);
                                    },
                                }
                            )
                        }
                    >
                        {t("editBtn")}
                    </Button>
                )}
                {service_permission.delete && (
                    <DeleteeDialog
                        id={service.service_id}
                        url={"services.destroy"}
                        message={t("deleteServiceDescreption")}
                    />
                )}
            </div>
        </>
    );
}
