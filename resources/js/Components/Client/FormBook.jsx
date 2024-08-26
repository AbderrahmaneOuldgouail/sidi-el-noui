import React, { useState } from "react";

function FormBook() {
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [occupation, setOccupation] = useState("");
    const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleIncrementAdults = (index) => {
        setRooms((prevRooms) =>
            prevRooms.map((room, i) =>
                i === index ? { ...room, adults: room.adults + 1 } : room
            )
        );
    };

    const handleDecrementAdults = (index) => {
        setRooms((prevRooms) =>
            prevRooms.map((room, i) =>
                i === index && room.adults > 0
                    ? { ...room, adults: room.adults - 1 }
                    : room
            )
        );
    };

    const handleIncrementChildren = (index) => {
        setRooms((prevRooms) =>
            prevRooms.map((room, i) =>
                i === index ? { ...room, children: room.children + 1 } : room
            )
        );
    };

    const handleDecrementChildren = (index) => {
        setRooms((prevRooms) =>
            prevRooms.map((room, i) =>
                i === index && room.children > 0
                    ? { ...room, children: room.children - 1 }
                    : room
            )
        );
    };

    const handleAddRoom = () => {
        setRooms([...rooms, { adults: 1, children: 0 }]);
    };

    const handleRemoveRoom = (index) => {
        if (rooms.length > 1) {
            setRooms(rooms.filter((_, i) => i !== index));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            arrivalDate,
            departureDate,
            occupation,
            rooms,
        });
    };

    return (
        <div className="bg-white p-4 max-w-7xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex flex-wrap items-start gap-4"
            >
                {/* Arrival Date */}
                <div className="flex-1 min-w-[200px]">
                    <label
                        htmlFor="arrivalDate"
                        className="block text-sm font-medium"
                    >
                        Arrival Date
                    </label>
                    <input
                        type="date"
                        id="arrivalDate"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Departure Date */}
                <div className="flex-1 min-w-[200px]">
                    <label
                        htmlFor="departureDate"
                        className="block text-sm font-medium"
                    >
                        Departure Date
                    </label>
                    <input
                        type="date"
                        id="departureDate"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Occupation Dropdown with Room Management */}
                <div className="relative flex-1 min-w-[200px]">
                    <label
                        htmlFor="occupation"
                        className="block text-sm font-medium"
                    >
                        Occupation
                    </label>
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full border border-gray-300 rounded-md py-2 px-4 bg-gray-100 text-left flex justify-between items-center"
                    >
                        {occupation || "Select an option"}
                        <span className="ml-2">
                            {isDropdownOpen ? "▲" : "▼"}
                        </span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                            <div className="p-4">
                                {rooms.map((room, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center mb-4"
                                    >
                                        <div className="flex-1 mr-4">
                                            <h3 className="text-lg font-semibold mb-2">
                                                Room {index + 1}
                                            </h3>
                                            <div className="flex items-center mb-2">
                                                <label className="mr-2">
                                                    Adults:
                                                </label>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDecrementAdults(
                                                            index
                                                        )
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded-l"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    value={room.adults}
                                                    readOnly
                                                    className="w-12 text-center border border-gray-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleIncrementAdults(
                                                            index
                                                        )
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded-r"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                <label className="mr-2">
                                                    Children:
                                                </label>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleDecrementChildren(
                                                            index
                                                        )
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded-l"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    value={room.children}
                                                    readOnly
                                                    className="w-12 text-center border border-gray-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleIncrementChildren(
                                                            index
                                                        )
                                                    }
                                                    className="px-2 py-1 bg-gray-200 rounded-r"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveRoom(index)
                                                }
                                                className="text-red-600 hover:underline"
                                            >
                                                Remove Room
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={handleAddRoom}
                                    className="w-full bg-blue-500 text-white py-2 rounded"
                                >
                                    Add Room
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Button */}
                <div className="flex-1 min-w-[200px]">
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded mt-4"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;
