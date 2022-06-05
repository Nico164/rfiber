import create from "zustand";
import { persist } from "zustand/middleware"

export const useTestimonyData = create(persist((set) => ({
    testimony: [],
    addTestimony: (data) => {
        set((state) => ({
            testimony: [...state.testimony, data],
        }))
    }
})),
{
    name: "testimony",
    getStorage: () => sessionStorage,
});

