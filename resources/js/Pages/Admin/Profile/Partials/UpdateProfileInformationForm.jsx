import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm, usePage } from "@inertiajs/react";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import { Separator } from "@/Components/ui/separator";
import { Button } from "@/Components/ui/button";
import { useTranslation } from "react-i18next";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;
    const { t } = useTranslation("translation", {
        keyPrefix: "profile.section1",
    });
    const { data, setData, patch, errors, processing } = useForm({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("admin.profile.update"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium">{t("title")}</h2>
            </header>

            <form onSubmit={submit}>
                <div className="md:flex my-4 gap-4">
                    <div className="w-full md:w-1/2 bg-muted p-4 shadow">
                        <InputLabel
                            htmlFor="first_name"
                            value={t("form.firstName")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="first_name"
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
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
                            value={t("form.lastName")}
                        />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="last_name"
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
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
                        <InputLabel htmlFor="email" value={t("form.email")} />
                        <LabelDescreption>
                            {t("form.emailDescreption")}
                        </LabelDescreption>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                        <InputLabel htmlFor="email" value={t("form.email")} />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>
                <Separator />
                <div className="md:flex my-4">
                    <div className="w-full md:w-1/3 pb-2">
                        <InputLabel htmlFor="phone" value={t("form.phone")} />
                        <LabelDescreption>
                            {t("form.phoneDescreption")}
                        </LabelDescreption>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted p-4 shadow">
                        <InputLabel htmlFor="phone" value={t("form.phone")} />
                        <Input
                            className="mt-2 w-full bg-card"
                            id="phone"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            {t("form.emailValidation")}
                            <Link
                                href={route("form.verification.send")}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                {t("form.sendEmailValidation")}{" "}
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                {t("form.validationSended")}
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
                        {t("form.submit")}
                    </Button>
                </div>
            </form>
        </section>
    );
}
