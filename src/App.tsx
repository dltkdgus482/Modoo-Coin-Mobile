// Types
interface CryptoDataProps {
  market: string;
  timestamp: number;
  trade_price: number;
}

// Libraries
import { useState, useEffect } from 'react';

// Hooks
import { useUpbitTradeSocket } from './hooks/tradeHooks';

// Other Components
import TradeContainer from './components/trade/TradeContainer';
import HomeContainer from './components/home/HomeContainer';
import PurchaseContainer from './components/purchase/PurchaseContainer';

function App() {
  // const trade = useUpbitTradeSocket('KRW-BTC');
  // const [data, setData] = useState<CryptoDataProps[]>([]);

  // useEffect(() => {
  //   if (!trade) return;

  //   const newPoint: CryptoDataProps = {
  //     market: trade.code,
  //     timestamp: trade.timestamp,
  //     trade_price: trade.trade_price,
  //   };

  //   setData((prev) => {
  //     if (
  //       prev.length > 0 &&
  //       prev[prev.length - 1].timestamp === newPoint.timestamp
  //     ) {
  //       return prev;
  //     }

  //     const updated = [...prev, newPoint];
  //     return updated.length > 60 ? updated.slice(updated.length - 60) : updated;
  //   });
  // }, [trade]);

  // return <TradeContainer data={data} setData={setData} />;
  // return <HomeContainer />;
  return <PurchaseContainer />;
}

export default App;
