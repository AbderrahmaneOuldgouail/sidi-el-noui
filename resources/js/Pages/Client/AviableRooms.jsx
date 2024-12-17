import React, { useState } from "react";
import ClientLayout from "@/Layouts/ClientLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import UserDataForm from "@/Components/Client/AviableRooms/UserDataForm";
import RoomsServces from "@/Components/Client/AviableRooms/RoomsServces";
import BookingsCard from "@/Components/Client/AviableRooms/BookingsCard";
import { useTranslation } from "react-i18next";

export default function AviableRooms({
    rooms,
    booking_data,
    services,
    promotion,
}) {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [total, setTotal] = useState(0);
    const [beedsNumber, setBeedsNumber] = useState(0);
    const [final, setFinal] = useState(false);
    const user = usePage().props.auth.user;
    const { data, setData, post, errors, processing } = useForm({
        rooms: [],
        consomation: [],
        check_in: booking_data.check_in,
        check_out: booking_data.check_out,
        guest_number: booking_data.guest_number,
        kids_number: booking_data.kids_number,
        first_name: user ? user.first_name : "",
        last_name: user ? user.last_name : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        promo_value: promotion ? promotion.promo_value : null,
    });

    const { t } = useTranslation("translation", {
        keyPrefix: "client.aviableRooms",
    });

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
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content={t("metaDescreption")} />
            </Head>

            <div className="font-bold text-xl m-6 ">{t("pageHeader")}</div>
            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-1/2 h-1/2 left-[0]  top-[10]  translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] min-w-1/2 w-[37rem] h-[27rem] left-[calc(60%-28.5rem)] top-[50%] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] min-w-1/2 w-[37rem] h-[37rem] left-[0]  top-[50%] translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>

            {final ? (
                <UserDataForm
                    booking_data={booking_data}
                    selectedRooms={selectedRooms}
                    setFinal={setFinal}
                    handleSetData={handleSetData}
                    errors={errors}
                    data={data}
                    submit={submit}
                    total={total}
                    promotion={promotion}
                    processing={processing}
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
                        promotion={promotion}
                    />

                    <BookingsCard
                        setFinal={setFinal}
                        booking_data={booking_data}
                        data={data}
                        setData={setData}
                        total={total}
                        setTotal={setTotal}
                        beedsNumber={beedsNumber}
                        setBeedsNumber={setBeedsNumber}
                        selectedRooms={selectedRooms}
                        setSelectedRooms={setSelectedRooms}
                        promotion={promotion}
                    />
                </div>
            )}
        </ClientLayout>
    );
}
