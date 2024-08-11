import { usePage } from "@inertiajs/react";
import {
    Tag,
    Users,
    // Settings,
    Bookmark,
    SquarePen,
    LayoutGrid,
    Hotel,
} from "lucide-react";

export function getMenuList(pathname) {
    const permissions = usePage().props.auth.permissions;
    console.log(permissions);
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
        "roles.show",
        "users.index",
    ];
    const facturePathnames = ["factures.index"];
    const eventPathnames = ["events.index", "events.create", "events.edit"];
    const bookingPathnames = ["bookings.index", "bookings.historique"];
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "admin.dashboard",
                    label: "Dashboard",
                    active: pathname === "admin.dashboard",
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        (permissions.booking.viewAny ||
            permissions.booking.update ||
            permissions.booking.create) && {
            groupLabel: "Moteur de réservation",
            menus: [
                permissions.booking.viewAny && {
                    href: "bookings.calendar",
                    label: "Calendréier",
                    active: pathname == "bookings.calendar",
                    icon: Tag,
                    submenus: [],
                },
                permissions.booking.viewAny && {
                    href: "bookings.index",
                    label: "Réservations",
                    active: pathname == "bookings.index",
                    icon: Tag,
                    submenus: [],
                },
                permissions.booking.viewAny && {
                    href: "bookings.historique",
                    label: "Historique",
                    active: pathname == "bookings.historique",
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "",
            menus: [
                (permissions.room.viewAny ||
                    permissions.room.update ||
                    permissions.room.create) && {
                    href: "rooms.index",
                    label: "Chambres",
                    active: roomsPathnames.includes(pathname),
                    icon: Hotel,
                    submenus: [
                        {
                            href: "rooms.index",
                            label: "Tous Les Chambre",
                            active: pathname === "rooms.index",
                        },
                        {
                            href: "features.index",
                            label: "Equipement",
                            active: pathname === "features.index",
                        },
                    ],
                },
                {
                    href: "services.index",
                    label: "Services",
                    active: servicesPathnames.includes(pathname),
                    icon: Bookmark,
                    submenus: [
                        (permissions.service.viewAny ||
                            permissions.service.update ||
                            permissions.service.delete ||
                            permissions.service.create) && {
                            href: "services.index",
                            label: "Tous Les Services",
                            active: pathname === "services.index",
                        },
                        {
                            href: "consumptions.index",
                            label: "Service Consommations",
                            active: pathname === "consumptions.index",
                        },
                    ],
                },
                {
                    href: "factures.index",
                    label: "Factures",
                    active: facturePathnames.includes(pathname),
                    icon: Tag,
                    submenus: [
                        {
                            href: "factures.index",
                            label: "Factures",
                            active: pathname === "factures.index",
                        },
                    ],
                },
                (permissions.event.viewAny ||
                    permissions.event.update ||
                    permissions.event.delete ||
                    permissions.event.create) && {
                    href: "events.index",
                    label: "Evènements",
                    active: eventPathnames.includes(pathname),
                    icon: Tag,
                    submenus: [],
                },
                (permissions.promotion.viewAny ||
                    permissions.promotion.update ||
                    permissions.promotion.delete ||
                    permissions.promotion.create) && {
                    href: "promotions.index",
                    label: "Promotions",
                    active: promoPathnames.includes(pathname),
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Settings",
            menus: [
                {
                    href: "roles.index",
                    label: "Utilisateurs",
                    active: facturePathnames.includes(pathname),
                    icon: Users,
                    submenus: [
                        (permissions.role.viewAny ||
                            permissions.role.update ||
                            permissions.role.delete ||
                            permissions.role.create) && {
                            href: "roles.index",
                            label: "Roles",
                            active: pathname === "roles.index",
                        },
                        (permissions.employ.viewAny ||
                            permissions.employ.update ||
                            permissions.employ.delete ||
                            permissions.employ.create) && {
                            href: "users.index",
                            label: "Employés",
                            active: pathname === "users.index",
                        },
                    ],
                },
            ],
        },
    ];
}
