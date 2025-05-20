// src/app/store/walletStore.ts
import { create } from "zustand";

interface WalletState {
  isConnected: boolean;
  balance: number;
  address: string;
  connectWallet: () => void;
  send: (amount: number) => boolean;
  receive: (amount: number) => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  isConnected: false,
  balance: 2000, // saldo inicial simulado
  address: "SP3FBR2AGK7T8EZSKYQ18GHN0J9EZ57F6WJZ2H8Z1", // dirección mock
  connectWallet: () => set({ isConnected: true }),
  send: (amount) => {
    const current = get().balance;
    if (amount <= current) {
      set({ balance: current - amount });
      return true;
    }
    return false;
  },
  receive: (amount) => {
    const current = get().balance;
    set({ balance: current + amount });
  },
}));
