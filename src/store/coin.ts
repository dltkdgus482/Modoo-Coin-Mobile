// store/coin.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CoinInfo {
  change_rate: number;
  opening_price: number;
  trade_price: number;
  code: string;
  change_price: number;
  change: string;
}

interface CoinPriceState {
  coinPrices: { [coinName: string]: CoinInfo };
  setCoinInfo: (coinName: string, info: Partial<CoinInfo>) => void;
}

const defaultCoinInfo = (code: string): CoinInfo => ({
  code,
  change_rate: 0,
  opening_price: 0,
  trade_price: 0,
  change_price: 0,
  change: '',
});

const useCoinStore = create<CoinPriceState>()(
  persist(
    (set, get) => ({
      coinPrices: {},

      setCoinInfo: (coinName, info) => {
        const prev = get().coinPrices[coinName] ?? defaultCoinInfo(coinName);
        const merged = { ...prev, ...info };

        if (JSON.stringify(prev) === JSON.stringify(merged)) return;

        set((state) => ({
          coinPrices: {
            ...state.coinPrices,
            [coinName]: merged,
          },
        }));
      },
    }),
    {
      name: 'coin-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCoinStore;
