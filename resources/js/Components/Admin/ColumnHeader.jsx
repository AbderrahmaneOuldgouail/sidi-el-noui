import { useTrans } from "@/Hooks/useTrans";
import React from "react";

export default function ColumnHeader({ title }) {
    return <div className="rtl:text-right"> {useTrans(title)} </div>;
}
