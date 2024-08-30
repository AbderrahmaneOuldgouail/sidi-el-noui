import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import logo from "../assets/logo.png";
import { Button } from "@/Components/ui/button";
import NavLinks from "./NavLinks";
import { LinkSheet } from "./LinkSheet";
import { UserNav } from "./UserNav";
import { ThemeToggle } from "@/Components/Admin/Layout/ThemeToggle";
import { AppLogo } from "@/Components/ui/app-logo";
import { LangSwitch } from "./LangSwitch";

export default function NavBar() {
    const user = usePage().props.auth.user;
    return (
        <header className="sticky top-0 z-50 w-full shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
            <div className="mx-4 sm:mx-8 flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4 lg:space-x-0">
                    <Link href={route("client.index")}>
                        <AppLogo className="w-10 h-10" />
                    </Link>
                </div>
                <div className="invisible md:visible">
                    <NavLinks />
                </div>
                <div className="flex items-center gap-2 justify-end">
                    {user ? (
                        <UserNav />
                    ) : (
                        <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => router.get(route("login"))}
                        >
                            Se Connecter
                        </Button>
                    )}
                    <LangSwitch />
                    <ThemeToggle />
                    <LinkSheet />
                </div>
            </div>
        </header>
    );
}
