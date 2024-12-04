import React, { useEffect } from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useToast } from "@/Components/ui/use-toast";
import { useTrans } from "@/Hooks/useTrans";
import ServiceCard from "@/Components/Admin/Services/ServiceCard";
import { Button } from "@/Components/ui/button";
import { HandPlatter } from "lucide-react";
import EmptyPage from "@/Components/Admin/Shared/EmptyPage";

export default function Services({ services, service_permission }) {
    const { toast } = useToast();

    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    console.log(services);

    return (
        <AdminPanelLayout>
            <Head title="Services" />
            <PageHeading title={useTrans("Services")} />
            <div className="flex justify-end">
                {service_permission.create && (
                    <Button variant="secondary">
                        <Link href={route("services.create")} as="button">
                            {useTrans("Créer un service")}
                        </Link>
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                {services.length ? (
                    <>
                        <div className="font-bold p-4">
                            {useTrans("List des services")} :
                        </div>
                        {services.map((service) => (
                            <div key={service.service_id}>
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </>
                ) : (
                    <EmptyPage
                        text="Aucun services pour l'instant, essayez de créer un nouveau"
                        icon={HandPlatter}
                    />
                )}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
