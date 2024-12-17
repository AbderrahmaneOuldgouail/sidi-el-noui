import React from "react";
import FormInput from "@/Components/Admin/Shared/FormInput";
import { Separator } from "@/Components/ui/separator";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function UserDataForm({
    booking_data,
    selectedRooms,
    setFinal,
    errors,
    handleSetData,
    data,
    submit,
    total,
    promotion,
    processing,
}) {
    const auth = usePage().props.auth;
    const { t } = useTranslation("translation", {
        keyPrefix: "client.aviableRooms",
    });
    return (
        <div className="relative flex gap-2 m-6">
            <div className="w-1/3 flex flex-col gap-2">
                <Card>
                    <CardHeader className="font-bold p-2">
                        {t("detailsCard.header")}
                    </CardHeader>
                    <CardContent className="flex justify-between p-2">
                        <div>
                            <div>{t("detailsCard.checkIn")} </div>
                            <div className="font-bold">
                                {booking_data.check_in}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                12h00 - 23h00
                            </div>
                        </div>
                        <div>
                            <div>{t("detailsCard.checkOut")} </div>
                            <div className="font-bold">
                                {booking_data.check_out}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                07h00 - 12h00
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col items-start p-2">
                        <div>{t("detailsCard.time")} </div>
                        <div className="font-bold">
                            {(new Date(booking_data.check_out) -
                                new Date(booking_data.check_in)) /
                                (1000 * 60 * 60 * 24)}{" "}
                            {t("detailsCard.nights")}
                        </div>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="font-bold p-2">
                        {t("selectionCard.header")} {booking_data.guest_number}{" "}
                        {t("selectionCard.adult")}{" "}
                        {booking_data.kids_number && (
                            <>
                                {t("selectionCard.and")}{" "}
                                {booking_data.kids_number}{" "}
                                {t("selectionCard.babays")} :{" "}
                            </>
                        )}{" "}
                    </CardHeader>
                    <CardContent className="p-2">
                        {selectedRooms.map((room) => (
                            <div
                                key={room.room_number}
                                className="shadow rounded-lg py-1 px-2 mb-1 flex justify-between"
                            >
                                <div>
                                    {t("selectionCard.rooms")}{" "}
                                    {room.type.type_designation}{" "}
                                </div>
                                <div className="font-bold text-primary">
                                    {room.room_price} {t("da")} x{" "}
                                    {(new Date(booking_data.check_out) -
                                        new Date(booking_data.check_in)) /
                                        (1000 * 60 * 60 * 24)}{" "}
                                    {t("selectionCard.nights")}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="justify-center p-2">
                        <Button variant="link" onClick={() => setFinal(false)}>
                            {t("selectionCard.btn")}
                        </Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader className="p-2 font-bold">
                        {t("pricingCard.header")}
                    </CardHeader>
                    <CardContent className="p-2 text-3xl font-bold text-primary">
                        {promotion ? (
                            <div className="text-xl line-through">
                                {" "}
                                {total +
                                    (promotion.promo_value *
                                        selectedRooms.length *
                                        (new Date(booking_data.check_out) -
                                            new Date(booking_data.check_in))) /
                                        (1000 * 60 * 60 * 24)}{" "}
                                {t("da")}{" "}
                            </div>
                        ) : null}
                        {total} {t("da")}
                    </CardContent>
                    <CardFooter className="p-2 text-muted-foreground">
                        {t("pricingCard.footer")}
                    </CardFooter>
                </Card>
            </div>
            <div className="w-2/3 h-fit bg-card p-2 pb-6 rounded-lg">
                <form onSubmit={submit}>
                    <div className="flex gap-2 w-full">
                        <FormInput
                            label={t("form.lastName")}
                            error={errors.first_name}
                            type="text"
                            data={data.first_name}
                            setData={handleSetData}
                            fieldName="first_name"
                            disabled={auth.user != null}
                        />
                        <FormInput
                            label={t("form.firstName")}
                            error={errors.last_name}
                            type="text"
                            data={data.last_name}
                            setData={handleSetData}
                            fieldName="last_name"
                            disabled={auth.user != null}
                        />
                    </div>
                    <Separator />
                    <FormInput
                        label={t("form.email")}
                        error={errors.email}
                        type="email"
                        data={data.email}
                        setData={handleSetData}
                        fieldName="email"
                        disabled={auth.user != null}
                    />
                    <Separator />
                    <FormInput
                        label={t("form.phone")}
                        error={errors.phone}
                        type="phone"
                        data={data.phone}
                        setData={handleSetData}
                        fieldName="phone"
                        disabled={auth.user != null}
                    />
                    <div className="flex justify-end">
                        <Button
                            variant="secondary"
                            className="w-1/4"
                            disabled={processing}
                        >
                            {t("form.submit")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
