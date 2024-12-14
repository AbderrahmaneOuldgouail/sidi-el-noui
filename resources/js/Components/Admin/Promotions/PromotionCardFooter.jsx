import React from "react";
import { router, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";
import { Switch } from "@/Components/ui/switch";
import { useTranslation } from "react-i18next";

export default function EventCardFooter({ promotion }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "promotions.card",
    });
    const promotion_permission = usePage().props.promotion_permission;
    const [processing, setProcessing] = React.useState(false);

    return (
        <div className="flex items-center justify-between gap-4 w-full">
            <div>
                {t("createdBy")} :{" "}
                <span>
                    {promotion.user.first_name} {promotion.user.last_name}
                </span>
            </div>
            <div className="flex gap-2">
                {promotion_permission.update && (
                    <div>
                        <Switch
                            checked={promotion.is_active}
                            disabled={processing}
                            onCheckedChange={() => {
                                router.post(
                                    route("promotions.toggle.activity"),
                                    {
                                        promotion_id: promotion.promotion_id,
                                    },
                                    {
                                        preserveState: true,
                                        preserveScroll: true,
                                        onStart: () => {
                                            setProcessing(true);
                                        },
                                        onFinish: () => {
                                            setProcessing(false);
                                        },
                                    }
                                );
                            }}
                        />
                        <span className="ml-2 ">
                            {promotion.is_active ? t("swichOn") : t("swichOff")}
                        </span>
                    </div>
                )}
                <div className="flex items-center gap-4">
                    {promotion_permission.update && (
                        <Button
                            variant="secondary"
                            disabled={processing}
                            onClick={() =>
                                router.get(
                                    route(
                                        "promotions.edit",
                                        promotion.promotion_id
                                    ),
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
                            {t("edit")}
                        </Button>
                    )}
                    {promotion_permission.delete && (
                        <DeleteeDialog
                            id={promotion.promotion_id}
                            url={"promotions.destroy"}
                            message={t("deletePromotionDescreption")}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
