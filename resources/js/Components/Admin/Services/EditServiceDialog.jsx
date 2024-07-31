import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
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
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { useTrans } from "@/Hooks/useTrans";
import { useForm } from "@inertiajs/react";
import { FileUploader } from "react-drag-drop-files";
import MyFileUploader from "@/Components/Admin/Shared/MyFileUploader";
import { ImagesViewer } from "@/Components/Admin/Shared/ImagesViewer";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function EditServiceDialog({ service, url }) {
    const [open, setOpen] = React.useState(false);
    const { width } = useWindowDimensions();
    const [images, setImages] = useState([]);
    const { data, setData, post, errors } = useForm({
        service_name: service?.service_name,
        service_descreption: service?.service_descreption,
        assets: [],
    });

    const submit = (e) => {
        e.preventDefault();
        if (url == "update") {
            post(route(`services.update`, service.service_id), {
                onSuccess: () => {
                    setOpen(false);
                },
            });
        } else {
            post(route("services.store"), {
                onSuccess: () => {
                    setOpen(false);
                },
            });
        }
    };

    const handleFiles = (file) => {
        const files = Array.from(file);
        const promises = files.map((f) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(f);
            });
        });

        Promise.all(promises).then((images) => {
            setImages(images);
        });
        setData("assets", file);
    };

    if (width >= 767) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="secondary">
                        {" "}
                        {url == "update"
                            ? useTrans("Modifier")
                            : useTrans("Créer un service")}
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {url == "update"
                                ? useTrans("Modifier ce service")
                                : useTrans("Créer un nouveau service")}
                        </DialogTitle>
                        <DialogDescription>
                            {url == "update"
                                ? useTrans("Modifier ce service")
                                : useTrans("Créer un nouveau service")}
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        className="grid items-start gap-4 px-4"
                        onSubmit={submit}
                    >
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="service_name"
                                value={useTrans("Nom de service")}
                            />
                            <Input
                                placeholder={useTrans("Exemple : Restaurant")}
                                id="service_name"
                                value={data.service_name}
                                onChange={(e) =>
                                    setData("service_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.service_name}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <InputLabel
                                htmlFor="service_descreption"
                                value={useTrans("Description")}
                            />
                            <Textarea
                                className="mt-2"
                                id="service_descreption"
                                value={data.service_descreption}
                                onChange={(e) =>
                                    setData(
                                        "service_descreption",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={errors.service_descreption}
                                className="mt-2"
                            />
                        </div>
                        <div className="my-3">
                            <InputLabel
                                htmlFor="assets"
                                value={useTrans("Photos")}
                                className="mb-2"
                            />
                            <FileUploader
                                id="assets"
                                handleChange={handleFiles}
                                name="file"
                                types={fileTypes}
                                multiple={true}
                            >
                                <MyFileUploader />
                            </FileUploader>
                            <InputError
                                message={errors.assets}
                                className="mt-2"
                            />
                            <ImagesViewer images={images} />
                        </div>
                        <Button variant="secondary" type="submit">
                            {url == "update"
                                ? useTrans("Enregistrer")
                                : useTrans("Créer")}
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
                    {url == "update"
                        ? useTrans("Modifier")
                        : useTrans("Créer un service")}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {url == "update"
                            ? useTrans("Modifier ce service")
                            : useTrans("Créer un service")}{" "}
                    </DrawerTitle>
                    <DrawerDescription>
                        {url == "update"
                            ? useTrans("Modifier ce service")
                            : useTrans("Créer un service")}{" "}
                    </DrawerDescription>
                </DrawerHeader>
                <form className="grid items-start gap-4 px-4" onSubmit={submit}>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="service_name"
                            value={useTrans("Nom de service")}
                        />
                        <Input
                            placeholder={useTrans("Exemple : Restaurant")}
                            id="service_name"
                            value={data.service_name}
                            onChange={(e) =>
                                setData("service_name", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.service_name}
                            className="mt-2"
                        />
                    </div>
                    <div className="grid gap-2">
                        <InputLabel
                            htmlFor="service_descreption"
                            value={useTrans("Description")}
                        />
                        <Textarea
                            className="mt-2"
                            id="service_descreption"
                            value={data.service_descreption}
                            onChange={(e) =>
                                setData("service_descreption", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.service_descreption}
                            className="mt-2"
                        />
                    </div>
                    <div className="my-3">
                        <InputLabel
                            htmlFor="assets"
                            value={useTrans("Photos")}
                            className="mb-2"
                        />
                        <FileUploader
                            id="assets"
                            handleChange={handleFiles}
                            name="file"
                            types={fileTypes}
                            multiple={true}
                        >
                            <MyFileUploader />
                        </FileUploader>
                        <InputError message={errors.assets} className="mt-2" />
                        <ImagesViewer images={images} />
                    </div>
                    <Button variant="secondary" type="submit">
                        {url == "update"
                            ? useTrans("Enregistrer")
                            : useTrans("Créer")}
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
