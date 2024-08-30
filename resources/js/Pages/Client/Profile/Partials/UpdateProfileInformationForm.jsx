import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm, usePage } from "@inertiajs/react";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, clearErrors } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("client.profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium">
                    {useTrans("Les informations personnelles")}
                </h2>
            </header>

            <form onSubmit={submit}>
                <div className="md:flex my-4 gap-4">
                    <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="first_name"
                            value={useTrans("Prénom")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="first_name"
                            value={data.first_name}
                            onChange={(e) => {
                                setData("first_name", e.target.value);
                                clearErrors("first_name");
                            }}
                        />
                        <InputError
                            message={errors.first_name}
                            className="mt-2"
                        />
                    </div>
                    <Separator className="md:hidden my-4" />
                    <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="last_name"
                            value={useTrans("Nom")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="last_name"
                            value={data.last_name}
                            onChange={(e) => {
                                setData("last_name", e.target.value);
                                clearErrors("last_name");
                            }}
                        />
                        <InputError
                            message={errors.last_name}
                            className="mt-2"
                        />
                    </div>
                </div>
                <Separator />
                <div className="md:flex my-4">
                    <div className="w-full md:w-1/3 pb-2">
                        <InputLabel htmlFor="email" value={useTrans("Email")} />
                        <LabelDescreption>
                            {useTrans(
                                "L'email doit être unique pour chaque utilisateur"
                            )}
                        </LabelDescreption>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                        <InputLabel htmlFor="email" value={useTrans("Email")} />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="email"
                            value={data.email}
                            onChange={(e) => {
                                setData("email", e.target.value);
                                clearErrors("email");
                            }}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>
                <Separator />
                <div className="md:flex my-4">
                    <div className="w-full md:w-1/3 pb-2">
                        <InputLabel
                            htmlFor="phone"
                            value={useTrans("N° téléphone d'employé")}
                        />
                        <LabelDescreption>
                            {useTrans(
                                "Le N° téléphone doit être unique pour chaque utilisateur"
                            )}
                        </LabelDescreption>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="phone"
                            value={useTrans("N° téléphone d'employé")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="phone"
                            value={data.phone}
                            onChange={(e) => {
                                setData("phone", e.target.value);
                                clearErrors("phone");
                            }}
                        />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            {useTrans(
                                "Votre adresse email n'est pas vérifiée."
                            )}
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                {useTrans(
                                    "Cliquez ici pour renvoyer l'e-mail de vérification."
                                )}{" "}
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                {useTrans(
                                    "Un nouveau lien de vérification a été envoyé à votre adresse e-mail."
                                )}
                            </div>
                        )}
                    </div>
                )}

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
            </form>
        </section>
    );
}
