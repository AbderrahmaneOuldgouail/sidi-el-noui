import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { FileUploader } from "react-drag-drop-files";

import { Button } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import MyFileUploader from "@/Components/Admin/Shared/MyFileUploader";
import { ImagesViewer } from "@/Components/Admin/Shared/ImagesViewer";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import LabelDescreption from "@/Components/LabelDescreption";
import { Separator } from "@/Components/ui/separator";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreateService() {
    const [images, setImages] = useState([]);

    const { data, setData, post, errors } = useForm({
        service_name: "",
        service_descreption: "",
        assets: [],
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("services.store"));
    };

    const handleFiles = (file) => {
        const files = Array.from(file);
        const promises = files.map((f) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(f);
            });
        });

        Promise.all(promises).then((images) => {
            setImages(images);
        });
        setData("assets", file);
    };
    return (
        <AdminPanelLayout>
            <Head title="Service" />
            <PageHeading title={useTrans("Service Création")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="service_name"
                                value={useTrans("Nom de service")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Entrer un nom claire et simple pour le nom de service"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="service_name"
                                value={useTrans("Nom de service")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                placeholder={useTrans("Exemple : Restaurant")}
                                id="service_name"
                                value={data.service_name}
                                onChange={(e) =>
                                    setData("service_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.service_name}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="service_descreption"
                                value={useTrans("Description")}
                            />
                            <LabelDescreption>
                                {useTrans(
                                    "Vous pouvez ajouter des titre ou bien des style au desciption"
                                )}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="service_descreption"
                                value={useTrans("Description")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                id="service_descreption"
                                value={data.service_descreption}
                                onChange={(e) =>
                                    setData(
                                        "service_descreption",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={errors.service_descreption}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <div className="md:flex my-4">
                            <div className="w-full md:w-1/3 pb-2">
                                <InputLabel
                                    htmlFor="assets"
                                    value={useTrans("Photos")}
                                />
                                <LabelDescreption>
                                    {useTrans(
                                        "Ajouter des photos au service (ne dépasse pas 10 photos par service)"
                                    )}
                                </LabelDescreption>
                            </div>
                            <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                                <InputLabel
                                    htmlFor="assets"
                                    value={useTrans("Photos")}
                                />
                                <FileUploader
                                    handleChange={handleFiles}
                                    name="file"
                                    id="assets"
                                    types={fileTypes}
                                    multiple={true}
                                >
                                    <MyFileUploader />
                                </FileUploader>
                                <InputError
                                    message={errors.assets}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <ImagesViewer images={images} />
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Crée")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
