import { create } from "zustand";

export interface Business {
  id: number;
  name: string;
  type: "physical" | "digital";
  category: string;
  location?: [number, number]; // Lat, Long solo para físicos
  description: string;
  acceptsBitcoin: boolean;
  website?: string;
}

interface MarketState {
  businesses: Business[];
  currentTab: "physical" | "digital";
  setTab: (tab: "physical" | "digital") => void;
  addBusiness: (business: Business) => void;
}

export const useMarketStore = create<MarketState>((set) => ({
  businesses: [],
  currentTab: "physical",
  setTab: (tab) => set({ currentTab: tab }),
  addBusiness: (business) =>
    set((state) => ({
      businesses: [...state.businesses, business],
    })),
}));
