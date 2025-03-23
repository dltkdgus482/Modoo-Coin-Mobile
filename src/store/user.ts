// Types
interface position {
  coinName: string;
  entryData: string;
  entryPrice: number;
  orderType: string;
  quantity: number;
}

interface tradeData {
  benefit: number;
  clearPrice: number;
  entryPrice: number;
  entryTime: string;
  clearTime: string;
  coinName: string;
  orderType: string;
}

interface UserState {
  username: string;
  setUsername: (inputName: string) => void;
  balance: number;
  setBalance: (balance: number) => void;
  positionArray: position[];
  setPositionArray: (positionArray: position[]) => void;
  tradeData: tradeData[];
  setTradeData: (tradeData: tradeData[]) => void;
}

// Libraries
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: '',
      setUsername: (e: string) => set({ username: e }),
      balance: 1000000000,
      setBalance: (e: number) => set({ balance: e }),
      positionArray: [],
      setPositionArray: (e: position[]) => set({ positionArray: e }),
      tradeData: [],
      setTradeData: (e: tradeData[]) => set({ tradeData: e }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
