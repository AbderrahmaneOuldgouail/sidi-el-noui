import React from "react";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import { useForm, usePage } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { LoaderCircle } from "lucide-react";
import InputError from "@/Components/InputError";
import { useTrans } from "@/Hooks/useTrans";

export default function Contact() {
    const user = usePage().props.auth.user;
    const { data, setData, errors, post, reset, processing, clearErrors } =
        useForm({
            client_email: user ? user.email : "",
            subject: "",
            message: "",
        });
    const submit = (e) => {
        e.preventDefault();
        post(route("client.contact.store"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                reset("client_email", "message", "subject");
            },
        });
    };
    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen max-h-sceen"
            id="contact-section"
        >
            <div className="absolute z-[0] w-[57rem] h-[57rem] right-[0] bottom-[10%] lg:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.4)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="font-bold border-b mb-4 w-3/5 mx-auto p-4 text-4xl flex justify-center ">
                {useTrans("contactez-nous")}
            </div>
            <form onSubmit={submit} className="relative w-full px-10">
                <div className="flex gap-4 flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/3 w-full">
                        <div className="my-4 flex flex-col gap-2">
                            <InputLabel
                                value={useTrans("Email")}
                                htmlFor="client_email"
                            />
                            <Input
                                type="email"
                                id="client_email"
                                name="client_email"
                                placeholder={useTrans("Email")}
                                value={data.client_email}
                                disabled={user}
                                onChange={(e) => {
                                    setData("client_email", e.target.value);
                                    clearErrors("client_email");
                                }}
                                className="bg-card "
                            />
                            <InputError message={errors.client_email} />
                        </div>
                        <div className="my-4 flex flex-col gap-2">
                            <InputLabel
                                value={useTrans("Sujet")}
                                htmlFor="subject"
                            />
                            <Input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder={useTrans("Sujet")}
                                value={data.subject}
                                onChange={(e) => {
                                    setData("subject", e.target.value);
                                    clearErrors("subject");
                                }}
                                className="bg-card "
                            />
                            <InputError message={errors.subject} />
                        </div>
                    </div>
                    <div className="sm:w-2/3 my-8 text-muted-foreground ">
                        {useTrans(
                            "Vous pouvez nous envoyer un message via ce formulaire de contact. Nous ferons de notre mieux pour répondre à toutes vos questions dans les plus brefs délais."
                        )}
                    </div>
                </div>
                <div className="my-4 flex flex-col gap-2">
                    <InputLabel value={useTrans("Message")} htmlFor="message" />
                    <Textarea
                        id="message"
                        name="message"
                        placeholder={useTrans("Message")}
                        value={data.message}
                        onChange={(e) => {
                            setData("message", e.target.value);
                            clearErrors("message");
                        }}
                        className="bg-card h-40"
                    />
                    <InputError message={errors.message} />
                </div>
                <div className="flex justify-end">
                    <Button variant="secondary" size="sm" className="w-1/6">
                        {processing ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            useTrans("Envoyé")
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
