import React, { useState } from "react";

export default function ReservationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        arrivalDate: "",
        departureDate: "",
        numberOfPersons: 1,
        roomType: "Single Room",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="  w-5/6 mx-auto bg-gray-200 p-8 mt-8 rounded-lg shadow-lg">
            <h1 className=" sm:text-5xl text-2xl font-bold text-center text-secondary mb-8">
                Réservation
            </h1>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 w-auto "
            >
                {/* First Name */}
                <div>
                    <label
                        htmlFor="firstName"
                        className="block text-lg font-medium text-gray-700"
                    >
                        nom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label
                        htmlFor="lastName"
                        className="block text-lg font-medium text-gray-700"
                    >
                        prenom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Numéro de Téléphone
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Arrival Date */}
                <div>
                    <label
                        htmlFor="arrivalDate"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Date d'arrivée
                    </label>
                    <input
                        type="date"
                        id="arrivalDate"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Departure Date */}
                <div>
                    <label
                        htmlFor="departureDate"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Date de Départ
                    </label>
                    <input
                        type="date"
                        id="departureDate"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>

                {/* Room Type */}
                <div>
                    <label
                        htmlFor="roomType"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Type de Chambre
                    </label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                        <option>Single Room</option>
                        <option>Double Room</option>
                        <option>Triple Room</option>
                        <option>Suite</option>
                    </select>
                </div>
                {/* Number of Persons */}
                <div>
                    <label
                        htmlFor="numberOfPersons"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Nombre de Personnes
                    </label>
                    <input
                        type="number"
                        id="numberOfPersons"
                        name="numberOfPersons"
                        value={formData.numberOfPersons}
                        onChange={handleChange}
                        required
                        min="1"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                </div>


                {/* Reservation Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-secondary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
                    >
                        Réserver
                    </button>
                </div>
            </form>
        </div>
    );
}
