import { Scheduler } from "@bitnoi.se/react-scheduler";
import "@bitnoi.se/react-scheduler/dist/style.css";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useCallback, useMemo, useState } from "react";
import { Drawer } from "vaul";

dayjs.extend(isBetween);

export default function Calender({ rooms }) {
    const [open, setOpen] = useState(false);
    const [drawerData, setDrawerData] = useState();
    const [range, setRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
    });

    const handleTileclick = (data) => {
        setDrawerData(data);
        setOpen(true);
    };
    const handleItemClick = (data) => {
        console.log(data.label.title);
    };

    const transformedRooms = rooms.map((room) => ({
        id: room.room_number,
        label: {
            icon: room.assets[0]?.url,
            title: `Chambres N° ${room.room_number}`,
            subtitle: room.type.type_designation,
        },
        data: room.bookings.map((booking) => ({
            id: booking.booking_id,
            startDate: new Date(booking.check_in),
            endDate: new Date(booking.check_out),
            title: booking.user_id,
            subtitle: booking.guest_number,
        })),
    }));

    const filterData = useMemo(
        () =>
            transformedRooms.map((room) => ({
                ...room,
                data: room.data.filter(
                    (booking) =>
                        dayjs(booking.startDate).isBetween(
                            range.startDate,
                            range.endDate
                        ) ||
                        dayjs(booking.endDate).isBetween(
                            range.startDate,
                            range.endDate
                        ) ||
                        (dayjs(booking.startDate).isBefore(
                            range.startDate,
                            "day"
                        ) &&
                            dayjs(booking.endDate).isAfter(
                                range.endDate,
                                "day"
                            ))
                ),
            })),
        [range.endDate, range.startDate]
    );

    const handelRangeChange = useCallback((range) => {
        setRange(range);
    }, []);

    const langs = [
        {
            id: "fr",
            lang: {
                feelingEmpty: "je me sens vide...",
                free: "Libre",
                loadNext: "Suivant",
                loadPrevious: "Précédent",
                over: "sur",
                taken: "Prise",
                topbar: {
                    filters: "Filters",
                    next: "Suivant",
                    prev: "Précédent",
                    today: "Aujourd'hui",
                    view: "Voir",
                },
                search: "rechercher",
                week: "Semaine",
            },
            translateCode: "fr-FR",
        },
    ];

    return (
        <section>
            <Drawer.Root open={open} onOpenChange={setOpen} direction="right">
                <Drawer.Trigger>Open</Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0  z-[600] bg-black/40" />
                    <Drawer.Content className="bg-muted  z-[6000] flex flex-col rounded h-full w-2/3 mt-24 fixed bottom-0 right-0">
                        <Drawer.Handle />
                        <div className="p-10">
                            <pre>{JSON.stringify(drawerData, null, 2)}</pre>
                        </div>
                    </Drawer.Content>
                    <Drawer.Overlay />
                </Drawer.Portal>
            </Drawer.Root>

            <Scheduler
                data={filterData}
                isLoading={false}
                onRangeChange={handelRangeChange}
                onTileClick={handleTileclick}
                onItemClick={handleItemClick}
                config={{
                    zoom: 1,
                    filterButtonState: -1,
                    maxRecordsPerPage: 10,
                    includeTakenHoursOnWeekendsInDayView: true,
                    showTooltip: false,
                    lang: "fr",
                    translations: langs,
                }}
            />
        </section>
    );
}
