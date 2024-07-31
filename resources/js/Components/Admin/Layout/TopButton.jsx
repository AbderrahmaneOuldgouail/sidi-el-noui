import React from "react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { CirclePlus } from "lucide-react";

export default function TopButton({ href, text }) {
    const { width } = useWindowDimensions();

    return width <= 767 ? (
        <div className="fixed bottom-10 right-10 ">
            <Button
                variant="secondary"
                className="h-16 w-16 rounded-full opacity-85"
            >
                <Link href={href} className="rounded-full">
                    <CirclePlus />
                </Link>
            </Button>
        </div>
    ) : (
        <div className="flex justify-end">
            <Button variant="secondary">
                <Link href={href}>{text}</Link>
            </Button>
        </div>
    );
}
