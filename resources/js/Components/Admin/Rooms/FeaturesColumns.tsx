import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Check, X, Pencil, MoreHorizontal, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Input } from "@/Components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
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
import { router, useForm } from "@inertiajs/react";
import { Checkbox } from "@/Components/ui/checkbox";
import { Badge } from "@/Components/ui/badge";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import ColumnHeader from "@/Components/Admin/ColumnHeader";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export type Feature = {
    feature_id: number;
    features_name: string;
    need_value: boolean;
    category: {
        categorie_name: string;
        categorie_id: number;
    };
};

export const featuresColumns: ColumnDef<Feature>[] = [
    {
        accessorKey: "featureName",
        cell: ({ row }) => {
            const features = row.original;
            return <span> {features.features_name}</span>;
        },
        header: () => <ColumnHeader title={"featureName"} />,
    },
    {
        accessorKey: "needValue",
        cell: ({ row }) => {
            const feature = row.original;
            return (
                <span>
                    {" "}
                    {feature.need_value ? (
                        <Badge variant="success">
                            <Check size={18} />
                        </Badge>
                    ) : (
                        <Badge variant="danger">
                            <X size={18} />
                        </Badge>
                    )}{" "}
                </span>
            );
        },
        header: () => <ColumnHeader title={"needValue"} />,
    },
    {
        accessorKey: "categorie",
        cell: ({ row }) => {
            const feature = row.original;
            return <span>{feature.category.categorie_name}</span>;
        },
        header: () => <ColumnHeader title={"categorie"} />,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const feature = row.original;
            const [isopen, setIsOpen] = React.useState(false);
            const [Editopen, setEditOpen] = React.useState(false);
            const [open, setopen] = React.useState(false);
            const { width } = useWindowDimensions();
            const [deleting, setDeleting] = React.useState(false);
            const { t } = useTranslation("translation", {
                keyPrefix: "features.form",
            });

            const { data, setData, put, errors, processing } = useForm({
                features_name: feature.features_name,
                categorie_id: feature.category.categorie_id,
                need_value: feature.need_value,
            });

            const submit = (e) => {
                e.preventDefault();
                put(route("features.update", feature.feature_id), {
                    onSuccess: () => {
                        setopen(false);
                        setEditOpen(false);
                    },
                });
            };
            const handleDelete = () => {
                router.delete(route("features.destroy", feature.feature_id), {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        setopen(false);
                        setIsOpen(false);
                    },
                    onStart: () => {
                        setDeleting(true);
                    },
                    onFinish: () => {
                        setDeleting(false);
                    },
                });
            };
            return (
                <DropdownMenu
                    open={isopen || Editopen ? true : open}
                    onOpenChange={() => setopen(!open)}
                >
                    <DropdownMenuTrigger
                        className={cn(buttonVariants({ variant: "ghost" }))}
                    >
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            {width >= 767 ? (
                                <Dialog
                                    open={Editopen}
                                    onOpenChange={setEditOpen}
                                >
                                    <DialogTrigger className="flex justify-center">
                                        <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                        <span>{t("edit")}</span>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                {t("editHeader")}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {t("editHeader")}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <form
                                            className="grid items-start gap-4 px-4"
                                            onSubmit={submit}
                                        >
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="features_name"
                                                    value={t("name")}
                                                />
                                                <Input
                                                    placeholder={t(
                                                        "placeholder"
                                                    )}
                                                    id="features_name"
                                                    value={data.features_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "features_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.features_name
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="categorie_id"
                                                    value={t("categorie")}
                                                />
                                                <Input
                                                    id="categorie_id"
                                                    disabled
                                                    value={
                                                        feature.category
                                                            .categorie_name
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.categorie_id
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <Checkbox
                                                    id="need_value"
                                                    checked={data.need_value}
                                                    onCheckedChange={() =>
                                                        setData(
                                                            "need_value",
                                                            !data.need_value
                                                        )
                                                    }
                                                />
                                                <InputLabel
                                                    htmlFor="need_value"
                                                    value={t("needValue")}
                                                />
                                            </div>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                {t("save")}
                                            </Button>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Drawer
                                    open={Editopen}
                                    onOpenChange={setEditOpen}
                                >
                                    <DrawerTrigger className="flex justify-center">
                                        <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                                        <span>{t("edit")}</span>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>
                                                {t("editHeader")}
                                            </DrawerTitle>
                                            <DrawerDescription>
                                                {t("editHeader")}
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <form
                                            className="grid items-start gap-4 px-4"
                                            onSubmit={submit}
                                        >
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="features_name"
                                                    value={t("name")}
                                                />
                                                <Input
                                                    placeholder={t(
                                                        "placeholder"
                                                    )}
                                                    id="features_name"
                                                    value={data.features_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "features_name",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.features_name
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <InputLabel
                                                    htmlFor="categorie_id"
                                                    value={t("categorie")}
                                                />
                                                <Input
                                                    id="categorie_id"
                                                    disabled
                                                    value={
                                                        feature.category
                                                            .categorie_name
                                                    }
                                                />
                                                <InputError
                                                    message={
                                                        errors.categorie_id
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-2">
                                                <Checkbox
                                                    id="need_value"
                                                    checked={data.need_value}
                                                    onCheckedChange={() =>
                                                        setData(
                                                            "need_value",
                                                            !data.need_value
                                                        )
                                                    }
                                                />
                                                <InputLabel
                                                    htmlFor="need_value"
                                                    value={t("needValue")}
                                                />
                                            </div>
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                {t("save")}
                                            </Button>
                                        </form>
                                        <DrawerFooter className="pt-2">
                                            <DrawerClose asChild>
                                                <Button variant="outline">
                                                    {t("cancel")}
                                                </Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            {width >= 767 ? (
                                <Dialog open={isopen} onOpenChange={setIsOpen}>
                                    <DialogTrigger
                                        className={buttonVariants({
                                            variant: "destructive",
                                        })}
                                    >
                                        <Trash className="mr-2 h-3.5 w-3.5 " />
                                        {t("delete")}
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                {t("deleteHeader")}{" "}
                                            </DialogTitle>
                                            <DialogDescription>
                                                {t("deleteDescreption")}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter className="gap-2 ">
                                            <Button
                                                variant="secondary"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {t("cancel")}
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete()}
                                                className="flex justify-center"
                                                disabled={deleting}
                                            >
                                                <Trash className="mx-2 h-3.5 w-3.5" />
                                                {t("delete")}
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Drawer open={isopen} onOpenChange={setIsOpen}>
                                    <DrawerTrigger
                                        className={buttonVariants({
                                            variant: "destructive",
                                        })}
                                    >
                                        <Trash className="mr-2 h-3.5 w-3.5 " />
                                        {t("delete")}
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle>
                                                {t("deleteHeader")}{" "}
                                            </DrawerTitle>
                                            <DrawerDescription>
                                                {t("deleteDescreption")}{" "}
                                            </DrawerDescription>
                                        </DrawerHeader>
                                        <DrawerFooter className="pt-2">
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete()}
                                                className="flex justify-center"
                                                disabled={deleting}
                                            >
                                                <Trash className="mx-2 h-3.5 w-3.5" />
                                                {t("delete")}
                                            </Button>
                                            <DrawerClose asChild>
                                                <Button variant="outline">
                                                    {t("cancel")}
                                                </Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
