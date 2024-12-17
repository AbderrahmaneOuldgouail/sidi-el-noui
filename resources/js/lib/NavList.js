import { useTranslation } from "react-i18next";


export function getNavList(activeSection) {
    const{t} = useTranslation("translation", {keyPrefix: "client.navbar"})
    return [
        {
            label: t("home"),
            href: "#home-section",
            active: activeSection === "home-section",
        },
        {
            label: t("rooms"),
            href: "#rooms-section",
            active: activeSection === "rooms-section",
        },
        {
            label: t("services"),
            href: "#services-section",
            active: activeSection === "services-section",
        },
        {
            label: t("contactUs"),
            href: "#contact-section",
            active: activeSection === "contact-section",
        },
    ];
}
