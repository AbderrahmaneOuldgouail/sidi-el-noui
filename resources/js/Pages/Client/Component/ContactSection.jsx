import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Mimg from "./map.png"

export default function ContactSection() {
    return (
        <div className="text-black py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Contacter Nous
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Contact Information
                        </h3>
                        <ul>
                            <li className="flex items-center mb-4">
                                <FaMapMarkerAlt className="text-2xl mr-4" />
                                <span>
                                    Hotel sidi el noui cheraga ,alger,algerie
                                </span>
                            </li>
                            <li className="flex items-center mb-4">
                                <FaPhone className="text-2xl mr-4" />
                                <a href="tel:+2130772444444">
                                    +213 23 34 45 56
                                </a>
                            </li>
                            <li className="flex items-center mb-4">
                                <FaEnvelope className="text-2xl mr-4" />
                                <a href="mailto:sidielnoui@gmail.com">
                                    sidielnoui@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <div
                                className="w-full h-auto rounded-lg shadow-lg"
                                
                            > <a href="https://maps.app.goo.gl/Ac5ueppFgW4HCXvG7" target="blank"><img src={Mimg} alt="google maps" /></a></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            envoyer nous un message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="nom"
                                    className="w-full p-3 rounded-md bg-white text-gray-900"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-md bg-white text-gray-900"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="sujet"
                                className="w-full p-3 rounded-md bg-white text-gray-900"
                            />
                            <textarea
                                placeholder="Message"
                                rows="5"
                                className="w-full p-3 rounded-md bg-white text-gray-900"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 rounded-md text-lg font-semibold hover:bg-blue-900 transition duration-300 text-white"
                            >
                                Envoyer Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
