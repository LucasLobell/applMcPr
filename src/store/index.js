import { create } from "zustand";

const useMacbookStore = create((set) => ({
  color: "#2e2c2e2",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: "#2e2c2e2", scale: 0.08 }),
}));

export default useMacbookStore;
