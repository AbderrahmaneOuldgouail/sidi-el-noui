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
import LabelDescreption from "@/Components/LabelDescreption";
import { Separator } from "@/Components/ui/separator";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { useTranslation } from "react-i18next";
import DbImageViewer from "@/Components/Admin/Shared/DbImageViewer";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function ServiceForm({ service }) {
    const { t } = useTranslation("translation", { keyPrefix: "services.form" });
    const [importedFiles, setImportedFiles] = useState([]);
    const [dbImages, setDbImages] = useState(service?.assets);

    const { data, setData, post, errors, clearErrors, processing } = useForm({
        service_name: service ? service?.service_name : "",
        service_descreption: service ? service?.service_descreption : "",
        assets: [],
        remouved_assets: [],
        required_assets: false,
    });

    const remouveAsset = (index) => {
        setData((prevData) => ({
            ...prevData,
            remouved_assets: [...prevData.remouved_assets, index],
        }));
        setDbImages((prevDbImages) => {
            const updatedDbImages = prevDbImages.filter(
                (image) => image.id !== index
            );

            setData((prevData) => ({
                ...prevData,
                required_assets: updatedDbImages.length === 0,
            }));

            return updatedDbImages;
        });
    };

    const handleFiles = (files) => {
        if (!files || !files.length) return;

        const newFiles = Array.from(files);

        setImportedFiles((prevData) => {
            const updatedFiles = newFiles.map((file) => ({
                file,
                url: URL.createObjectURL(file),
            }));
            return [...prevData, ...updatedFiles];
        });

        setData("assets", [...data.assets, ...newFiles]);
    };

    const deleteImage = (index) => {
        setImportedFiles((prevData) => {
            const updatedFiles = [...prevData];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });

        const updatedAssets = [...data.assets];
        updatedAssets.splice(index, 1);
        setData("assets", updatedAssets);
        clearErrors(`assets.${index}`);
    };

    const submit = (e) => {
        e.preventDefault();
        service
            ? post(route("services.update", service.service_id))
            : post(route("services.store"));
    };
    return (
        <AdminPanelLayout>
            <Head title={service ? t("editTitle") : t("createTitle")} />
            <PageHeading title={service ? t("editTitle") : t("createTitle")} />
            <PlaceholderContent>
                <form onSubmit={submit}>
                    <div className="md:flex my-4">
                        <div className="w-full md:w-1/3 pb-2">
                            <InputLabel
                                htmlFor="service_name"
                                value={t("name")}
                            />
                            <LabelDescreption>
                                {t("nameDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="service_name"
                                value={t("name")}
                            />
                            <Input
                                className="mt-2 w-full bg-card"
                                placeholder={t("placeholder")}
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
                                value={t("descreption")}
                            />
                            <LabelDescreption>
                                {t("descreptionDescreption")}
                            </LabelDescreption>
                        </div>
                        <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                            <InputLabel
                                htmlFor="service_descreption"
                                value={t("descreption")}
                            />
                            <Editor
                                autofocus={false}
                                content={data.service_descreption}
                                onContentChange={({ html }) => {
                                    setData("service_descreption", html);
                                }}
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
                                    value={t("assets")}
                                />
                                <LabelDescreption>
                                    {t("assetsDescreption")}
                                </LabelDescreption>
                            </div>
                            <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                                <InputLabel
                                    htmlFor="assets"
                                    value={t("assets")}
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
                        <ImagesViewer
                            images={importedFiles}
                            errors={errors}
                            deleteImage={deleteImage}
                        />
                        {service && (
                            <DbImageViewer
                                assets={dbImages}
                                remouveAsset={remouveAsset}
                            />
                        )}
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                            disabled={processing}
                        >
                            {service ? t("editBtn") : t("createBtn")}
                        </Button>
                    </div>
                </form>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}