import { useTrans } from "@/Hooks/useTrans";
import { usePage } from "@inertiajs/react";
import {
    Users,
    HandPlatter,
    BookmarkCheck,
    LayoutGrid,
    Hotel,
    Archive,
    ReceiptText,
    Megaphone,
    TicketMinus,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// permissions.booking.viewAny && {
//     href: "bookings.calendar",
//     label: "Calendréier",
//     active: pathname == "bookings.calendar",
//     icon: CalendarDays,
//     submenus: [],
// },

export function getMenuList(pathname) {
    const { t } = useTranslation("translation", {
        keyPrefix: "layout.sideBar",
    });
    const permissions = usePage().props.auth.permissions;
    const roomsPathnames = [
        "rooms.index",
        "rooms.create",
        "features.index",
        "rooms.edit",
        "rooms.show",
    ];
    const servicesPathnames = [
        "services.index",
        "services.show",
        "services.create",
        "services.edit",
        "consumptions.index",
    ];
    const promoPathnames = [
        "promotions.index",
        "promotions.create",
        "promotions.edit",
    ];
    const usersPathnames = [
        "roles.index",
        "roles.create",
        "roles.edit",
        "users.index",
        "users.create",
        "users.edit",
    ];
    const rolesPathnames = ["roles.index", "roles.create", "roles.edit"];
    const userPathnames = ["users.index", "users.create", "users.edit"];
    const facturePathnames = ["factures.index", "factures.show"];
    const eventPathnames = ["events.index", "events.create", "events.edit"];

    const propritaireGroup = {
        groupLabel: t("owner"),
        menus: [
            (permissions.room.viewAny ||
                permissions.room.update ||
                permissions.room.create) && {
                href: "rooms.index",
                label: t("rooms"),
                active: roomsPathnames.includes(pathname),
                icon: Hotel,
                submenus: [
                    {
                        href: "rooms.index",
                        label: t("allRooms"),
                        active: pathname === "rooms.index",
                    },
                    {
                        href: "features.index",
                        label: t("features"),
                        active: pathname === "features.index",
                    },
                ],
            },
            (permissions.service.viewAny ||
                permissions.service.update ||
                permissions.service.delete ||
                permissions.service.create) && {
                href: "services.index",
                label: t("services"),
                active: servicesPathnames.includes(pathname),
                icon: HandPlatter,
                submenus: [
                    {
                        href: "services.index",
                        label: t("allServices"),
                        active: pathname === "services.index",
                    },
                    {
                        href: "consumptions.index",
                        label: t("consumption"),
                        active: pathname === "consumptions.index",
                    },
                ],
            },
            (permissions.facture.viewAny ||
                permissions.facture.update ||
                permissions.facture.delete ||
                permissions.facture.create) && {
                href: "factures.index",
                label: t("bills"),
                active: facturePathnames.includes(pathname),
                icon: ReceiptText,
                submenus: [],
            },
            (permissions.event.viewAny ||
                permissions.event.update ||
                permissions.event.delete ||
                permissions.event.create) && {
                href: "events.index",
                label: t("events"),
                active: eventPathnames.includes(pathname),
                icon: Megaphone,
                submenus: [],
            },
            (permissions.promotion.viewAny ||
                permissions.promotion.update ||
                permissions.promotion.delete ||
                permissions.promotion.create) && {
                href: "promotions.index",
                label: t("promotions"),
                active: promoPathnames.includes(pathname),
                icon: TicketMinus,
                submenus: [],
            },
        ].filter(Boolean),
    };

    const managementGroup = {
        groupLabel: t("managment"),
        menus: [
            (permissions.employ.viewAny ||
                permissions.employ.update ||
                permissions.employ.delete ||
                permissions.employ.create ||
                permissions.role.viewAny ||
                permissions.role.update ||
                permissions.role.delete ||
                permissions.role.create) && {
                href: "roles.index",
                label: t("users"),
                active: usersPathnames.includes(pathname),
                icon: Users,
                submenus: [
                    (permissions.role.viewAny ||
                        permissions.role.update ||
                        permissions.role.delete ||
                        permissions.role.create) && {
                        href: "roles.index",
                        label: t("roles"),
                        active: rolesPathnames.includes(pathname),
                    },
                    (permissions.employ.viewAny ||
                        permissions.employ.update ||
                        permissions.employ.delete ||
                        permissions.employ.create) && {
                        href: "users.index",
                        label: t("employs"),
                        active: userPathnames.includes(pathname),
                    },
                ],
            },
        ].filter(Boolean),
    };

    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "admin.dashboard",
                    label: t("dashboard"),
                    active: pathname === "admin.dashboard",
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        (permissions.booking.viewAny ||
            permissions.booking.update ||
            permissions.booking.create) && {
            groupLabel: t("bookingsGroupe"),
            menus: [
                permissions.booking.viewAny && {
                    href: "bookings.index",
                    label: t("bookings"),
                    active: pathname == "bookings.index",
                    icon: BookmarkCheck,
                    submenus: [],
                },
                permissions.booking.viewAny && {
                    href: "bookings.historique",
                    label: t("historical"),
                    active: pathname == "bookings.historique",
                    icon: Archive,
                    submenus: [],
                },
            ],
        },
        propritaireGroup.menus.length > 0 && propritaireGroup,
        managementGroup.menus.length > 0 && managementGroup,
    ].filter(Boolean);
}
