import { useEffect, useState } from 'react';
import { useUpbitTradeSocket } from './tradeHooks';
import { generateFakeData } from '../utils/coinGenerateUtils';

export const useMergedTradeData = (markets: string[]) => {
  const realTradeData = useUpbitTradeSocket(markets);
  const [mergedData, setMergedData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (realTradeData) {
      const {
        code,
        change_price,
        change_rate,
        change,
        trade_price,
        opening_price,
      } = realTradeData;

      const coinInfo: any = {
        code,
        change_price,
        change_rate,
        change,
        trade_price,
        opening_price,
      };

      setMergedData((prev) => ({
        ...prev,
        [code]: coinInfo,
      }));
    }
  }, [realTradeData]);

  useEffect(() => {
    const interval = setInterval(() => {
      const fakeData = generateFakeData();
      setMergedData((prev) => ({
        ...prev,
        ...fakeData,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return mergedData;
};
