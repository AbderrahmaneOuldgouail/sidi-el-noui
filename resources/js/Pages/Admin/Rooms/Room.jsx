import React from "react";
import { Head, Link } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import { Pencil } from "lucide-react";
import { useTrans } from "@/Hooks/useTrans";
import { Editor } from "@/Components/Admin/Shared/Editor";

export default function Room({ room, categorys }) {
    const categoryExists = (features, category_id) => {
        return features.some((item) => item.categorie_id === category_id);
    };
    return (
        <AdminPanelLayout>
            <Head title="Rooms" />
            <PageHeading
                title={useTrans("La Chambre N°") + " " + room.room_number}
            />
            <PlaceholderContent>
                <Carousel>
                    <CarouselContent>
                        {room.assets.map((asset, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <img
                                    src={asset.url}
                                    alt={`Selected ${index}`}
                                    className="rounded-md object-cover aspect-video w-full"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-secondary text-secondary-foreground" />
                    <CarouselNext className="bg-secondary text-secondary-foreground" />
                </Carousel>
                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-xl">
                            {room.type.type_designation} {useTrans("avec")}{" "}
                            {room.beeds_number} {useTrans("lits")}{" "}
                        </div>
                        <div className="font-bold text-xl bg-muted p-2 rounded">
                            <span>{useTrans("Prix de chmabre")} : </span>
                            <span className="text-destructive">
                                {room.room_price} {useTrans("DA")}
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
                        {categorys.map((category) => (
                            <div key={category.categorie_id}>
                                {categoryExists(
                                    room.features,
                                    category.categorie_id
                                ) && (
                                    <Card>
                                        <CardContent>
                                            <CardTitle className="m-4">
                                                {category.categorie_name}
                                                <Separator />
                                            </CardTitle>
                                            {room.features.map(
                                                (feature) =>
                                                    feature.categorie_id ===
                                                        category.categorie_id && (
                                                        <div
                                                            className="mx-2"
                                                            key={
                                                                feature.feature_id
                                                            }
                                                        >
                                                            {
                                                                feature.features_name
                                                            }{" "}
                                                            {feature.need_value
                                                                ? " : " +
                                                                  feature.pivot
                                                                      .valeur
                                                                : null}
                                                        </div>
                                                    )
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="font-bold text-lg my-4">
                            {useTrans("Description")} :{" "}
                        </div>
                        <Editor
                            autofocus={false}
                            editable={false}
                            content={room.room_descreption}
                            onContentChange={({ html }) => {
                                setData("room_descreption", html);
                            }}
                        />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Button variant="outline">
                        <Link
                            href={route("rooms.edit", room.room_number)}
                            className="flex w-full"
                        >
                            {useTrans("Modifier")}{" "}
                            <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                        </Link>
                    </Button>
                </div>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
