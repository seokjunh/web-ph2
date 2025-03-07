import { create } from "zustand";

interface NavMenuStore {
  isOpenNavMenu: boolean;
  isHoverNavMenu: boolean;
  setIsOpenNavMenu: (value: boolean) => void;
  setIsHoverNavMenu: (value: boolean) => void;
}

const useNavMenuStore = create<NavMenuStore>((set) => ({
  isOpenNavMenu: false,
  isHoverNavMenu: false,
  setIsOpenNavMenu: (value) => set({ isOpenNavMenu: value }),
  setIsHoverNavMenu: (value) => set({ isHoverNavMenu: value }),
}));

export default useNavMenuStore;
