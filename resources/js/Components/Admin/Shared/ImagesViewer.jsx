import React from "react";
import { buttonVariants } from "@/Components/ui/button";
import { Trash } from "lucide-react";
import InputError from "@/Components/InputError";

export function ImagesViewer({ images, errors, deleteImage }) {
    return (
        <div className="pb-4">
            {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image.url}
                                alt={`Selected ${index}`}
                                className="rounded-md object-cover aspect-video"
                            />
                            <div
                                onClick={() => deleteImage(index)}
                                className={buttonVariants({
                                    variant: "destructive",
                                    className:
                                        "absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer",
                                })}
                            >
                                <Trash />
                            </div>
                            {errors && (
                                <InputError
                                    message={errors?.[`assets.${index}`]}
                                    className="mt-2"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
