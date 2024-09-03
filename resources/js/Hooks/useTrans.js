import translation from "../lib/trans.json";

export function useTrans(value, section='') {
    const locale = localStorage.getItem("locale") || "fr";
    return locale == "fr" ? value : translation[value];
}
