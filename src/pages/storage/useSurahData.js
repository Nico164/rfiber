import create from "zustand";
import { persist } from "zustand/middleware"
import axios from "axios";

export const useSurahData = create(persist((set) => ({
    surah: [],
    isLoading: false,
    isError: false,
    fetchSurah: async (data) => {
        try {
            const { data } = await axios.get('http://api.alquran.cloud/v1/surah')
            set(() => ({
                surah: data.data,
            }));
        } catch (error) {
            set(() => ({
                isError: true
            }))
        } finally {
            set(() => ({
                isLoading: false,
            }));
        }

    }
})),
    {
        name: "surah",
        getStorage: () => sessionStorage,
    });

