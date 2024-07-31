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
import { useTrans } from "@/Hooks/useTrans";
import { Link, router } from "@inertiajs/react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";

export default function DeleteeDialog({ id, url, message }) {
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();

    const handleDelete = (id) => {
        router.delete(route(url, id), {
            method: "delete",
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setOpen(false);
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
                    {useTrans("Supprimer")}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {useTrans("Vous êtes sure?")}{" "}
                        </DialogTitle>
                        <DialogDescription>
                            {useTrans(message)}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="gap-2 ">
                        <Button
                            variant="secondary"
                            onClick={() => setOpen(false)}
                        >
                            {useTrans("Annuler")}
                        </Button>
                        <Button
                            variant="destructive"
                            onClick={() => handleDelete(id)}
                            className="flex justify-center"
                        >
                            <Trash className="mx-2 h-3.5 w-3.5" />
                            {useTrans("Supprimer")}
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
                {useTrans("Supprimer")}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>{useTrans("Vous êtes sure?")} </DrawerTitle>
                    <DrawerDescription>{useTrans(message)} </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <Button
                        variant="destructive"
                        onClick={() => {
                            handleDelete(id);
                        }}
                        className="flex justify-center"
                    >
                        <Trash className="mx-2 h-3.5 w-3.5" />
                        {useTrans("Supprimer")}
                    </Button>
                    <DrawerClose asChild>
                        <Button variant="outline">{useTrans("Annuler")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
