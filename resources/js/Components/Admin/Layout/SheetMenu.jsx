import { router } from "@inertiajs/react";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/Components/ui/button";
import { Menu } from "./Menu";
import {
    Sheet,
    SheetHeader,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/Components/ui/sheet";
import { cn } from "@/lib/utils";
import { AppLogo } from "@/Components/ui/app-logo";
const appName = import.meta.env.VITE_APP_NAME || "Brand";

export function SheetMenu() {
    return (
        <Sheet>
            <SheetTrigger
                className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "lg:hidden h-8"
                )}
            >
                <MenuIcon size={20} />
            </SheetTrigger>
            <SheetContent
                className="sm:w-72 px-3 h-full flex flex-col"
                side="left"
                aria-describedby={undefined}
            >
                <SheetHeader>
                    <SheetTitle>
                        <Button
                            className="flex justify-center items-center w-full gap-2 pt-1"
                            variant="link"
                            onClick={() => router.get(route("admin.dashboard"))}
                        >
                            <AppLogo className="h-10 w-10" />
                            <h1 className="font-bold text-lg">{appName} </h1>
                        </Button>
                    </SheetTitle>
                </SheetHeader>
                <Menu isOpen />
            </SheetContent>
        </Sheet>
    );
}
