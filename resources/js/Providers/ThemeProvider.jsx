import { useEffect } from "react";
import { useThemeStore } from "@/Hooks/useThemeStore";
import { useStore } from "@/Hooks/useStore";

export function ThemeProvider({ children }) {
    const theme = useStore(useThemeStore, (state) => state);
    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove("light", "dark");
        root.classList.add(theme?.theme);
    }, [theme]);

    return <>{children}</>;
}
