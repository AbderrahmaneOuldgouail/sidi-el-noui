import { useTrans } from "@/Hooks/useTrans";

export function getNavList(activeSection) {
    return [
        {
            label: useTrans("Accueil"),
            href: "#home-section",
            active: activeSection === "home-section",
        },
        {
            label: useTrans("Nos Chambres"),
            href: "#rooms-section",
            active: activeSection === "rooms-section",
        },
        {
            label: useTrans("Services"),
            href: "#services-section",
            active: activeSection === "services-section",
        },
        {
            label: useTrans("contactez-nous"),
            href: "#contact-section",
            active: activeSection === "contact-section",
        },
    ];
}
