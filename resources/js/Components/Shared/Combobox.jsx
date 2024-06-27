"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
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
import { Link } from "@inertiajs/react";

export function ComboboxDemo({ types, object }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const [searchValue, setSearchValue] = React.useState(""); // State for search input value
    console.log(searchValue);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? types.find((type) => type.type_designation === value)
                              ?.type_designation
                        : `Selectioner un ${object}...`}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder={`Chercher un ${object}...`}
                        className="h-9"
                        value={searchValue}
                        onValueChange={(newValue) => setSearchValue(newValue)} // Update search input value
                    />
                    <CommandList>
                        <CommandEmpty>
                            <Link
                                href={route("types.store")}
                                method="post"
                                as="button"
                                data={{ type_designation: searchValue }}
                            >
                                Ajouter <b>{searchValue}</b> au {object}
                            </Link>
                        </CommandEmpty>

                        <CommandGroup>
                            {types.map(({ type_id, type_designation }) => (
                                <CommandItem
                                    key={type_id}
                                    value={type_designation}
                                    onSelect={(currentValue) => {
                                        {
                                            console.log(value);
                                        }
                                        setValue(
                                            currentValue === value
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
                                            value === type_designation
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
