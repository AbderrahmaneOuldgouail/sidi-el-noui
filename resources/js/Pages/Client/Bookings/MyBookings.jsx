import { DataTable } from "@/Components/Admin/DataTable";
import { mybookingscolumns } from "@/Components/Client/Bookings/mybookingscolumns";
import PageHeading from "@/Components/ui/PageHeading";
import ClientLayout from "@/Layouts/ClientLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function MyBookings({ bookings }) {
    const {t} = useTranslation("translation" , {keyPrefix: "client.myBookings"})
    return (
        <ClientLayout>
            <Head>
                <title>{t("title")}</title>
                <meta
                    name="description"
                    content={t("metaDescreption")}
                />
            </Head>

            <div className="absolute z-[0] w-[20rem] h-[20rem] right-[10rem] top-[-5rem] sm:translate-x-28 translate-y-[22%] bg-[radial-gradient(circle,_rgba(108,_207,_250,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <div className="absolute z-[0] w-[47rem] h-[47rem] left-[calc(40%-20rem)] top-[30rem] sm:translate-x-[10%] translate-y-[-42%] bg-[radial-gradient(circle,_rgba(224,_136,_100,_0.3)_0,_hsla(0,_0%,_100%,_0)_70%,_hsla(0,_0%,_100%,_0)_100%)]"></div>
            <PageHeading
                title={t("title")}
                className="my-10 relative"
            />
            <div className="bg-card p-4 rounded-lg my-4 relative">
                <DataTable
                    columns={mybookingscolumns}
                    data={bookings.data}
                    paginate={bookings}
                    selection={false}
                />
            </div>
        </ClientLayout>
    );
}
