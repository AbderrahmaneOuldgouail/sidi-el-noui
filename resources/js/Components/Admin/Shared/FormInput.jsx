import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import LabelDescreption from "@/Components/LabelDescreption";
import { Input } from "@/Components/ui/input";
import { useTrans } from "@/Hooks/useTrans";
import React from "react";

export default function FormInput({
    label,
    label_descreption,
    type,
    error,
    data,
    setData,
    fieldName,
}) {
    return (
        <div className="md:flex my-4 w-full">
            {label_descreption && (
                <div className="w-full md:w-1/3 pb-2">
                    <InputLabel htmlFor={label} value={useTrans(label)} />
                    <LabelDescreption>
                        {useTrans(label_descreption)}
                    </LabelDescreption>
                </div>
            )}
            <div className="w-full bg-muted p-4 shadow">
                <InputLabel htmlFor={label} value={useTrans(label)} />
                <Input
                    className="mt-2 w-full bg-card"
                    type={type}
                    id={label}
                    value={data}
                    onChange={(e) => setData(fieldName, e.target.value)}
                />
                <InputError message={error} className="mt-2" />
            </div>
        </div>
    );
}
