import React, { useState } from "react";
import { Head } from "@inertiajs/react";

export default function Event() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);

    const events = [
        {
            id: 1,
            name: "Notre anniversiare hotel ",
            price: "4000DA",
            imageUrl:
                "https://media-cdn.tripadvisor.com/media/photo-s/1c/87/e9/c0/it-has-been-2-years-of.jpg",
            detailsLink: "#",
            description:
                "isjnclvabkvbnlshdbfanisubhvush ljsc vlkhaslhdkvakhscv bfvkuasbdfjaw vasvg asjdbakusbcausdvc awsgvajsbduckbsadvcasdgvkasdusd asudybuaysbcuasydv qweuasdbilawefcsdciaiwdhbqwiehfvssa dcisahcbawgfevwidsuc wefhsadouyerwef cbsbdyuwerbwyebdycsdy",
        },
        // Add more events as needed
    ];

    const openModal = (event) => {
        setCurrentEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentEvent(null);
    };

    return (
        <div>
            <div className="container mx-auto py-8">
                <h2 className="  text-5xl font-bold italic my-8 text-center text-primary font-serif mb-16" >
                    Nos Evenments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="relative h-96 w-full bg-cover bg-center rounded-lg shadow-lg"
                            style={{
                                backgroundImage: `url(${event.imageUrl})`,
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                            <div className="absolute top-4 right-4 text-secondary bg-primary p-4 rounded-md">
                                <h3 className="text-3xl font-semibold ">
                                    {event.price}
                                </h3>
                            </div>
                            <div className="absolute bottom-4 left-4 text-secondary  bg-primary p-2 rounded-md">
                                <h3 className="text-3xl font-semibold">
                                    {event.name}
                                </h3>
                            </div>
                            <div className="absolute bottom-4 right-4 text-white text-xl">
                                
                                <a
                                    href="#"
                                    onClick={() => openModal(event)}
                                    className="inline text-lg mt-2 underline mx-3"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-secondary p-6 rounded-lg mw-auto mx-auto shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            {currentEvent.name}
                        </h2>
                        <p className="text-xl text-primary mb-4">
                            {currentEvent.description}
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
                        >
                            ferme
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
