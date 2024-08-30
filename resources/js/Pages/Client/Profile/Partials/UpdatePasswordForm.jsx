import { useEffect, useRef } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import { useToast } from "@/Components/ui/use-toast";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
        clearErrors,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });
    const { toast } = useToast();
    const flash = usePage().props.flash;

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {useTrans("Mettre à jour le mot de passe")}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {useTrans(
                        "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester en sécurité"
                    )}
                </p>
            </header>

            <form onSubmit={updatePassword}>
                <div className="md:flex my-4">
                    <div className="w-full  bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="current_password"
                            value={useTrans("Mot de passe actuel")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => {
                                setData("current_password", e.target.value);
                                clearErrors("current_password");
                            }}
                            type="password"
                            autoComplete="current-password"
                        />
                        <InputError
                            message={errors.current_password}
                            className="mt-2"
                        />
                    </div>
                </div>
                <Separator />
                <div className="md:flex my-4 gap-4">
                    <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="password"
                            value={useTrans("nouveau mot de passe")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => {
                                setData("password", e.target.value);
                                clearErrors("password");
                            }}
                            type="password"
                            autoComplete="new-password"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <Separator className="md:hidden my-4" />
                    <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value={useTrans("Confirmez le mot de passe")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => {
                                setData(
                                    "password_confirmation",
                                    e.target.value
                                );
                                clearErrors("password_confirmation");
                            }}
                            type="password"
                            autoComplete="new-password"
                        />
                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-end">
                        <Button
                            disabled={processing}
                            type="submit"
                            className="mt-2 w-1/4"
                            variant="secondary"
                        >
                            {useTrans("Enregistrer")}
                        </Button>
                    </div>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {useTrans("Enregistrer")}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
