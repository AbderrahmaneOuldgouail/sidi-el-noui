import React from "react";
import { cn } from "@/lib/utils";
import { Link, usePage, useForm } from "@inertiajs/react";
import { FileUploader } from "react-drag-drop-files";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Textarea } from "@/Components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Toggle } from "@/Components/ui/toggle";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function CreateRoomForm({ types, categorys }) {
    const [type, setType] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const props = usePage().props;

    const { data, setData, post, errors } = useForm({
        room_number: "",
        room_price: "",
        room_descreption: "",
        type_id: "",
        features: [],
        assets: [],
    });

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route("rooms.store"));
    };

    const handleFiles = (file) => {
        setData("assets", file);
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
            <div>
                <InputLabel htmlFor="room_number" value="Numéro de chmabre" />
                <TextInput
                    className="mt-2"
                    placeholder="102"
                    id="room_number"
                    value={data.room_number}
                    onChange={(e) => setData("room_number", e.target.value)}
                />
                <InputError
                    message={errors.room_number?.message}
                    className="mt-2"
                />
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
                <InputError
                    message={errors.room_price?.message}
                    className="mt-2"
                />
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
                                                    // setValue(
                                                    //     "type_id",
                                                    //     type_id
                                                    // );
                                                    setData("type_id", type_id);
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
                <InputError message={errors.type?.message} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="room_descreption" value="Descreption" />
                <Textarea
                    placeholder="Descreption sur la chmabre"
                    id="room_descreption"
                    value={data.room_descreption}
                    onChange={(e) =>
                        setData("room_descreption", e.target.value)
                    }
                />
                <InputError
                    message={errors.room_descreption?.message}
                    className="mt-2"
                />
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
                                    <InputLabel>{feature.name}</InputLabel>
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
            </div>
            <div>
                <FileUploader
                    handleChange={handleFiles}
                    name="file"
                    types={fileTypes}
                    multiple={true}
                />
                <InputError message={errors.assets?.message} className="mt-2" />
            </div>
            <Button type="submit" className="mt-2">
                Submit
            </Button>
        </form>
    );
}
