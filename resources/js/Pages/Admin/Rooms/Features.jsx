import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/Admin/Shared/PageHeading";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

export default function Features({data}) {
    console.log(data);
    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading title={"Vos Caractéristiques"} />
            <Tabs defaultValue="features" className="mt-2">
                <TabsList className="w-full flex justify-start bg-transparent border-b-2 rounded-none	">
                    <div className="flex justify-start  ">
                        <TabsTrigger
                            value="features"
                            className="mr-2 font-bold text-xl rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary shadow-none "
                        >
                            Caractéristique
                        </TabsTrigger>
                        <TabsTrigger
                            value="category"
                            className="mr-2 font-bold text-xl rounded-none bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 border-primary data-[state=active]:text-primary "
                        >
                            Category
                        </TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="features">
                    <div className="flex justify-end mt-4">
                        <Button variant="secondary">
                            <Link href={route("rooms.create")}>
                                Ajouter une Caractéristique
                            </Link>
                        </Button>
                    </div>
                    <PlaceholderContent>Caractéristique</PlaceholderContent>
                </TabsContent>
                <TabsContent value="category">
                    <div className="flex justify-end mt-4">
                        <Button variant="secondary">
                            <Link href={route("rooms.create")}>
                                Ajouter une category
                            </Link>
                        </Button>
                    </div>
                    <PlaceholderContent>Category</PlaceholderContent>
                </TabsContent>
            </Tabs>
        </AdminPanelLayout>
    );
}
