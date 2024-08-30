import { Link } from "@inertiajs/react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
    Sheet,
    SheetHeader,
    SheetContent,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { AppLogo } from "@/Components/ui/app-logo";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { useWindowDimensions } from "@/Hooks/useWindowDimensions";

export function LinkSheet() {
    const [open, setOpen] = useState(false);
    const { width } = useWindowDimensions();

    return (
        <Sheet
            open={width > 767 ? false : open}
            onOpenChange={() => setOpen(!open)}
        >
            <SheetTrigger className="md:hidden" asChild>
                <Button className="h-8" variant="outline" size="icon">
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent
                className="w-72 px-3 h-full flex flex-col gap-8"
                side="right"
            >
                <SheetHeader>
                    <Link
                        href={route("client.index")}
                        className="flex items-center gap-2"
                    >
                        <AppLogo className="h-10 w-10" />
                        <h1 className="font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300">
                            Sidi El Noui
                        </h1>
                    </Link>
                </SheetHeader>
                <NavLinks />
            </SheetContent>
        </Sheet>
    );
}
