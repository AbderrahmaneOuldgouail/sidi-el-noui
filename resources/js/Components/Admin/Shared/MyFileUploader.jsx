import React from "react";
import { ImagePlus} from "lucide-react";
import { useTrans } from "@/Hooks/useTrans";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function MyFileUploader() {
    return (
        <div>
            <div className="bg-card mt-2 p-4 rounded flex justify-between items-center border-dashed border-2 border-secondary">
                <div className="flex gap-4 items-center">
                    <ImagePlus />
                    <p className="text-sm text-gray-600">
                        {useTrans("Télécharger ou déposer des images ici")}
                    </p>
                </div>
                <p className="text-sm text-gray-600">
                    {fileTypes.map((type) => type + ",")}{" "}
                </p>
            </div>
        </div>
    );
}
