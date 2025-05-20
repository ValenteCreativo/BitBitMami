import { create } from "zustand";

type Box = {
  name: string;
  amount: number;
  saved: number;
};

interface SavingsState {
  totalAmount: number;
  savingsBoxes: Box[];
  setTotalAmount: (amount: number) => void;
  addBox: (box: Box) => void;
  removeBox: (name: string) => void;
  updateBox: (name: string, saved: number) => void;
}

export const useSavingsStore = create<SavingsState>((set) => ({
  totalAmount: 500_000,
  savingsBoxes: [],
  setTotalAmount: (amount) => set({ totalAmount: amount }),
  addBox: (box) =>
    set((state) => ({
      savingsBoxes: [...state.savingsBoxes, box],
    })),
  removeBox: (name) =>
    set((state) => ({
      savingsBoxes: state.savingsBoxes.filter((box) => box.name !== name),
    })),
  updateBox: (name, saved) =>
    set((state) => ({
      savingsBoxes: state.savingsBoxes.map((box) =>
        box.name === name ? { ...box, saved } : box
      ),
    })),
}));
