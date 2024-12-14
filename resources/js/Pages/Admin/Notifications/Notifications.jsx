import React from "react";
import { Head, router } from "@inertiajs/react";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Notifications({ notifications }) {
    const { t } = useTranslation("translation", { keyPrefix: "notifications" });
    function timeSince(date) {
        const now = new Date();
        const past = new Date(date);
        const secondsAgo = Math.floor((now - past) / 1000);

        const minutesAgo = Math.floor(secondsAgo / 60);
        const hoursAgo = Math.floor(minutesAgo / 60);
        const daysAgo = Math.floor(hoursAgo / 24);

        if (daysAgo > 0) {
            return `${daysAgo} jrs`;
        } else if (hoursAgo > 0) {
            return `${hoursAgo} h`;
        } else if (minutesAgo > 0) {
            return `${minutesAgo} min`;
        } else {
            return `${secondsAgo} s`;
        }
    }

    const deleteAll = () => {
        router.get(route("notifications.deleteAll"));
    };
    const readAll = () => {
        router.get(route("notifications.readAll"));
    };
    const ViewNotification = (notif) => {
        router.get(
            route("bookings.show", notif.data.booking_id),
            {},
            {
                onSuccess: () => {
                    router.post(route("notifications.read"), {
                        id: notif.id,
                    });
                },
            }
        );
    };
    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            <div className="flex justify-end mt-2 -mb-4 gap-4">
                <Button
                    onClick={() => {
                        readAll();
                    }}
                    variant="ghost"
                    className="font-bold"
                >
                    {t("readAll")}
                </Button>
                <Button
                    onClick={() => {
                        deleteAll();
                    }}
                    variant="ghost"
                    className="font-bold"
                >
                    {t("deleteAll")}
                </Button>
            </div>
            <PlaceholderContent>
                {notifications.map((notification, index) => (
                    <Button
                        key={index}
                        variant="ghost"
                        className={cn(
                            "relative w-full flex justify-between mb-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
                            notification.read_at == null
                                ? "border border-input bg-background "
                                : ""
                        )}
                        onClick={() => ViewNotification(notification)}
                    >
                        <span>
                            <span className="font-bold">
                                {notification.data.first_name}{" "}
                                {notification.data.last_name}
                            </span>{" "}
                            {t("text1")}{" "}
                            <span className="font-bold">
                                {notification.data.check_in}
                            </span>{" "}
                            {t("text2")}{" "}
                            <span className="font-bold">
                                {notification.data.check_out}
                            </span>{" "}
                        </span>
                        <span className="flex gap-2 items-center">
                            <span className=" text-xs tracking-widest opacity-60">
                                {timeSince(notification?.created_at)}{" "}
                            </span>
                            {notification.read_at == null && (
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                            )}
                        </span>
                    </Button>
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
