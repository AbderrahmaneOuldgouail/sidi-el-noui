import React, { useEffect, useState } from "react";
import { Head, router, useForm, usePage } from "@inertiajs/react";

import PlaceholderContent from "@/Components/Admin/Layout/PlaceholderContent";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout";
import PageHeading from "@/Components/ui/PageHeading";

import { useTrans } from "@/Hooks/useTrans";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/Components/ui/resizable";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Separator } from "@/Components/ui/separator";
import { Textarea } from "@/Components/ui/textarea";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { useToast } from "@/Components/ui/use-toast";
import { MessageSquareX } from "lucide-react";
import InputError from "@/Components/InputError";

export default function messages({ messages, filter }) {
    const [selectedMessage, setSelectedMessage] = useState(0);
    const { toast } = useToast();
    const flash = usePage().props.flash;
    const permissions = usePage().props.auth.permissions;
    const hasUnreadMessages = usePage().props.hasUnreadMessages;

    console.log(permissions);

    const { data, setData, post, errors } = useForm({
        message: "",
        client_email: messages[selectedMessage]?.client_email,
    });

    useEffect(() => {
        if (flash.message) {
            toast({ description: flash.message?.message });
        }
    }, [flash.message, toast]);

    const submit = (e) => {
        e.preventDefault();
        post(route("messages.reply"));
    };

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
    }

    function timeSince(date) {
        const now = new Date();
        const past = new Date(date);
        const secondsAgo = Math.floor((now - past) / 1000);

        const minutesAgo = Math.floor(secondsAgo / 60);
        const hoursAgo = Math.floor(minutesAgo / 60);
        const daysAgo = Math.floor(hoursAgo / 24);

        if (daysAgo > 0) {
            return `${daysAgo} jrs`;
        } else if (hoursAgo > 0) {
            return `${hoursAgo} h`;
        } else if (minutesAgo > 0) {
            return `${minutesAgo} min`;
        } else {
            return `${secondsAgo} s`;
        }
    }

    const readMessage = (id) => {
        router.put(
            route("messages.update", id),
            {},
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    };

    const readAll = () => {
        router.get(route("messages.readAll"));
    };
    const getUnRead = () => {
        router.get(
            route("messages.index"),
            { filter: "unread" },
            { preserveState: true, preserveScroll: true }
        );
    };
    const getAll = () => {
        router.get(
            route("messages.index"),
            { filter: "all" },
            { preserveState: true, preserveScroll: true }
        );
    };
    const deleteMessage = (id) => {
        router.delete(route("messages.destroy", id));
    };
    const deleteAll = () => {
        router.delete(route("messages.destroyAll"));
    };

    const ViewNotification = (notif) => {
        router.get(
            route("bookings.show", notif.data.booking_id),
            {},
            {
                onSuccess: () => {
                    router.post(route("notifications.read"), {
                        id: notif.id,
                    });
                },
            }
        );
    };
    return (
        <AdminPanelLayout>
            <Head title="Boîte de réception" />
            <PageHeading title={useTrans("Boîte de réception")} />
            <div className="flex justify-end mt-2 gap-4">
                {permissions.message.update && (
                    <Button
                        disabled={messages.length < 1 || !hasUnreadMessages}
                        onClick={() => {
                            readAll();
                        }}
                        variant="ghost"
                        className="font-bold "
                    >
                        {useTrans("Tout marquer comme lu")}
                    </Button>
                )}
                {permissions.message.delete && (
                    <Button
                        disabled={messages.length < 1}
                        onClick={() => {
                            deleteAll();
                        }}
                        variant="ghost"
                        className="font-bold"
                    >
                        {useTrans("Supprimer Tous")}
                    </Button>
                )}
            </div>
            <PlaceholderContent>
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel className="w-1/2">
                        <Button
                            onClick={() => {
                                getAll();
                            }}
                            variant="ghost"
                            className={cn(
                                "font-bold mx-2",
                                filter != "unread" &&
                                    "bg-accent text-accent-foreground"
                            )}
                        >
                            {useTrans("Tous")}
                        </Button>
                        <Button
                            onClick={() => {
                                getUnRead();
                            }}
                            variant="ghost"
                            className={cn(
                                "font-bold",
                                filter == "unread" &&
                                    "bg-accent text-accent-foreground"
                            )}
                        >
                            {useTrans("Non lu")}
                        </Button>
                        {messages.length > 0 ? (
                            <ScrollArea className="h-96 mt-2">
                                <div>
                                    {messages.map((message, idx) => (
                                        <Card key={idx} className="mb-2">
                                            <div className=" hover:cursor-pointer hover:bg-accent">
                                                <CardHeader
                                                    className="p-3 flex justify-between itmes-center flex-row "
                                                    onClick={() => {
                                                        if (
                                                            message.read_at ==
                                                            null
                                                        ) {
                                                            readMessage(
                                                                message.message_id
                                                            );
                                                        }
                                                        setSelectedMessage(idx);
                                                    }}
                                                >
                                                    <div className="font-bold">
                                                        {message.subject}
                                                        <div className="text-sm text-muted-foreground">
                                                            {message.user
                                                                ? message.user
                                                                      .first_name
                                                                : "Utilisateur"}
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 items-center">
                                                        <div className="text-sm text-muted-foreground opacity-60">
                                                            {timeSince(
                                                                message.created_at
                                                            )}
                                                        </div>
                                                        {message.read_at ==
                                                            null && (
                                                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                                                        )}{" "}
                                                    </div>
                                                </CardHeader>
                                                <CardContent
                                                    className="p-3"
                                                    onClick={() => {
                                                        readMessage(
                                                            message.message_id
                                                        );
                                                        setSelectedMessage(idx);
                                                    }}
                                                >
                                                    <CardDescription>
                                                        {message.message}{" "}
                                                    </CardDescription>
                                                </CardContent>
                                            </div>
                                            <CardFooter className="p-3 flex justify-end gap-3">
                                                <Button
                                                    variant="link"
                                                    size="sm"
                                                    className="text-secondary"
                                                >
                                                    <a
                                                        href={
                                                            "mailto:" +
                                                            message.client_email
                                                        }
                                                    >
                                                        {useTrans(
                                                            "استئناف مع عنوان البريد الإلكتروني الخاص بك"
                                                        )}
                                                    </a>
                                                </Button>
                                                {permissions.message.delete && (
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() =>
                                                            deleteMessage(
                                                                message.message_id
                                                            )
                                                        }
                                                    >
                                                        {useTrans("Supprimer")}
                                                    </Button>
                                                )}
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </ScrollArea>
                        ) : (
                            <div className="flex justify-center items-center flex-col h-96 mt-2 ">
                                <MessageSquareX size={70} />
                                <div>
                                    {" "}
                                    {useTrans("Aucun message a afficher")}{" "}
                                </div>
                            </div>
                        )}
                    </ResizablePanel>
                    <ResizableHandle withHandle className="mx-4" />
                    <ResizablePanel className="relative">
                        <div className="my-2 flex justify-between itmes-center flex-row">
                            <div className="font-bold">
                                {messages[selectedMessage]?.user
                                    ? messages[selectedMessage].user.first_name
                                    : "Utilisateur"}
                                <div className="text-sm text-muted-foreground">
                                    {messages[selectedMessage]?.subject
                                        ? messages[selectedMessage].subject
                                        : "Sujet"}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {useTrans("Repondre à :")}{" "}
                                    {messages[selectedMessage]?.client_email
                                        ? messages[selectedMessage]
                                              ?.client_email
                                        : "client@gmail.com"}
                                </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {messages[selectedMessage]?.created_at
                                    ? formatDate(
                                          messages[selectedMessage].created_at
                                      )
                                    : "00-00-0000, 00:00:00 "}
                            </div>
                        </div>
                        <Separator />
                        <ScrollArea className="h-1/2">
                            <div className="py-2">
                                {messages[selectedMessage]?.message
                                    ? messages[selectedMessage].message
                                    : "Message"}
                            </div>
                        </ScrollArea>
                        <div className="absolute bottom-0 w-full">
                            <Separator className="my-2 " />
                            <form onSubmit={submit}>
                                <Textarea
                                    placeholder="Répendre à CLIENT"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.message}
                                    className="mt-2"
                                />
                                <div className="flex justify-end  my-3">
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        disabled={messages.length < 1}
                                    >
                                        {useTrans("Envoyé")}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </PlaceholderContent>
        </AdminPanelLayout>
    );
}
