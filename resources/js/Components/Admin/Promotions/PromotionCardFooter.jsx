import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Button, buttonVariants } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";
import { Switch } from "@/Components/ui/switch";

export default function EventCardFooter({ promotion }) {
    const promotion_permission = usePage().props.promotion_permission;

    return (
        <div className="flex items-center justify-between gap-4 w-full">
            <div>
                {useTrans("Créé par")} :{" "}
                <span >
                    {promotion.user.first_name} {promotion.user.last_name}
                </span>
            </div>
            <div className="flex gap-2">
                {promotion_permission.update && (
                    <div>
                        <Switch
                            checked={promotion.is_active}
                            onCheckedChange={() => {
                                router.post(
                                    route("promotions.toggle.activity"),
                                    {
                                        promotion_id: promotion.promotion_id,
                                    },
                                    {
                                        preserveState: true,
                                        preserveScroll: true,
                                    }
                                );
                            }}
                        />
                        <span className="ml-2 ">
                            {promotion.is_active
                                ? useTrans("Désactivé la promotin")
                                : useTrans("Activé la promotion")}
                        </span>
                    </div>
                )}
                <div className="flex items-center gap-4">
                    {promotion_permission.update && (
                        <Button variant="secondary">
                            <Link
                                href={route(
                                    "promotions.edit",
                                    promotion.promotion_id
                                )}
                                as="button"
                            >
                                {useTrans("Modifier")}
                            </Link>
                        </Button>
                    )}
                    {promotion_permission.delete && (
                        <DeleteeDialog
                            id={promotion.promotion_id}
                            url={"promotions.destroy"}
                            message={
                                "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette promotion"
                            }
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
