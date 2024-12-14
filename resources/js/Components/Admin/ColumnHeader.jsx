import React from "react";
import { useTranslation } from "react-i18next";

export default function ColumnHeader({ title }) {
    const { t } = useTranslation("translation", {
        keyPrefix: "components.dataTable.viewOption",
    });
    return <div className="rtl:text-right"> {t(title)} </div>;
}
