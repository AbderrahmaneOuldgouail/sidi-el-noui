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

// permissions.booking.viewAny && {
//     href: "bookings.calendar",
//     label: "Calendréier",
//     active: pathname == "bookings.calendar",
//     icon: CalendarDays,
//     submenus: [],
// },

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

    const propritaireGroup = {
        groupLabel: "La propritaire",
        menus: [
            (permissions.room.viewAny ||
                permissions.room.update ||
                permissions.room.create) && {
                href: "rooms.index",
                label: useTrans("Chambres"),
                active: roomsPathnames.includes(pathname),
                icon: Hotel,
                submenus: [
                    {
                        href: "rooms.index",
                        label: useTrans("Tous Les Chambre"),
                        active: pathname === "rooms.index",
                    },
                    {
                        href: "features.index",
                        label: useTrans("Caractéristiques"),
                        active: pathname === "features.index",
                    },
                ],
            },
            (permissions.service.viewAny ||
                permissions.service.update ||
                permissions.service.delete ||
                permissions.service.create) && {
                href: "services.index",
                label: useTrans("Services"),
                active: servicesPathnames.includes(pathname),
                icon: HandPlatter,
                submenus: [
                    {
                        href: "services.index",
                        label: useTrans("Tous Les Services"),
                        active: pathname === "services.index",
                    },
                    {
                        href: "consumptions.index",
                        label: useTrans("Consommations"),
                        active: pathname === "consumptions.index",
                    },
                ],
            },
            (permissions.facture.viewAny ||
                permissions.facture.update ||
                permissions.facture.delete ||
                permissions.facture.create) && {
                href: "factures.index",
                label: useTrans("Factures"),
                active: facturePathnames.includes(pathname),
                icon: ReceiptText,
                submenus: [],
            },
            (permissions.event.viewAny ||
                permissions.event.update ||
                permissions.event.delete ||
                permissions.event.create) && {
                href: "events.index",
                label: useTrans("Evènements"),
                active: eventPathnames.includes(pathname),
                icon: Megaphone,
                submenus: [],
            },
            (permissions.promotion.viewAny ||
                permissions.promotion.update ||
                permissions.promotion.delete ||
                permissions.promotion.create) && {
                href: "promotions.index",
                label: useTrans("Promotions"),
                active: promoPathnames.includes(pathname),
                icon: TicketMinus,
                submenus: [],
            },
        ].filter(Boolean),
    };

    const managementGroup = {
        groupLabel: useTrans("Management"),
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
                label: useTrans("Utilisateurs"),
                active: usersPathnames.includes(pathname),
                icon: Users,
                submenus: [
                    (permissions.role.viewAny ||
                        permissions.role.update ||
                        permissions.role.delete ||
                        permissions.role.create) && {
                        href: "roles.index",
                        label: useTrans("Rôles"),
                        active: rolesPathnames.includes(pathname),
                    },
                    (permissions.employ.viewAny ||
                        permissions.employ.update ||
                        permissions.employ.delete ||
                        permissions.employ.create) && {
                        href: "users.index",
                        label: useTrans("Employés"),
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
                    label: useTrans("Tableaux De Bord"),
                    active: pathname === "admin.dashboard",
                    icon: LayoutGrid,
                    submenus: [],
                },
            ],
        },
        (permissions.booking.viewAny ||
            permissions.booking.update ||
            permissions.booking.create) && {
            groupLabel: useTrans("Moteur de réservation"),
            menus: [
                permissions.booking.viewAny && {
                    href: "bookings.index",
                    label: useTrans("Réservations"),
                    active: pathname == "bookings.index",
                    icon: BookmarkCheck,
                    submenus: [],
                },
                permissions.booking.viewAny && {
                    href: "bookings.historique",
                    label: useTrans("Historique"),
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
