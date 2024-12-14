import React, { useState } from "react";
import { Button, buttonVariants } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useForm } from "@inertiajs/react";
import { FileUploader } from "react-drag-drop-files";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { Toggle } from "@/Components/ui/toggle";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";
import LabelDescreption from "@/Components/LabelDescreption";
import { ImagesViewer } from "../Shared/ImagesViewer";
import MyFileUploader from "../Shared/MyFileUploader";
import { Editor } from "@/Components/Admin/Shared/Editor";
import { useTranslation } from "react-i18next";
import DbImageViewer from "../Shared/DbImageViewer";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function RoomForm({ types, categorys, room }) {
    const [type, setType] = React.useState(room?.type.type_designation);
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [importedFiles, setImportedFiles] = useState([]);

    const [dbImages, setDbImages] = useState(room?.assets);

    const { t } = useTranslation("translation", {
        keyPrefix: "rooms.roomForm",
    });
    const { data, setData, post, errors, clearErrors, processing } = useForm({
        room_number: room ? room.room_number : "",
        type_id: room ? room.type_id : "",
        room_descreption: room ? room.room_descreption : "",
        room_price: room ? room.room_price : "",
        beeds_number: room ? room.beeds_number : "",
        features: room
            ? room.features.map((feature) => {
                  return {
                      feature_id: feature.feature_id,
                      features_name: feature.features_name,
                      need_value: feature.need_value,
                      value: feature.pivot.valeur,
                  };
              })
            : [],
        assets: [],
        remouved_assets: [],
        required_assets: room && room?.assets.length > 0 ? false : true,
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
        room
            ? post(route("rooms.update", room.room_number))
            : post(route("rooms.store"));
    };

    const isPressedFn = (feature) =>
        data.features.some((f) => f.id === feature.feature_id);

    const handleFeatures = (pressed, feature) => {
        setData((data) => {
            if (pressed) {
                data.features.push({
                    id: feature.feature_id,
                    name: feature.features_name,
                    need_value: feature.need_value,
                    value: "",
                });
            } else {
                data.features.splice(
                    data.features.indexOf(
                        data.features.find((f) => f.id === feature.feature_id)
                    ),
                    1
                );
            }

            return { ...data };
        });
    };

    return (
        <form onSubmit={submit}>
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel htmlFor="room_number" value={t("roomNumber")} />
                    <LabelDescreption>
                        {t("roomNumberDescreption")}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel htmlFor="room_number" value={t("roomNumber")} />
                    <Input
                        className="mt-2 w-full bg-card"
                        placeholder="102"
                        id="room_number"
                        value={data.room_number}
                        onChange={(e) => setData("room_number", e.target.value)}
                    />
                    <InputError message={errors.room_number} className="mt-2" />
                </div>
            </div>
            <Separator />
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel htmlFor="room_price" value={t("price")} />
                    <LabelDescreption>{t("priceDescreption")}</LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel htmlFor="room_price" value={t("price")} />
                    <Input
                        className="mt-2 w-full bg-card"
                        placeholder="5500 DA"
                        id="room_price"
                        value={data.room_price}
                        onChange={(e) => setData("room_price", e.target.value)}
                    />
                    <InputError message={errors.room_price} className="mt-2" />
                </div>
            </div>
            <Separator />
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel
                        htmlFor="beeds_number"
                        value={t("beedsNumber")}
                    />
                    <LabelDescreption>
                        {t("beedsNumberDescreption")}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="beeds_number"
                        value={t("beedsNumber")}
                    />
                    <Input
                        className="mt-2 w-full bg-card"
                        placeholder="3"
                        id="beeds_number"
                        value={data.beeds_number}
                        onChange={(e) =>
                            setData("beeds_number", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.beeds_number}
                        className="mt-2"
                    />
                </div>
            </div>
            <Separator />
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel htmlFor="room_type" value={t("type")} />
                    <LabelDescreption>{t("typeDescreption")}</LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_type"
                        value={t("type")}
                        className="mb-2"
                    />
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between"
                            >
                                {type ? type : t("typeSelect")}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Command>
                                <CommandInput
                                    placeholder={t("typeSearch")}
                                    value={searchValue}
                                    onValueChange={(newValue) =>
                                        setSearchValue(newValue)
                                    }
                                />
                                <CommandList>
                                    <CommandEmpty>
                                        <div>{t("emptyTypeMessage")}</div>
                                        <div className="font-bold py-2">
                                            {searchValue}
                                        </div>
                                        <Link
                                            href={route("types.store")}
                                            method="post"
                                            as="button"
                                            data={{
                                                type_designation: searchValue,
                                            }}
                                            className={cn(
                                                buttonVariants({
                                                    variant: "secondary",
                                                })
                                            )}
                                        >
                                            {t("emptyTypeButton")}
                                        </Link>
                                    </CommandEmpty>
                                    <CommandGroup>
                                        {types.map(
                                            ({ type_id, type_designation }) => (
                                                <CommandItem
                                                    key={type_id}
                                                    value={type_designation}
                                                    onSelect={(
                                                        currentValue
                                                    ) => {
                                                        setData(
                                                            "type_id",
                                                            type_id
                                                        );
                                                        setType(
                                                            currentValue ===
                                                                type
                                                                ? ""
                                                                : currentValue
                                                        );
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {type_designation}
                                                    <CheckIcon
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            type ===
                                                                type_designation
                                                                ? "opacity-100"
                                                                : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            )
                                        )}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <InputError message={errors.type_id} className="mt-2" />
                </div>
            </div>
            <Separator />
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel
                        htmlFor="room_descreption"
                        value={t("descreption")}
                    />
                    <LabelDescreption>
                        {t("descreptionDescreption")}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_descreption"
                        value={t("descreption")}
                    />
                    <Editor
                        autofocus={false}
                        content={data.room_descreption}
                        onContentChange={({ html }) => {
                            setData("room_descreption", html);
                        }}
                    />
                    <InputError
                        message={errors.room_descreption}
                        className="mt-2"
                    />
                </div>
            </div>
            <Separator />
            <div className="md:flex  my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel htmlFor="room_features" value={t("features")} />
                    <LabelDescreption>
                        {t("featuresDescreption")}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow flex gap-2">
                    <div className="w-2/3">
                        <InputLabel
                            htmlFor="room_features"
                            value={t("features")}
                        />
                        <Accordion type="multiple">
                            {categorys.map((category) => (
                                <AccordionItem
                                    className="my-2 bg-card "
                                    key={category.categorie_id}
                                    value={category.categorie_name}
                                >
                                    <AccordionTrigger className="flex flex-wrap justify-center">
                                        {category.categorie_name}
                                    </AccordionTrigger>
                                    <AccordionContent className=" px-4">
                                        <div className="flex flex-wrap items-center gap-4">
                                            {category.feature.map(
                                                (feature, idx) => {
                                                    return (
                                                        <Toggle
                                                            key={idx}
                                                            pressed={isPressedFn(
                                                                feature
                                                            )}
                                                            onPressedChange={(
                                                                p
                                                            ) =>
                                                                handleFeatures(
                                                                    p,
                                                                    feature
                                                                )
                                                            }
                                                        >
                                                            {
                                                                feature.features_name
                                                            }
                                                        </Toggle>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                            <InputError
                                message={errors.features}
                                className="mt-2"
                            />
                        </Accordion>
                    </div>
                    <div className="space-y-4 w-1/3 ">
                        {data.features.map((feature, idx) =>
                            feature.need_value ? (
                                <div key={idx}>
                                    <InputLabel>{feature.name}</InputLabel>
                                    <Input
                                        className="mt-2 w-full bg-card"
                                        value={feature.value}
                                        onChange={(e) => {
                                            setData((data) => {
                                                data.features[idx].value =
                                                    e.target.value;
                                                return { ...data };
                                            });
                                        }}
                                    />
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
            <Separator />
            <div>
                <div className="md:flex my-4">
                    <div className="w-full md:w-1/3 pb-2">
                        <InputLabel htmlFor="assets" value={t("assets")} />
                        <LabelDescreption>
                            {t("assetsDescreption")}
                        </LabelDescreption>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                        <InputLabel htmlFor="assets" value={t("assets")} />
                        <FileUploader
                            handleChange={handleFiles}
                            name="file"
                            id="assets"
                            types={fileTypes}
                            multiple={true}
                        >
                            <MyFileUploader />
                        </FileUploader>
                        <InputError message={errors.assets} className="mt-2" />
                    </div>
                </div>
                <ImagesViewer
                    images={importedFiles}
                    errors={errors}
                    deleteImage={deleteImage}
                />
                {room && (
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
                    {room ? t("edit") : t("submit")}
                </Button>
            </div>
        </form>
    );
}
