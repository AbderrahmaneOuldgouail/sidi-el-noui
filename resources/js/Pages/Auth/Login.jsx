import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useToast } from "@/Components/ui/use-toast";
import { Input } from "@/Components/ui/input";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useTrans } from "@/Hooks/useTrans";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        auth: "",
        password: "",
        remember: false,
    });
    const { toast } = useToast();
    const flash = usePage().props.flash;
    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="auth"
                        value={useTrans("Email ou N° téléphone")}
                    />

                    <Input
                        id="auth"
                        type="text"
                        name="auth"
                        value={data.auth}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("auth", e.target.value)}
                    />

                    <InputError message={errors.auth} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password"
                        value={useTrans("Mot de passe")}
                    />

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(e) =>
                                setData("remember", !data.remember)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            {useTrans("Souviens moi")}
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            {useTrans("Mot de passe oublié ?")}
                        </Link>
                    )}
                    <Button
                        variant="secondary"
                        size="sm"
                        className="ms-4 w-1/4"
                        disabled={processing}
                    >
                        {processing ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            useTrans("Se Connecter")
                        )}
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
