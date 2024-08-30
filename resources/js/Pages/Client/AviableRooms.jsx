import React, { useState } from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import { useForm, usePage } from "@inertiajs/react";
import UserDataForm from "@/Components/Client/AviableRooms/UserDataForm";
import RoomsServces from "@/Components/Client/AviableRooms/RoomsServces";
import BookingsCard from "@/Components/Client/AviableRooms/BookingsCard";

export default function AviableRooms({ rooms, booking_data, services }) {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [total, setTotal] = useState(0);
    const [beedsNumber, setBeedsNumber] = useState(0);
    const [final, setFinal] = useState(false);
    const { data, setData, post, errors } = useForm({
        rooms: [],
        consomation: [],
        check_in: booking_data.check_in,
        check_out: booking_data.check_out,
        guest_number: booking_data.guest_number,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    const props = usePage().props;
    console.log(props);

    const handleSetData = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("client.store.bookings"));
    };

    return (
        <ClientLayout>
            <div className="font-bold text-xl m-6 ">
                Finalisé votre réservation
            </div>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[57rem] h-[57rem] left-[calc(30%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            {!services && (
                <>
                    <div className="absolute z-[0] w-[37rem] h-[37rem] left-[calc(60%-28.5rem)] top-[50%] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
                    <div className="absolute z-[0] w-[37rem] h-[37rem] left-[calc(20%-28.5rem)] top-[0] translate-x-[-10%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
                </>
            )}

            {final ? (
                <UserDataForm
                    booking_data={booking_data}
                    selectedRooms={selectedRooms}
                    setFinal={setFinal}
                    handleSetData={handleSetData}
                    errors={errors}
                    data={data}
                    submit={submit}
                />
            ) : (
                <div className="relative flex gap-2 m-6">
                    <RoomsServces
                        rooms={rooms}
                        services={services}
                        booking_data={booking_data}
                        selectedRooms={selectedRooms}
                        setSelectedRooms={setSelectedRooms}
                        data={data}
                        setData={setData}
                        total={total}
                        setTotal={setTotal}
                        beedsNumber={beedsNumber}
                        setBeedsNumber={setBeedsNumber}
                    />

                    <BookingsCard
                        setFinal={setFinal}
                        data={data}
                        setData={setData}
                        total={total}
                        setTotal={setTotal}
                        beedsNumber={beedsNumber}
                        setBeedsNumber={setBeedsNumber}
                        selectedRooms={selectedRooms}
                        setSelectedRooms={setSelectedRooms}
                    />
                </div>
            )}
        </ClientLayout>
    );
}
