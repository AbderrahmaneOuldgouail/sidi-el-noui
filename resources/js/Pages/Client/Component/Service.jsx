import React from "react";
// import {  } from "@fortawesome/react-fontawesome";
// import { Bed } from "lucide-react";
import {
    Coffee,
    Utensils,
    Bed,
    Wifi,
    Tv,
    Bath,
    Armchair,
    Cigarette,
} from "lucide-react";
// import { FaMugHot } from "react-icons/fa";

export default function ServicesPage() {
    // Hotel services data
    const hotelServices = [
        {
            id: 1,
            name: "Cafétéria",
            description:
                "Profitez d'une large sélection de cafés et de pâtisseries dans notre cafétéria confortable.",
            imageUrl:
                "https://media-cdn.tripadvisor.com/media/photo-s/18/06/3e/ac/ambiance-vintage-dans.jpg",
            icon: <Coffee/>,
        },
        {
            id: 2,
            name: "Restaurant",
            description:
                "Découvrez une cuisine gastronomique avec une variété de plats du monde entier.",
            imageUrl:
                "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg",
            icon: <Utensils/>,
        },
    ];

    // Room services data (using FontAwesome icons)
    const roomServices = [
        { name: "WiFi Gratuit", icon: <Wifi /> },
        { name: "Télévision     ", icon: <Tv /> },
        { name: "Lits Confortables", icon: <Bed /> },
        { name: "Salle de Bain ", icon: <Bath /> },
        { name: "Coin Salon", icon: <Armchair /> },
        { name: " petit dejunie ", icon: <Coffee /> },
        { name: "chambre fumable", icon: <Cigarette /> },
        // Add more services as needed
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-5xl font-bold text-center mb-12 text-primary italic font-serif  mb-28">
                Nos Services
            </h1>

            {/* Hotel Services Section */}
            <div className="space-y-12 mb-16  ">
                {hotelServices.map((service) => (
                    <div
                        key={service.id}
                        className="flex flex-col md:flex-row items-center"
                    >
                        <img
                            src={service.imageUrl}
                            alt={service.name}
                            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
                        />
                        <div className="md:ml-8 mt-4 md:mt-0">
                            <h2 className="text-4xl font-semibold mb-16">
                                {service.name}
                            </h2>
                            <p className="text-gray-700 mt-4">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Room Services Section */}
            <div className="border-t border-gray-300 pt-8">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Services De Chambre
                </h2>
                <div className="flex flex-wrap justify-center space-x-6 text-blue-500">
                    {roomServices.map((service, index) => (
                        <div key={index} className="text-center mb-4">
                            <div
                                className="ml-8"
                            >
                                {service.icon}
                            </div>

                            {/* <FontAwesomeIcon
                                icon={service.icon}
                                className="text-3xl text-blue-500 mb-2"
                            /> */}
                            <p className="text-sm text-blue-500">
                                {service.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
