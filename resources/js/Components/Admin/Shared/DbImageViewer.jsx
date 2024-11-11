import { buttonVariants } from "@/Components/ui/button";
import { Trash } from "lucide-react";
import React from "react";

export default function DbImageViewer({ assets, remouveAsset }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {assets.map((image, index) => (
                <div key={index} className="relative">
                    <img
                        src={image.url}
                        alt={`Selected ${index}`}
                        className="rounded-md object-cover aspect-video"
                    />
                    <div
                        onClick={() => remouveAsset(image.id)}
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
    );
}
