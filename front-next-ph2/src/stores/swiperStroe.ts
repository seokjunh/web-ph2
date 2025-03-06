import { create } from "zustand";

interface SwiperStore {
  swiperIndex: number;
  setSwiperIndex: (index: number) => void;
}

const useSwiperStore = create<SwiperStore>((set) => ({
  swiperIndex: 0,
  setSwiperIndex: (index) => set({ swiperIndex: index }),
}));

export default useSwiperStore;
