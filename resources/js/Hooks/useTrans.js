import { usePage } from "@inertiajs/react";

export function useTrans(value) {
    const array = usePage().props.translations;
    const locale = usePage().props.locale;

    return locale == "fr" ? value : array[value];
}
