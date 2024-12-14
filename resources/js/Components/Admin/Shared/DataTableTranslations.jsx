import React from "react";
import { useTranslation } from "react-i18next";

export default function DataTableTranslations(text) {
    const { t } = useTranslation();
    return <div>{t(text)} </div>;
}
