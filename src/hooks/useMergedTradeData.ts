import { generateFakeData } from './../utils/coinGenerateUtils';
import { useEffect, useState } from 'react';
import { useUpbitTradeSocket } from './tradeHooks';

export const useMergedTradeData = (markets: string[]) => {
  const realTradeData = useUpbitTradeSocket(markets);
  const [mergedData, setMergedData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (realTradeData) {
      setMergedData((prev) => ({
        ...prev,
        [realTradeData.code]: realTradeData,
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
