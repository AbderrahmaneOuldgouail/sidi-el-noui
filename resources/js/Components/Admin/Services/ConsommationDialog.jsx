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

export default function ConsommationDialog({ services, mode, consumption }) {
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();
    const { data, setData, post, put, errors } = useForm({
        consumption_name: consumption?.consumption_name,
        consumption_price: consumption?.consumption_price,
        service_id: consumption?.service_id,
    });

    const submit = (e) => {
        e.preventDefault();
        if (mode == "create") {
            post(route("consumptions.store"), {
                onSuccess: () => setOpen(false),
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
                        {mode == "create"
                            ? useTrans("Créer un consommation")
                            : useTrans("Modifier")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {mode == "create"
                                ? useTrans("Créer un nouveau consommation")
                                : useTrans("Modifier cette consommation")}
                        </DialogTitle>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="service_id"
                                value={useTrans("Service")}
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
                                                : useTrans(
                                                      "Selectionner un service"
                                                  )
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
                                        <SelectLabel>Services</SelectLabel>
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
                                value={useTrans("Nom de consommation")}
                            />
                            <Input
                                placeholder={useTrans("Exemple : Diner")}
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
                                value={useTrans("Prix de consommation")}
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
                        <Button variant="secondary" type="submit">
                            {mode == "create"
                                ? useTrans("Créer")
                                : useTrans("Enregistrer")}
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
                        ? useTrans("Créer un consommation")
                        : useTrans("Modifier")}{" "}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {mode == "create"
                            ? useTrans("Créer un nouveau consommation")
                            : useTrans("Modifier cette consommation")}{" "}
                    </DrawerTitle>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="service_id"
                            value={useTrans("Service")}
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
                                            : useTrans(
                                                  "Selectionner un service"
                                              )
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
                                    <SelectLabel>Services</SelectLabel>
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
                            value={useTrans("Nom de consommation")}
                        />
                        <Input
                            placeholder={useTrans("Exemple : Diner")}
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
                            value={useTrans("Prix de consommation")}
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
                    <Button variant="secondary" type="submit">
                        {mode == "create"
                            ? useTrans("Créer")
                            : useTrans("Enregistrer")}
                    </Button>
                </form>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">{useTrans("Annuler")}</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
