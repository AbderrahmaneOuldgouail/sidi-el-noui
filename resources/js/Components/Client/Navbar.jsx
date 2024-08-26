import React from "react";
import { Link, usePage } from "@inertiajs/react";
import logo from "./assets/logo.png";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";
import Home from "./Home";

const navLinks = [
    { href: "client.index", label: "Accueil" },
    { href: "client.chambre.index", label: "Les Chambres" },
    { href: "client.service.index", label: "Services" },
    { href: "client.contact.index", label: "Contact" },
];

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const props = usePage().props;

    return (
        <nav className="flex items-center justify-between p-4 bg-secondary text-primary">
            <div className="flex items-center">
                <a href="./">
                    <img src={logo} alt="logo" className="w-10 sm:w-12 ml-28" />
                </a>
            </div>

            <ul
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } sm:flex sm:space-x-16 items-center m-auto  flex-col sm:flex-row`}
            >
                {navLinks.map((link, index) => (
                    <li key={index} className="py-2 sm:py-0">
                        <Link
                            href={route(link.href)}
                            className="hover:text-white text-lg"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex items-center space-x-4 relative">
                <button
                    className="sm:hidden"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar className="h-8 w-8">
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="absolute right-0 mt-2 w-48">
                            <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Réservations</DropdownMenuItem>
                            <DropdownMenuItem>Déconnecter</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
