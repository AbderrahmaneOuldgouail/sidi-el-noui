import React from "react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { Button } from "@/Components/ui/button";
import { Link, router } from "@inertiajs/react";
import { CirclePlus } from "lucide-react";

export default function TopButton({ href, text }) {
    const { width } = useWindowDimensions();

    const handleButton = () => {
        router.visit(href, { method: "get" });
    };

    return width <= 767 ? (
        <div className="fixed bottom-10 right-10 ">
            <Button
                variant="secondary"
                className="h-16 w-16 rounded-full opacity-85"
                onClick={() => {
                    handleButton();
                }}
            >
                <CirclePlus />
            </Button>
        </div>
    ) : (
        <div className="flex justify-end">
            <Button
                variant="secondary"
                onClick={() => {
                    handleButton();
                }}
            >
                {text}
            </Button>
        </div>
    );
}
