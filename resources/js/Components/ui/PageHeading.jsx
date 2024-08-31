import { cn } from "@/lib/utils";
import React from "react";

export default function PageHeading({ title, className = "" }) {
    return (
        <div>
            <h1 className={"font-bold text-3xl " + className}>{title} </h1>
        </div>
    );
}
