import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useTrans } from "@/Hooks/useTrans";
import { Input } from "@/Components/ui/input";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
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

export default function DeleteUserForm({ className = "" }) {
    const [open, setOpen] = useState(false);

    const passwordInput = useRef();
    const { width } = useWindowDimensions();

    const {
        data,
        setData,
        delete: destroy,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("client.profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => {
                setOpen(false);
                reset();
            },
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {useTrans("Supprimer le compte")}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {useTrans(
                        "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Avant de supprimer votre compte, veuillez télécharger toutes les données ou informations que vous souhaitez conserver."
                    )}
                </p>
            </header>

            {width >= 767 ? (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger
                        className={buttonVariants({ variant: "destructive" })}
                    >
                        <Trash className="mr-2 h-3.5 w-3.5 " />
                        {useTrans("Supprimer le compte")}
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {useTrans(
                                    "Etes-vous sûr de vouloir supprimer votre compte ?"
                                )}{" "}
                            </DialogTitle>
                            <DialogDescription>
                                {useTrans(
                                    "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
                                )}{" "}
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={deleteUser}>
                            <div className="mb-6">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="sr-only"
                                />

                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="mt-1 "
                                    isFocused
                                    placeholder={useTrans("Mot de passe")}
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <DialogFooter className="gap-2 ">
                                <Button
                                    variant="outline"
                                    onClick={() => setOpen(false)}
                                >
                                    {useTrans("Annuler")}
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        deleteUser();
                                    }}
                                    className="flex justify-center"
                                >
                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                    {useTrans("Supprimer")}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger
                        className={buttonVariants({ variant: "destructive" })}
                    >
                        <Trash className="mr-2 h-3.5 w-3.5 " />
                        {useTrans("Supprimer le compte")}
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="text-left">
                            <DrawerTitle>
                                {useTrans(
                                    "Etes-vous sûr de vouloir supprimer votre compte ?"
                                )}{" "}
                            </DrawerTitle>
                            <DrawerDescription>
                                {useTrans(
                                    "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées. Veuillez saisir votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte."
                                )}{" "}
                            </DrawerDescription>
                        </DrawerHeader>
                        <form onSubmit={deleteUser} className="">
                            <div className="mb-6 px-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                    className="sr-only"
                                />

                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="mt-1"
                                    isFocused
                                    placeholder={useTrans("Mot de passe")}
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <DrawerFooter className="pt-2">
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        deleteUser();
                                    }}
                                    className="flex justify-center"
                                >
                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                    {useTrans("Supprimer")}
                                </Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">
                                        {useTrans("Annuler")}
                                    </Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </form>
                    </DrawerContent>
                </Drawer>
            )}
        </section>
    );
}
