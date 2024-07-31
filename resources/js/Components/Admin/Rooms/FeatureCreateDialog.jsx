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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
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
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { Checkbox } from "@/Components/ui/checkbox";
import { useTrans } from "@/Hooks/useTrans";
import { router, useForm } from "@inertiajs/react";

export default function FeatureCreateDialog({ categorys }) {
    const [open, setOpen] = React.useState(false);
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
                            <Select
                                name="categorie_id"
                                onValueChange={(value) => {
                                    setData("categorie_id", value);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder={useTrans(
                                            "Selectionner un catégorie"
                                        )}
                                    />
                                    {data.categorie_id}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categorie</SelectLabel>
                                        {categorys &&
                                            categorys.map((category) => (
                                                <SelectItem
                                                    value={
                                                        category.categorie_id
                                                    }
                                                    key={category.categorie_id}
                                                >
                                                    {category.categorie_name}
                                                </SelectItem>
                                            ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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
                        <Select
                            name="categorie_id"
                            onValueChange={(value) => {
                                setData("categorie_id", value);
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={useTrans(
                                        "Selectionner un catégorie"
                                    )}
                                />
                                {data.categorie_id}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Categorie</SelectLabel>
                                    {categorys &&
                                        categorys.map((category) => (
                                            <SelectItem
                                                value={category.categorie_id}
                                                key={category.categorie_id}
                                            >
                                                {category.categorie_name}
                                            </SelectItem>
                                        ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
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
