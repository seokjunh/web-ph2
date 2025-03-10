import { create } from "zustand";

interface NavMenuStore {
  isOpenNavMenu: boolean;
  setIsOpenNavMenu: (value: boolean) => void;
}

const useNavMenuStore = create<NavMenuStore>((set) => ({
  isOpenNavMenu: false,
  setIsOpenNavMenu: (value) => set({ isOpenNavMenu: value }),
}));

export default useNavMenuStore;
