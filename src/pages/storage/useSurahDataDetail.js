import create from "zustand";
import axios from "axios";

export const useSurahDetail = create((set) => ({
    ayahs: {},
    isLoading: false,
    isError: false,
    fetchSurahDetail: async (id) => {
        set(()=> ({
            isLoading: true,
        }));
        try {
            const { data } = await axios.get('http://api.alquran.cloud/v1/surah/' + id)
            set(() => ({
                ayahs: data.data,
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
}))
