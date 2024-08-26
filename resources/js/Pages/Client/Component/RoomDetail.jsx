import React from "react";
import { FaWifi, FaTv, FaBed } from "react-icons/fa"; // Example icons
import { Button } from "@/Components/ui/button";

export default function RoomDetail({ room }) {
    return (
        <div className="container mx-auto p-8">
            <img
                className="w-full h-96 object-cover rounded-lg shadow-md"
                src={room.imageUrl}
                alt={room.name}
            />
            <div className="flex flex-wrap space-x-4 my-6">
                {/* Slider of smaller images */}
                {room.sliderImages.map((image, index) => (
                    <img
                        key={index}
                        className="w-24 h-24 object-cover rounded-md shadow-sm"
                        src={image}
                        alt={`Slider ${index + 1}`}
                    />
                ))}
            </div>
            <h2 className="text-4xl font-semibold mb-4">{room.name}</h2>
            <div className="flex items-center space-x-4 mb-4">
                {room.features.includes("wifi") && (
                    <FaWifi className="text-gray-600" />
                )}
                {room.features.includes("tv") && (
                    <FaTv className="text-gray-600" />
                )}
                {room.features.includes("bed") && (
                    <FaBed className="text-gray-600" />
                )}
            </div>
            <p className="text-gray-700 text-lg mb-4">{room.description}</p>
            <p className="text-2xl font-bold mb-4">{`Price: ${room.price} €`}</p>
            <Button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">
                Reserver
            </Button>
        </div>
    );
}
