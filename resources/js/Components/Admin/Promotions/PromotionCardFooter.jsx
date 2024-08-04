import React from "react";
import { Link, router } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Button } from "@/Components/ui/button";
import DeleteeDialog from "../Shared/DeleteDialog";
import { Switch } from "@/Components/ui/switch";

export default function EventCardFooter({ promotion }) {
    return (
        <div className="flex items-center gap-4">
            <div>
                <Switch
                    checked={promotion.is_active}
                    onCheckedChange={() => {
                        router.post(route("promotions.toggle.activity"), {
                            promotion_id: promotion.promotion_id,
                        });
                    }}
                />
                <span className="ml-2 ">
                    {promotion.is_active
                        ? useTrans("Désactivé la promotin")
                        : useTrans("Activé la promotion")}
                </span>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="secondary">
                    <Link
                        href={route("promotions.edit", promotion.promotion_id)}
                        as="button"
                    >
                        {useTrans("Modifier")}
                    </Link>
                </Button>
                <DeleteeDialog
                    id={promotion.promotion_id}
                    url={"promotions.destroy"}
                    message={
                        "Cette action ne peut pas être annulée. Vous allez supprimé définitivement cette promotion"
                    }
                />
            </div>
        </div>
    );
}
