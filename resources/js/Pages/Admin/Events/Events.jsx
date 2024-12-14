import React from "react";
import { Head, router, usePage } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import { useToast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import EventCard from "@/Components/Admin/Events/EventCard";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";
import { Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Events({ events, event_permission }) {
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const { t } = useTranslation("translation", { keyPrefix: "events" });
    const [processing, setProcessing] = React.useState(false);
    React.useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title={t("title")} />
            <PageHeading title={t("title")} />
            <div className="flex justify-end">
                {event_permission.create && (
                    <Button
                        variant="secondary"
                        disabled={processing}
                        onClick={() =>
                            router.get(
                                route("events.create"),
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
                        {t("createLink")}
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                {events.length ? (
                    <>
                        <div className="font-bold p-4">{t("pageHeading")}</div>
                        {events.map((event) => (
                            <EventCard event={event} key={event.event_id} />
                        ))}
                    </>
                ) : (
                    <EmptyPage text={t("emptyEvents")} icon={Megaphone} />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
