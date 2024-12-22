import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useThemeStore = create(
    persist(
        (set, get) => ({
            theme: "light",
            setTheme: () => {
                set({ theme: get().theme == "light" ? "dark" : "light" });
            },
        }),
        {
            name: "theme",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
