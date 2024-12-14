import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/Components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTrans } from "@/Hooks/useTrans";
import { useForm } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function ConsommationDialog({ services, mode, consumption }) {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation("translation", {
        keyPrefix: "consumptions.form",
    });
    const { width } = useWindowDimensions();
    const { data, setData, post, put, errors, processing, reset } = useForm({
        consumption_name: consumption ? consumption?.consumption_name : "",
        consumption_price: consumption ? consumption?.consumption_price : "",
        service_id: consumption ? consumption?.service_id : "",
    });

    const submit = (e) => {
        e.preventDefault();
        if (mode == "create") {
            post(route("consumptions.store"), {
                onSuccess: () => {
                    setOpen(false);
                    reset(
                        "consumption_name",
                        "consumption_price",
                        "service_id"
                    );
                },
            });
        } else {
            put(route("consumptions.update", consumption.consumption_id), {
                onSuccess: () => setOpen(false),
            });
        }
    };

    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary">
                        {mode == "create" ? t("createBtn") : t("editBtn")}
                    </Button>
                </DialogTrigger>
                <DialogContent aria-describedby={undefined}>
                    <DialogHeader>
                        <DialogTitle>
                            {mode == "create"
                                ? t("createDialogTitle")
                                : t("editDialogTitle")}
                        </DialogTitle>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="service_id"
                                value={t("service")}
                                className="w-fit"
                            />
                            <Select
                                name="service_id"
                                onValueChange={(value) => {
                                    setData("service_id", value);
                                }}
                            >
                                <SelectTrigger className=" w-full">
                                    <SelectValue
                                        placeholder={
                                            data.service_id
                                                ? ""
                                                : t("servicePlaceholder")
                                        }
                                    />
                                    {
                                        services.find(
                                            (s) =>
                                                s.service_id == data.service_id
                                        )?.service_name
                                    }
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            {t("service")}{" "}
                                        </SelectLabel>
                                        {services.map((service) => (
                                            <SelectItem
                                                value={service.service_id}
                                                key={service.service_id}
                                            >
                                                {service.service_name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <InputError
                                message={errors.service_id}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="consumption_name"
                                value={t("name")}
                            />
                            <Input
                                placeholder={t("namePlaceholder")}
                                id="consumption_name"
                                value={data.consumption_name}
                                onChange={(e) =>
                                    setData("consumption_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.consumption_name}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="consumption_price"
                                value={t("price")}
                            />
                            <Input
                                className="mt-2"
                                id="consumption_price"
                                value={data.consumption_price}
                                onChange={(e) =>
                                    setData("consumption_price", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.consumption_price}
                                className="mt-2"
                            />
                        </div>
                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            {mode == "create"
                                ? t("createSubmit")
                                : t("editSubmit")}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="secondary">
                    {mode == "create"
                        ? t("createDialogTitle")
                        : t("editDialogTitle")}
                </Button>
            </DrawerTrigger>
            <DrawerContent aria-describedby={undefined}>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {mode == "create"
                            ? t("createDialogTitle")
                            : t("editDialogTitle")}
                    </DrawerTitle>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="service_id"
                            value={t("service")}
                            className="w-fit"
                        />
                        <Select
                            name="service_id"
                            onValueChange={(value) => {
                                setData("service_id", value);
                            }}
                        >
                            <SelectTrigger className=" w-full">
                                <SelectValue
                                    placeholder={
                                        data.service_id
                                            ? ""
                                            : t("servicePlaceholder")
                                    }
                                />
                                {
                                    services.find(
                                        (s) => s.service_id == data.service_id
                                    )?.service_name
                                }
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel> {t("service")} </SelectLabel>
                                    {services.map((service) => (
                                        <SelectItem
                                            value={service.service_id}
                                            key={service.service_id}
                                        >
                                            {service.service_name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <InputError
                            message={errors.service_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="consumption_name"
                            value={t("name")}
                        />
                        <Input
                            placeholder={t("namePlaceholder")}
                            id="consumption_name"
                            value={data.consumption_name}
                            onChange={(e) =>
                                setData("consumption_name", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.consumption_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="consumption_price"
                            value={t("price")}
                        />
                        <Input
                            className="mt-2"
                            id="consumption_price"
                            value={data.consumption_price}
                            onChange={(e) =>
                                setData("consumption_price", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.consumption_price}
                            className="mt-2"
                        />
                    </div>
                    <Button
                        variant="secondary"
                        type="submit"
                        disabled={processing}
                    >
                        {mode == "create" ? t("createSubmit") : t("editSubmit")}
                    </Button>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{t("cancel")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
