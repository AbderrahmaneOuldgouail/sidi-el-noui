import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "./assets/logo.png";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
    const navLinks = [
        { href: "client.index", label: "Accueil" },
        { href: "client.chambre.index", label: "Les Chambres" },
        { href: "client.service.index", label: "Services" },
        { href: "client.contact.index", label: "Contact" },
    ];

    return (
        <div className="bg-secondary text-primary px-4 md:px-20">
            <Head title="Hôtel SIDI EL NOUI" />

            <div className="container mx-auto py-8">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
                    <div className="flex flex-col items-center md:flex-row md:items-center md:w-auto m-auto mb-10 md:mb-0">
                        <a href="./" className="flex ">
                            <img
                                src={logo}
                                alt="Hôtel SIDI EL NOUI Logo"
                                className="h-16 w-16 mb-4 md:mb-0 md:mr-4"
                            />
                            <h1 className="text-2xl font-bold text-center md:text-left mt-4">
                                Hôtel SIDI EL NOUI
                            </h1>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left mt-8 space-y-8 md:space-y-0">
                    <div className="md:w-1/3">
                        <h2 className="text-xl font-bold">L'Hôtel</h2>
                        <hr className="w-32 mx-auto md:mx-0" />
                        <ul className="mt-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={route(link.href)}
                                        className="hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-xl font-bold">Contact</h6>
                        <hr className="w-32 mx-auto md:mx-0 mb-4" />
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="mr-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                            cheraga alger, Algerie
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="mr-3">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <a href="mailto:sidielnoui@gmail.com">
                                sidielnoui@gmail.com
                            </a>
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="mr-3">
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <a href="tel:+2130772444444">+213 23 34 45 56</a>
                        </p>
                    </div>

                    <div className="md:w-1/3">
                        <h2 className="text-xl font-bold">Social Media</h2>
                        <hr className="w-32 mx-auto md:mx-0" />
                        <div className="flex justify-center md:justify-start mt-4 space-x-8">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-800 "
                            >
                                <i className="">
                                    <Facebook />
                                </i>
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:text-pink-800"
                            >
                                <i className="fab fa-instagram">
                                    
                                    <Instagram />
                                </i>
                            </a>
                            <a
                                href="mailto:example@gmail.com"
                                className="text-white-600 hover:text-gray-800"
                            >
                                <i className="">
                                    <Mail />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black/5 p-6 text-center">
                <span>© 2024 Copyright: </span>
                <a className="font-semibold" href="https://sidielnouihotel.com">
                    SIDI EL NOUI
                </a>
            </div>
        </div>
    );
}
