import * as React from "react";
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
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTrans } from "@/Hooks/useTrans";
import { useForm } from "@inertiajs/react";

export default function CategoryDialog({ category, mode }) {
    const [open, setOpen] = React.useState(false);
    const { width } = useWindowDimensions();
    const { data, setData, post, put, errors } = useForm({
        categorie_name: category?.categorie_name,
    });

    const submit = (e) => {
        e.preventDefault();
        if (mode == "create") {
            post(route("categorys.store"), {
                onSuccess: () => {
                    setOpen(false);
                },
            });
        } else {
            put(route("categorys.update", category.categorie_id), {
                onSuccess: () => setOpen(false),
            });
        }
    };

    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary">
                        {mode == "create"
                            ? useTrans("Ajouter un categorie")
                            : useTrans("Modifier")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {mode == "create"
                                ? useTrans("Ajouter un nouveau Catégorie")
                                : useTrans("Modifier cette Catégorie")}{" "}
                        </DialogTitle>
                        <DialogDescription>
                            {mode == "create"
                                ? useTrans("Ajouter un nouveau Catégorie")
                                : useTrans("Modifier cette Catégorie")}{" "}
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="categorie_name"
                                value={useTrans("Nom de catégorie :")}
                            />
                            <Input
                                placeholder={useTrans(
                                    "Example : wifi, dimension"
                                )}
                                id="categorie_name"
                                value={data.categorie_name}
                                onChange={(e) =>
                                    setData("categorie_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.categorie_name}
                                className="mt-2"
                            />
                        </div>
                        <Button variant="secondary" type="submit">
                            {mode == "create"
                                ? useTrans("Créer")
                                : useTrans("Enregistrer")}{" "}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="secondary">
                    {mode == "create"
                        ? useTrans("Ajouter un categorie")
                        : useTrans("Modifier")}{" "}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {mode == "create"
                            ? useTrans("Ajouter un nouveau Catégorie")
                            : useTrans("Modifier cette Catégorie")}{" "}
                    </DrawerTitle>
                    <DrawerDescription>
                        {mode == "create"
                            ? useTrans("Ajouter un nouveau Catégorie")
                            : useTrans("Modifier cette Catégorie")}{" "}
                    </DrawerDescription>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="categorie_name"
                            value={useTrans("Nom de catégorie :")}
                        />
                        <Input
                            placeholder={useTrans("Example : wifi, dimension")}
                            id="categorie_name"
                            value={data.categorie_name}
                            onChange={(e) =>
                                setData("categorie_name", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.categorie_name}
                            className="mt-2"
                        />
                    </div>
                    <Button variant="secondary" type="submit">
                        {mode == "create"
                            ? useTrans("Créer")
                            : useTrans("Enregistrer")}{" "}
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
