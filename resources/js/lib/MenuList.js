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
    const facturePathnames = ["factures.index"];
    const eventPathnames = ["events.index", "events.create", "events.edit"];
    const promoPathnames = ["promotions.index", "promotions.create", "promotions.edit"];
    const usersPathnames = [
        "roles.index",
        "roles.create",
        "roles.edit",
        "roles.show",
        "users.index",
    ];
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
        {
            groupLabel: "",
            menus: [
                {
                    href: "bookings.index",
                    label: "Calendréier",
                    active: pathname == "bookings.index",
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        {
            groupLabel: "",
            menus: [
                {
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
                        {
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
                {
                    href: "events.index",
                    label: "Evènements",
                    active: eventPathnames.includes(pathname),
                    icon: Tag,
                    submenus: [],
                },
                {
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
                        {
                            href: "roles.index",
                            label: "Roles",
                            active: pathname === "roles.index",
                        },
                        {
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
