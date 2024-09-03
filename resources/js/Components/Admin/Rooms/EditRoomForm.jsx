import React from "react";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Link, router, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { ImagePlus, Trash } from "lucide-react";
import { Editor } from "@/Components/Admin/Shared/Editor";


import { cn } from "@/lib/utils";
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
import { FileUploader } from "react-drag-drop-files";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import { Separator } from "@/Components/ui/separator";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function EditRoomForm({ types, categorys, room }) {
    const [type, setType] = React.useState(room.type.type_designation);
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [images, setImages] = React.useState([]);
    const { data, setData, post, errors } = useForm({
        room_number: room.room_number,
        type_id: room.type_id,
        room_descreption: room.room_descreption,
        room_price: room.room_price,
        beeds_number: room.beeds_number,
        features: room.features.map((feature) => {
            return {
                feature_id: feature.feature_id,
                features_name: feature.features_name,
                need_value: feature.need_value,
                value: feature.pivot.valeur,
            };
        }),
        assets: [],
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route("rooms.update", room.room_number));
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

    const deleteImage = (index) => {
        images.splice(index, 1);
    };

    const isPressedFn = (feature) =>
        data.features.some((f) => f.feature_id === feature.feature_id);

    const handleFeatures = (pressed, feature) => {
        setData((data) => {
            if (pressed) {
                data.features.push({
                    feature_id: feature.feature_id,
                    features_name: feature.features_name,
                    need_value: feature.need_value,
                    value: "",
                });
            } else {
                data.features.splice(
                    data.features.indexOf(
                        data.features.find(
                            (f) => f.feature_id === feature.feature_id
                        )
                    ),
                    1
                );
            }

            return { ...data };
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="md:flex my-4">
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel
                        htmlFor="room_number"
                        value={useTrans("Numéro de chmabre")}
                    />
                    <LabelDescreption>
                        {useTrans(
                            "Quel est le numéro unique de cette chambre ?"
                        )}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_number"
                        value={useTrans("Numéro de chmabre")}
                    />
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
                    <InputLabel
                        htmlFor="room_price"
                        value={useTrans("Prix de chmabre")}
                    />
                    <LabelDescreption>
                        {useTrans(
                            "Ce sont les prix de la chambre avec tous taxe inclus"
                        )}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_price"
                        value={useTrans("Prix de chmabre")}
                    />
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
                        value={useTrans("Nombre de lits")}
                    />
                    <LabelDescreption>
                        {useTrans(
                            "Quel est le nombre de lits dans cette chambre"
                        )}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="beeds_number"
                        value={useTrans("Nombre de lits")}
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
                    <InputLabel htmlFor="room_type" value={useTrans("Type")} />
                    <LabelDescreption>
                        {useTrans("Quel est le type de cette chambre")}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_type"
                        value={useTrans("Type")}
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
                                {type
                                    ? type
                                    : useTrans("Selectioner un Type...")}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Command>
                                <CommandInput
                                    placeholder={useTrans(
                                        "Chercher un Type..."
                                    )}
                                    value={searchValue}
                                    onValueChange={(newValue) =>
                                        setSearchValue(newValue)
                                    }
                                />
                                <CommandList>
                                    <CommandEmpty>
                                        <Link
                                            href={route("types.store")}
                                            method="post"
                                            as="button"
                                            data={{
                                                type_designation: searchValue,
                                            }}
                                        >
                                            Ajouter <b>{searchValue}</b> au
                                            Types
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
                        value={useTrans("Description")}
                    />
                    <LabelDescreption>
                        {useTrans(
                            "Entrer une description générale sur cette chambre"
                        )}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                    <InputLabel
                        htmlFor="room_descreption"
                        value={useTrans("Description")}
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
                    <InputLabel
                        htmlFor="room_descreption"
                        value={useTrans("Caractéristiques")}
                    />
                    <LabelDescreption>
                        {useTrans(
                            "Choisis parmi ces caractéristiques, et ajouter des valeur aux caractéristiques qui'il besoin"
                        )}
                    </LabelDescreption>
                </div>
                <div className="w-full md:w-2/3 bg-muted p-4 shadow flex gap-2">
                    <div className="w-2/3">
                        <InputLabel
                            htmlFor="room_descreption"
                            value={useTrans("Caractéristiques")}
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
                        <InputLabel
                            htmlFor="assets"
                            value={useTrans("Photos")}
                        />
                        <LabelDescreption>
                            {useTrans(
                                "Ajouter des photos au chambres (ne dépasse pas 10 photos par chambres)"
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
                            <div className="bg-card mt-2 p-4 rounded flex justify-between items-center border-dashed border-2 border-secondary">
                                <div className="flex gap-4 items-center">
                                    <ImagePlus />
                                    <p className="text-sm text-gray-600">
                                        {useTrans(
                                            "Télécharger ou déposer des images ici"
                                        )}
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {fileTypes.map((type) => type + ",")}{" "}
                                </p>
                            </div>
                        </FileUploader>
                        <InputError message={errors.assets} className="mt-2" />
                    </div>
                </div>
                {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={image}
                                    alt={`Selected ${index}`}
                                    className="rounded-md object-cover aspect-video"
                                />
                                <div
                                    onClick={() => deleteImage(index)}
                                    className={buttonVariants({
                                        variant: "destructive",
                                        className:
                                            "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer",
                                    })}
                                >
                                    <Trash />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {room.assets.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image.url}
                                alt={`Selected ${index}`}
                                className="rounded-md object-cover aspect-video"
                            />
                            <div
                                onClick={() =>
                                    router.visit(
                                        route("assets.delete", image.id),
                                        {
                                            method: "GET",
                                            preserveState: true,
                                            preserveScroll: true,
                                        }
                                    )
                                }
                                className={buttonVariants({
                                    variant: "destructive",
                                    className:
                                        "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer",
                                })}
                            >
                                <Trash />
                            </div>
                        </div>
                    ))}
                </div>
                {/* <>
                        <AspectRatio ratio={16 / 9} className="bg-muted">
                            <img
                                src={asset.url}
                                alt={asset.name}
                                className="rounded-md object-cover"
                            />
                        </AspectRatio>
                        <Link
                            href={route("assets.delete", asset.id)}
                            as="button"
                        >
                            <Button variant="destructive">
                                <Trash />
                            </Button>
                        </Link>
                    </> */}
            </div>
            <div className="flex justify-end">
                <Button
                    type="submit"
                    className="mt-2 w-1/4"
                    variant="secondary"
                >
                    {useTrans("Enregistrer")}
                </Button>
            </div>
        </form>
    );
}
