import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";
import { useTranslation } from "react-i18next";

export default function EventCardFooter({ event }) {
    const event_permission = usePage().props.event_permission;
    const { t } = useTranslation("translation", { keyPrefix: "events.card" });
    const [processing, setProcessing] = React.useState(false);

    return (
        <div className="flex items-center gap-4 justify-between w-full">
            <div>
                {t("createdBy")} :{" "}
                <span>
                    {event.user.first_name} {event.user.last_name}
                </span>
            </div>
            <div className="flex gap-2">
                {event_permission.update && (
                    <Button
                        variant="secondary"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("events.edit", event.event_id),
                                {},
                                {
                                    onStart: () => {
                                        setProcessing(true);
                                    },
                                    onFinish: () => {
                                        setProcessing(false);
                                    },
                                }
                            )
                        }
                    >
                        {t("editBtn")}
                    </Button>
                )}
                {event_permission.delete && (
                    <DeleteeDialog
                        id={event.event_id}
                        url={"events.destroy"}
                        message={t("eventDeleteDescreption")}
                    />
                )}
            </div>
        </div>
    );
}
