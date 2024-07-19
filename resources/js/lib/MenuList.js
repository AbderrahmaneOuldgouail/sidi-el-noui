import {
    Tag,
    // Users,
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
            groupLabel: "Manage",
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
                            href: "rooms.create",
                            label: "Chambre Creation",
                            active: pathname === "rooms.create",
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
                    active: pathname == "services.index",
                    icon: Bookmark,
                    submenus: [],
                },
                {
                    href: "booking.index",
                    label: "Reservations",
                    active: pathname == "booking.index",
                    icon: Tag,
                    submenus: [],
                },
            ],
        },
        // {
        //     groupLabel: "Settings",
        //     menus: [
        //         {
        //             href: "/users",
        //             label: "Users",
        //             active: pathname.includes("/users"),
        //             icon: Users,
        //             submenus: [],
        //         },
        //         {
        //             href: "/account",
        //             label: "Account",
        //             active: pathname.includes("/account"),
        //             icon: Settings,
        //             submenus: [],
        //         },
        //     ],
        // },
    ];
}
