import { useRef, useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useForm } from "@inertiajs/react";
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
import { useTranslation } from "react-i18next";

export default function DeleteUserForm({ className = "" }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "client.profile.section3",
    });
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
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {t("title")}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {t("subtitle")}
                </p>
            </header>

            {width >= 767 ? (
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger
                        className={buttonVariants({ variant: "destructive" })}
                    >
                        <Trash className="mr-2 h-3.5 w-3.5 " />
                        {t("title")}
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{t("dialogTitle")} </DialogTitle>
                            <DialogDescription>
                                {t("dialogDescreption")}{" "}
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
                                    placeholder={t("placeholder")}
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
                                    {t("cancel")}
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        deleteUser();
                                    }}
                                    className="flex justify-center"
                                >
                                    <Trash className="mx-2 h-3.5 w-3.5" />
                                    {t("delete")}
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
                        {t("title")}
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="text-left">
                            <DrawerTitle>{t("dialogTitle")} </DrawerTitle>
                            <DrawerDescription>
                                {t("dialogDescreption")}{" "}
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
                                    placeholder={t("placeholder")}
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
                                    {t("delete")}
                                </Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">
                                        {t("cancel")}
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
