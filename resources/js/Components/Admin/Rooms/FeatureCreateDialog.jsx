import * as React from "react";

import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
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
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { Checkbox } from "@/Components/ui/checkbox";
import { useTrans } from "@/Hooks/useTrans";
import { router, useForm } from "@inertiajs/react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

export default function FeatureCreateDialog({ categorys }) {
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const { width } = useWindowDimensions();
    const { data, setData, post, errors } = useForm({
        features_name: "",
        categorie_id: "",
        need_value: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("features.store"), {
            onSuccess: () => {
                setOpen(false);
            },
        });
    };

    const addToCategorys = (value) => {
        router.post(
            route("categorys.store"),
            { categorie_name: value },
            {
                onSuccess: () => {
                    setSearchValue("");
                    setIsOpen(false);
                },
            }
        );
    };

    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            !categorys && router.reload({ only: ["categorys"] })
                        }
                    >
                        {useTrans("Créer un Caractéristique")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {useTrans("Ajouter un nouveau Caractéristique")}
                        </DialogTitle>
                        <DialogDescription>
                            {useTrans("Ajouter un nouveau Caractéristique")}
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="features_name"
                                value={useTrans("Nom de caractéristique")}
                            />
                            <Input
                                placeholder={useTrans(
                                    "Example : wifi, dimension"
                                )}
                                id="features_name"
                                value={data.features_name}
                                onChange={(e) =>
                                    setData("features_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.features_name}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="categorie_id"
                                value={useTrans("Catégorie")}
                                className="w-fit"
                            />
                            <Popover open={isOpen} onOpenChange={setIsOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={open}
                                        className="w-full justify-between"
                                    >
                                        {selectedCategory
                                            ? selectedCategory
                                            : useTrans(
                                                  "Selectioner un categorie..."
                                              )}
                                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Command>
                                        <CommandInput
                                            placeholder={useTrans(
                                                "Chercher un categorie..."
                                            )}
                                            value={searchValue}
                                            onValueChange={(newValue) =>
                                                setSearchValue(newValue)
                                            }
                                        />
                                        <CommandList>
                                            <CommandEmpty>
                                                {searchValue ? (
                                                    <Button
                                                        variant="outline"
                                                        onClick={() =>
                                                            addToCategorys(
                                                                searchValue
                                                            )
                                                        }
                                                    >
                                                        <div>
                                                            <div>Ajouter</div>
                                                            <div className="font-bold">
                                                                {searchValue}
                                                            </div>
                                                            <div>
                                                                au categorie
                                                            </div>
                                                        </div>
                                                    </Button>
                                                ) : (
                                                    <span>
                                                        {useTrans(
                                                            "Chercher un categorie..."
                                                        )}
                                                    </span>
                                                )}
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {categorys &&
                                                    categorys.map(
                                                        (category) => (
                                                            <CommandItem
                                                                key={
                                                                    category.categorie_id
                                                                }
                                                                value={
                                                                    category.categorie_id
                                                                }
                                                                onSelect={(
                                                                    currentValue
                                                                ) => {
                                                                    setData(
                                                                        "categorie_id",
                                                                        category.categorie_id
                                                                    );
                                                                    setSelectedCategory(
                                                                        currentValue ===
                                                                            category.categorie_id
                                                                            ? ""
                                                                            : currentValue
                                                                    );
                                                                    setIsOpen(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                {
                                                                    category.categorie_name
                                                                }
                                                                <CheckIcon
                                                                    className={cn(
                                                                        "ml-auto h-4 w-4",
                                                                        selectedCategory ===
                                                                            category.categorie_name
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
                            <InputError
                                message={errors.categorie_id}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Checkbox
                                id="need_value"
                                checked={data.need_value}
                                onCheckedChange={() =>
                                    setData("need_value", !data.need_value)
                                }
                            />
                            <InputLabel
                                htmlFor="need_value"
                                value={useTrans("Besoin de valeur")}
                            />
                        </div>
                        <Button variant="secondary" type="submit">
                            {useTrans("Créer")}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant="secondary"
                    onClick={() =>
                        !categorys && router.reload({ only: ["categorys"] })
                    }
                >
                    {useTrans("Créer un Caractéristique")}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {useTrans("Ajouter un nouveau Caractéristique")}
                    </DrawerTitle>
                    <DrawerDescription>
                        {useTrans("Ajouter un nouveau Caractéristique")}
                    </DrawerDescription>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="features_name"
                            value={useTrans("Nom de caractéristique")}
                        />
                        <Input
                            placeholder={useTrans("Example : wifi, dimension")}
                            id="features_name"
                            value={data.features_name}
                            onChange={(e) =>
                                setData("features_name", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.features_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="categorie_id"
                            value={useTrans("Catégorie")}
                            className="w-fit"
                        />
                        <Popover open={isOpen} onOpenChange={setIsOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                >
                                    {selectedCategory
                                        ? selectedCategory
                                        : useTrans(
                                              "Selectioner un categorie..."
                                          )}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Command>
                                    <CommandInput
                                        placeholder={useTrans(
                                            "Chercher un categorie..."
                                        )}
                                        value={searchValue}
                                        onValueChange={(newValue) =>
                                            setSearchValue(newValue)
                                        }
                                    />
                                    <CommandList>
                                        <CommandEmpty>
                                            {searchValue ? (
                                                <Button
                                                    variant="outline"
                                                    onClick={() =>
                                                        addToCategorys(
                                                            searchValue
                                                        )
                                                    }
                                                >
                                                    <div>
                                                        <div>Ajouter</div>
                                                        <div className="font-bold">
                                                            {searchValue}
                                                        </div>
                                                        <div>au categorie</div>
                                                    </div>
                                                </Button>
                                            ) : (
                                                <span>
                                                    {useTrans(
                                                        "Chercher un categorie..."
                                                    )}
                                                </span>
                                            )}
                                        </CommandEmpty>
                                        <CommandGroup>
                                            {categorys &&
                                                categorys.map((category) => (
                                                    <CommandItem
                                                        key={
                                                            category.categorie_id
                                                        }
                                                        value={
                                                            category.categorie_id
                                                        }
                                                        onSelect={(
                                                            currentValue
                                                        ) => {
                                                            setData(
                                                                "categorie_id",
                                                                category.categorie_id
                                                            );
                                                            setSelectedCategory(
                                                                currentValue ===
                                                                    category.categorie_id
                                                                    ? ""
                                                                    : currentValue
                                                            );
                                                            setIsOpen(false);
                                                        }}
                                                    >
                                                        {
                                                            category.categorie_name
                                                        }
                                                        <CheckIcon
                                                            className={cn(
                                                                "ml-auto h-4 w-4",
                                                                selectedCategory ===
                                                                    category.categorie_name
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
                        <InputError
                            message={errors.categorie_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Checkbox
                            id="need_value"
                            checked={data.need_value}
                            onCheckedChange={() =>
                                setData("need_value", !data.need_value)
                            }
                        />
                        <InputLabel
                            htmlFor="need_value"
                            value={useTrans("Besoin de valeur")}
                        />
                    </div>
                    <Button variant="secondary" type="submit">
                        {useTrans("Créer")}
                    </Button>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{useTrans("Annuler")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
