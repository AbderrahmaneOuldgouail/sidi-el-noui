import React from "react";
import { buttonVariants } from "@/Components/ui/button";
import { Trash } from "lucide-react";

export function ImagesViewer({ images }) {
    const deleteImage = (index) => {
        images.splice(index, 1);
    };
    return (
        <div className="pb-4">
            {images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image}
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
