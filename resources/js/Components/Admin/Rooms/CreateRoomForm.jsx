import React from "react";
import { useForm } from "react-hook-form";
import { array, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Textarea } from "@/Components/ui/textarea";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
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
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";
import { router } from "@inertiajs/react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const formSchema = z.object({
    room_number: z.string().regex(/^(100|[1-4][0-1][0-9])$/, {
        required_error: "Numéro de chambre est requis",
        message: "Le numéro de chambre n'est pas valide",
    }),
    type_id: z.number({
        message: "Le type est requis",
    }),
    room_descreption: z.string().nonempty("La descreption est requis"),
    room_price: z.string().nonempty("Le prix est requis"),
    features: z.array(z.number()).optional(),
    assets: z.custom(
        (value) => {
            if (Object.keys(value).length <= 10) {
                return true;
            } else {
                return false;
            }
        },
        {
            message: "Vous pouvez télécharger jusqu'à 10 images",
        }
    ),
});
export default function CreateRoomForm({ types, categorys }) {
    const [type, setType] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedValues, setSelectedValues] = React.useState([]);
    const [file, setFile] = React.useState(null);
    const props = usePage().props;
console.log(props);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        clearErrors,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            room_number: "102",
            type_id: "",
            room_descreption: "descreption",
            room_price: "5500",
            features: [],
            assets: {},
        },
    });
    const onSubmit = (data) => {
        data.features = selectedValues;
        console.log(data);
        router.post(route("rooms.store"), data);
    };
    const handleChange = (value) => {
        setSelectedValues((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const handleFiles = (file) => {
        setFile(file);
        setValue("assets", file);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputLabel htmlFor="room_number" value="Numéro de chmabre" />
                <TextInput
                    {...register("room_number")}
                    className="mt-2"
                    placeholder="102"
                    id="room_number"
                />
                <InputError
                    message={errors.room_number?.message}
                    className="mt-2"
                />
            </div>
            <div>
                <InputLabel htmlFor="room_price" value="Prix de chmabre" />
                <TextInput
                    {...register("room_price")}
                    className="mt-2"
                    placeholder="5500 DA"
                    id="room_price"
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
                <InputError message={errors.type?.message} className="mt-2" />
            </div>
            <div>
                <InputLabel htmlFor="room_descreption" value="Descreption" />
                <Textarea
                    {...register("room_descreption")}
                    placeholder="Descreption sur la chmabre"
                    id="room_descreption"
                />
                <InputError
                    message={errors.room_descreption?.message}
                    className="mt-2"
                />
            </div>
            <div>
                <Accordion
                    type="multiple"
                    collapsible
                    {...register("features")}
                >
                    {categorys.map((category) => (
                        <AccordionItem
                            key={category.categorie_id}
                            value={category.categorie_name}
                        >
                            <AccordionTrigger>
                                {category.categorie_name}
                            </AccordionTrigger>
                            <AccordionContent>
                                <ToggleGroup type="multiple">
                                    {category.feature.map((feature) => (
                                        <ToggleGroupItem
                                            key={feature.feature_id}
                                            value={feature.feature_id}
                                            aria-label={feature.feature_id}
                                            onClick={() =>
                                                handleChange(feature.feature_id)
                                            }
                                        >
                                            {feature.features_name}
                                        </ToggleGroupItem>
                                    ))}
                                </ToggleGroup>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <InputError
                    message={errors.features?.message}
                    className="mt-2"
                />
            </div>
            <FileUploader
                handleChange={handleFiles}
                name="file"
                types={fileTypes}
                multiple={true}
            />
            <InputError message={errors.assets?.message} className="mt-2" />

            <Button type="submit" className="mt-2">
                Submit
            </Button>
        </form>
    );
}
