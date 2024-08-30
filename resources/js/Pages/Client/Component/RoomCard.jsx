import { Button } from "@/Components/ui/button";
import React from "react";
// import { FaWifi, FaTv, FaBed } from "react-icons/fa"; // Example icons

export default function RoomCard() {
    // Define the rooms array
    const rooms = [
        {
            id: 1,
            name: "Chambre Single",
            imageUrl:
                "https://www.hotelsbarriere.com/content/dam/hotels/visuels-site-national/suites/0121-47%281%29.jpg/jcr%3Acontent/renditions/cq5dam.web.1280.1280.jpeg",
            features: ["tv", "bed"],
            description:
                "Une chambre magnifique pour une seule personne avec un lit confortable et tous les services.",
        },
        {
            id: 2,
            name: "Chambre Standard",
            imageUrl:
                "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
            features: ["wifi", "bed", "tv"],
            description:
                "Une chambre confortable avec des équipements essentiels.",
        },
        {
            id: 3,
            name: "Chambre Standard",
            imageUrl:
                "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
            features: ["wifi", "bed"],
            description:
                "Une chambre confortable avec des équipements essentiels.",
        },
        {
            id: 4,
            name: "Chambre Standard",
            imageUrl:
                "https://static-otelico.com/cache/regina_berck/hotel_regina-berck_sur_mer-chambre_premium_1.jpg",
            features: ["wifi", "bed"],
            description:
                "Une chambre confortable avec des équipements essentiels.",
        },
    ];

    const handleClick = (roomId) => {
        // Navigate to the room detail page
        // Inertia.visit(`/rooms/${roomId}`);
    };

    return (
        <div className="flex flex-wrap gap-8  justify-between">
            {rooms.map((room) => (
                <div
                    key={room.id}
                    onClick={() => handleClick(room.id)}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer"
                >
                    <img
                        className="w-full h-48 object-cover"
                        src={room.imageUrl}
                        alt={room.name}
                    />
                    <div className="p-6 pb-16">
                        <h2 className="text-2xl font-semibold mb-2">
                            {room.name}
                        </h2>
                        {/* <div className="flex items-center space-x-4 mb-4">
                            {room.features.includes("wifi") && (
                                <FaWifi className="text-gray-600" />
                            )}
                            {room.features.includes("tv") && (
                                <FaTv className="text-gray-600" />
                            )}
                            {room.features.includes("bed") && (
                                <FaBed className="text-gray-600" />
                            )}
                        </div> */}
                        <p className="text-gray-700 text-base">
                            {room.description}
                        </p>
                    </div>
                    <Button className="absolute bottom-4 right-12 transform translate-x-1/2 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">
                        Réserver
                    </Button>
                </div>
            ))}
        </div>
    );
}
