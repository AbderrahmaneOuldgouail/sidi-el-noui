import React from "react";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import { useForm } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { LoaderCircle } from "lucide-react";
import InputError from "@/Components/InputError";

export default function Contact() {
    const { data, setData, errors, post, reset, processing, clearErrors } =
        useForm({
            client_email: "",
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
                Contact
            </div>
            <form onSubmit={submit} className="relative w-full px-10">
                <div className="flex gap-4 flex-col-reverse sm:flex-row">
                    <div className="sm:w-1/3 w-2/3">
                        <div className="my-4 flex flex-col gap-2">
                            <InputLabel value="Email" htmlFor="client_email" />
                            <Input
                                type="email"
                                id="client_email"
                                name="client_email"
                                placeholder="Email"
                                value={data.client_email}
                                onChange={(e) => {
                                    setData("client_email", e.target.value);
                                    clearErrors("client_email");
                                }}
                                className="bg-card "
                            />
                            <InputError message={errors.client_email} />
                        </div>
                        <div className="my-4 flex flex-col gap-2">
                            <InputLabel value="Sujet" htmlFor="subject" />
                            <Input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="subject"
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
                        Vous pouvez nous envoyer un message via ce formulaire de
                        contact. Nous ferons de notre mieux pour répondre à
                        toutes vos questions dans les plus brefs délais.
                    </div>
                </div>
                <div className="my-4 flex flex-col gap-2">
                    <InputLabel value="Message" htmlFor="message" />
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="message"
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
                            "Envoyer"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
