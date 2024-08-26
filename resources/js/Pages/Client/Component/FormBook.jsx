import React, { useState } from "react";

export default function FormBook() {
    const [arrivalDate, setArrivalDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

    const handleIncrementAdults = () => {
        setRooms((prevRooms) =>
            prevRooms.map((room) => ({ ...room, adults: room.adults + 1 }))
        );
    };

    const handleDecrementAdults = () => {
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.adults > 0 ? { ...room, adults: room.adults - 1 } : room
            )
        );
    };

    const handleIncrementChildren = () => {
        setRooms((prevRooms) =>
            prevRooms.map((room) => ({ ...room, children: room.children + 1 }))
        );
    };

    const handleDecrementChildren = () => {
        setRooms((prevRooms) =>
            prevRooms.map((room) =>
                room.children > 0
                    ? { ...room, children: room.children - 1 }
                    : room
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            arrivalDate,
            departureDate,
            rooms,
        });
    };

    return (
        <div className="  absolute bottom-4 left-28   backdrop-blur-sm bg-white/70   w-5/6 p-4  mx-auto text-lg rounded-lg  b">
            <h1 className="font-bold text-secondary text-4xl flex justify-center  py-4 font-serif italic mb-4">
                Reserver maintente
            </h1>
            <form
                onSubmit={handleSubmit}
                className=" flex flex-row  items-start  text-secondary p-2"
            >
                {/* Arrival Date */}
                <div className="flex-1 mr-6 w-auto text-xxl ">
                    <label htmlFor="arrivalDate" className="block  font-medium">
                        Date D'arriver
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
                <div className="flex-1 w-auto">
                    <label
                        htmlFor="departureDate"
                        className="block  font-medium  "
                    >
                        Date De Departe
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

                {/* Adults and Children Counters */}
                <div className="flex-1 ">
                    <div className="flex items-center flex-row justify-around ">
                        <div className="flex-col">
                            <label className="">Adult(s):</label>
                            <div className="flex">
                                <button
                                    type="button"
                                    onClick={handleDecrementAdults}
                                    className="px-2 py-1  rounded-l"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={rooms[0].adults}
                                    readOnly
                                    className="w-12 text-center border border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={handleIncrementAdults}
                                    className="px-2 py-1  rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="flix-col">
                            <label className="">enfant(s):</label>
                            <div>
                                <button
                                    type="button"
                                    onClick={handleDecrementChildren}
                                    className="px-2 py-1  rounded-l"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={rooms[0].children}
                                    readOnly
                                    className="w-12 text-center border border-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={handleIncrementChildren}
                                    className="px-2 py-1  rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className="flex-1 min-w-[200px]">
                    <button
                        type="submit"
                        className="w-48 bg-blue-500 text-white py-2  rounded mt-6"
                    >
                        chercher
                    </button>
                </div>
            </form>
        </div>
    );
}
