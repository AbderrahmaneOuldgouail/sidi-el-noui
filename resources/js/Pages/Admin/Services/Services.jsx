import React, { useEffect } from "react";
import { Head, usePage, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useToast } from "@/Components/ui/use-toast";
import { useTrans } from "@/Hooks/useTrans";
import ServiceCard from "@/Components/Admin/Services/ServiceCard";
import { Button } from "@/Components/ui/button";

export default function Services({ services }) {
    const { toast } = useToast();

    const flash = usePage().props.flash;
    const permissions = usePage().props.auth.permissions;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    return (
        <AdminPanelLayout>
            <Head title="Services" />
            <PageHeading title={useTrans("Services")} />
            <div className="flex justify-end">
                {permissions.service.create && (
                    <Button variant="secondary">
                        <Link href={route("services.create")} as="button">
                            {useTrans("Créer un service")}
                        </Link>
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                <div className="font-bold p-4">
                    {useTrans("List des services")} :
                </div>
                {services.map((service) => (
                    <div key={service.service_id}>
                        <ServiceCard service={service} />
                    </div>
                ))}
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
