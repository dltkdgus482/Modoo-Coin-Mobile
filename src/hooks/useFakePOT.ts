// hooks/useFakePOT.ts
import { useEffect } from 'react';
import useCoinStore from '../store/coin';
import { generateFakePOT } from '../utils/generateFakeData';

export const useFakePOT = () => {
  const setCoinInfo = useCoinStore((state) => state.setCoinInfo);

  useEffect(() => {
    const interval = setInterval(() => {
      const fakePOT = generateFakePOT();
      setCoinInfo(fakePOT.code, fakePOT);
    }, 1000); // 매초 업데이트

    return () => clearInterval(interval);
  }, [setCoinInfo]);
};
