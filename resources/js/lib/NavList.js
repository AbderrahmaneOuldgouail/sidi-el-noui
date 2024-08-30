export function getNavList(activeSection) {
    const current = route().current();
    return [
        {
            label: "Acceuil",
            href: "#home-section",
            active: activeSection === "home-section",
        },
        {
            label: "Nos Chambres",
            href: "#rooms-section",
            active: activeSection === "rooms-section",
        },
        {
            label: "Services",
            href: "#services-section",
            active: activeSection === "services-section",
        },
        {
            label: "Contact",
            href: "#contact-section",
            active: activeSection === "contact-section",
        },
    ];
}
