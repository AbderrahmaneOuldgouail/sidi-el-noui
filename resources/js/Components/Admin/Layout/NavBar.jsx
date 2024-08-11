import { SheetMenu } from "./SheetMenu";
import { UserNav } from "./UserNav";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { NotificationsNav } from "./NotificationsNav";
import { AddBooking } from "./AddBooking";
import { usePage } from "@inertiajs/react";

export function Navbar({ title, isOpen }) {
    const permissions = usePage().props.auth.permissions;
    return (
        <div
            className={cn(
                "transition-[margin-left] ease-in-out duration-300",
                isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
            )}
        >
            <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
                <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
                    <div className="flex items-center space-x-4 lg:space-x-0">
                        <SheetMenu />
                        <h1 className="font-bold">{title}</h1>
                    </div>
                    <div>{permissions.booking.create && <AddBooking />}</div>
                    <div className="flex items-center space-x-2 justify-end">
                        <NotificationsNav />
                        <ThemeToggle />
                        <UserNav />
                    </div>
                </div>
            </header>
        </div>
    );
}
