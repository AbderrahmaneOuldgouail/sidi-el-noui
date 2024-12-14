import React, { useState } from "react";
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Trash } from "lucide-react";
import { router } from "@inertiajs/react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";

export default function DeleteeDialog({ id, url, message }) {
    const [open, setOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const { width } = useWindowDimensions();
    const { t } = useTranslation("translation", {
        keyPrefix: "features.form",
    });

    const handleDelete = (id) => {
        router.delete(route(url, id, message), {
            method: "delete",
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setOpen(false);
            },
            onStart: () => {
                setDeleting(true);
            },
            onFinish: () => {
                setDeleting(false);
            },
        });
    };
    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger
                    className={buttonVariants({ variant: "destructive" })}
                >
                    <Trash className="mr-2 h-3.5 w-3.5 " />
                    {t("delete")}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{t("deleteHeader")} </DialogTitle>
                        <DialogDescription>
                            {message}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2 ">
                        <Button
                            variant="secondary"
                            onClick={() => setOpen(false)}
                        >
                            {t("cancel")}
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => handleDelete(id)}
                            className="flex justify-center"
                            disabled={deleting}
                        >
                            <Trash className="mx-2 h-3.5 w-3.5" />
                            {t("delete")}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger
                className={buttonVariants({ variant: "destructive" })}
            >
                <Trash className="mr-2 h-3.5 w-3.5 " />
                {t("delete")}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{t("deleteHeader")} </DrawerTitle>
                    <DrawerDescription>
                        {" "}
                        {t("deleteCategorieDescreption")}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <Button
                        variant="destructive"
                        onClick={() => {
                            handleDelete(id);
                        }}
                        className="flex justify-center"
                        disabled={deleting}
                    >
                        <Trash className="mx-2 h-3.5 w-3.5" />
                        {t("delete")}
                    </Button>
                    <DrawerClose asChild>
                        <Button variant="outline">{t("cancel")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
