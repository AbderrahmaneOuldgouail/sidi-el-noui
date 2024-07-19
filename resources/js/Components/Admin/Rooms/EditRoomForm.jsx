import React from "react";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Textarea } from "@/Components/ui/textarea";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Trash } from "lucide-react";

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
import { AspectRatio } from "@/Components/ui/aspect-ratio";

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


    const handleImageChange = (file) => {
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
            <div>
                <InputLabel htmlFor="room_number" value="Numéro de chmabre" />
                <TextInput
                    className="mt-2"
                    placeholder="102"
                    id="room_number"
                    value={data.room_number}
                    onChange={(e) => setData("room_number", e.target.value)}
                />
                <InputError message={errors?.room_number} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="room_price" value="Prix de chmabre" />
                <TextInput
                    className="mt-2"
                    placeholder="5500 DA"
                    id="room_price"
                    value={data.room_price}
                    onChange={(e) => setData("room_price", e.target.value)}
                />
                <InputError message={errors?.room_price} className="mt-2" />
            </div>
            <div>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {type ? type : "Selectioner un Type..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput
                                placeholder={`Chercher un Type...`}
                                className="h-9"
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
                                        data={{ type_designation: searchValue }}
                                    >
                                        Ajouter <b>{searchValue}</b> au Types
                                    </Link>
                                </CommandEmpty>
                                <CommandGroup>
                                    {types.map(
                                        ({ type_id, type_designation }) => (
                                            <CommandItem
                                                key={type_id}
                                                value={type_designation}
                                                onSelect={(currentValue) => {
                                                    setValue(
                                                        "type_id",
                                                        type_id
                                                    );
                                                    setType(
                                                        currentValue === type
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
                <InputError message={errors?.type} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="room_descreption" value="Descreption" />
                <Textarea
                    value={data.room_descreption}
                    onChange={(e) =>
                        setData("room_descreption", e.target.value)
                    }
                    placeholder="Descreption sur la chmabre"
                    id="room_descreption"
                />
                <InputError
                    message={errors?.room_descreption}
                    className="mt-2"
                />
            </div>
            <div>
                <FileUploader
                    handleChange={handleImageChange}
                    name="file"
                    types={fileTypes}
                    multiple={true}
                />
                <InputError message={errors?.assets} className="mt-2" />

                <div className="flex w-1/2 ">
                    {images.length > 0 && (
                        <div className="flex ">
                            {images.map((image, index) => (
                                <div key={index} className="m-2">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-muted"
                                    >
                                        <img
                                            src={image}
                                            alt={`Selected ${index}`}
                                            className="rounded-md object-cover"
                                        />
                                    </AspectRatio>
                                    <Button
                                        variant="destructive"
                                        onClick={() => deleteImage(index)}
                                    >
                                        <Trash />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                    {room.assets.map((asset) => (
                        <>
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
                        </>
                    ))}
                </div>
            </div>
            <div>
                <div className="flex">
                    <Accordion type="multiple" className="w-2/3">
                        {categorys.map((category) => (
                            <AccordionItem
                                key={category.categorie_id}
                                value={category.categorie_name}
                            >
                                <AccordionTrigger>
                                    {category.categorie_name}
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        {category.feature.map(
                                            (feature, idx) => {
                                                return (
                                                    <Toggle
                                                        key={idx}
                                                        pressed={isPressedFn(
                                                            feature
                                                        )}
                                                        onPressedChange={(p) =>
                                                            handleFeatures(
                                                                p,
                                                                feature
                                                            )
                                                        }
                                                    >
                                                        {feature.features_name}
                                                    </Toggle>
                                                );
                                            }
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                        <InputError
                            message={errors.features?.message}
                            className="mt-2"
                        />
                    </Accordion>
                    <div className="space-y-4 w-1/3 ">
                        {data.features.map((feature, idx) =>
                            feature.need_value ? (
                                <div key={idx}>
                                    <InputLabel>
                                        {feature.features_name}
                                    </InputLabel>
                                    <TextInput
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
                <InputError message={errors?.features} className="mt-2" />
            </div>
            <Button type="submit" className="mt-2">
                Submit
            </Button>
        </form>
    );
}
