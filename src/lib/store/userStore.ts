// stores/userStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TUserProfile } from "@/types/dashboard/dashboardType";

type UserStore = {
    userData: TUserProfile | null;
    setUserData: (data: TUserProfile) => void;
    resetUserData: () => void;
};

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            userData: null,
            setUserData: (data) => set({ userData: data }),
            resetUserData: () => set({ userData: null }),
        }),
        {
            name: "user-storage",
            partialize: (state) => ({ userData: state.userData }),
        }
    )
);
