import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./lib/locale/ar.json";
import fr from "./lib/locale/fr.json";

const resources = {
    fr: {
        translation: fr,
    },
    ar: {
        translation: ar,
    },
};
export const initI18n = (initialLang) => {
    if (!i18n.isInitialized) {
        i18n.use(initReactI18next).init({
            resources,
            lng: initialLang,
            fallbackLng: "ar",
            interpolation: {
                escapeValue: false,
            },
        });
    }
    return i18n;
};

export default i18n;
