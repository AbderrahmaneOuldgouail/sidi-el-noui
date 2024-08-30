import { usePage } from "@inertiajs/react";
import {
    Users,
    CalendarDays,
    HandPlatter,
    BookmarkCheck,
    LayoutGrid,
    Hotel,
    Archive,
    ReceiptText,
    Megaphone,
    TicketMinus,
} from "lucide-react";

export function getMenuList(pathname) {
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
    return [
        {
            groupLabel: "",
            menus: [
                {
                    href: "admin.dashboard",
                    label: "Tableux de bord",
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
                // permissions.booking.viewAny && {
                //     href: "bookings.calendar",
                //     label: "Calendréier",
                //     active: pathname == "bookings.calendar",
                //     icon: CalendarDays,
                //     submenus: [],
                // },
                permissions.booking.viewAny && {
                    href: "bookings.index",
                    label: "Réservations",
                    active: pathname == "bookings.index",
                    icon: BookmarkCheck,
                    submenus: [],
                },
                permissions.booking.viewAny && {
                    href: "bookings.historique",
                    label: "Historique",
                    active: pathname == "bookings.historique",
                    icon: Archive,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "La propritaire",
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
                    icon: HandPlatter,
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
                (permissions.facture.viewAny ||
                    permissions.facture.update ||
                    permissions.facture.delete ||
                    permissions.facture.create) && {
                    href: "factures.index",
                    label: "Factures",
                    active: facturePathnames.includes(pathname),
                    icon: ReceiptText,
                    submenus: [],
                },
                (permissions.event.viewAny ||
                    permissions.event.update ||
                    permissions.event.delete ||
                    permissions.event.create) && {
                    href: "events.index",
                    label: "Evènements",
                    active: eventPathnames.includes(pathname),
                    icon: Megaphone,
                    submenus: [],
                },
                (permissions.promotion.viewAny ||
                    permissions.promotion.update ||
                    permissions.promotion.delete ||
                    permissions.promotion.create) && {
                    href: "promotions.index",
                    label: "Promotions",
                    active: promoPathnames.includes(pathname),
                    icon: TicketMinus,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "Managment",
            menus: [
                {
                    href: "roles.index",
                    label: "Utilisateurs",
                    active: usersPathnames.includes(pathname),
                    icon: Users,
                    submenus: [
                        (permissions.role.viewAny ||
                            permissions.role.update ||
                            permissions.role.delete ||
                            permissions.role.create) && {
                            href: "roles.index",
                            label: "Roles",
                            active: rolesPathnames.includes(pathname),
                        },
                        (permissions.employ.viewAny ||
                            permissions.employ.update ||
                            permissions.employ.delete ||
                            permissions.employ.create) && {
                            href: "users.index",
                            label: "Employés",
                            active: userPathnames.includes(pathname),
                        },
                    ],
                },
            ],
        },
    ];
}
