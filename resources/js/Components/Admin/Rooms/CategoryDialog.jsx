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
import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function CategoryDialog({ category, mode }) {
    const [open, setOpen] = React.useState(false);
    const { width } = useWindowDimensions();
    const { t } = useTranslation("translation", { keyPrefix: "features.form" });
    const { data, setData, post, put, errors, processing } = useForm({
        categorie_name: category ? category?.categorie_name : "",
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
                        {mode == "create" ? t("addCategorie") : t("edit")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {mode == "create"
                                ? t("addCategorieHeader")
                                : t("editCategorietHeader")}
                        </DialogTitle>
                        <DialogDescription>
                            {mode == "create"
                                ? t("addCategorieHeader")
                                : t("editCategorietHeader")}
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="categorie_name"
                                value={t("categorieName")}
                            />
                            <Input
                                placeholder={t("categoriePlaceholder")}
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
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            {mode == "create" ? t("createSubmit") : t("save")}{" "}
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
                    {mode == "create" ? t("addCategorie") : t("edit")}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {mode == "create"
                            ? t("addCategorieHeader")
                            : t("editCategorietHeader")}
                    </DrawerTitle>
                    <DrawerDescription>
                        {mode == "create"
                            ? t("addCategorieHeader")
                            : t("editCategorietHeader")}
                    </DrawerDescription>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="categorie_name"
                            value={t("categorieName")}
                        />
                        <Input
                            placeholder={t("categoriePlaceholder")}
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
                    <Button
                        variant="secondary"
                        type="submit"
                        disabled={processing}
                    >
                        {mode == "create" ? t("createSubmit") : t("save")}{" "}
                    </Button>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{t("cancel")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
