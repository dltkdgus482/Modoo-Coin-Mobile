// Types
interface CryptoDataProps {
  market: string;
  timestamp: number;
  trade_price: number;
}

// Libraries
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Hooks
import { useUpbitTradeSocket } from './hooks/tradeHooks';

// Other Components
import TradeContainer from './components/trade/TradeContainer';
import HomeContainer from './components/home/HomeContainer';
import PurchaseContainer from './components/purchase/PurchaseContainer';
import NameModal from './components/Modal/NameModal';

// Store
import useUserStore from './store/user';

function App() {
  const [inputName, setInputName] = useState<string>('');
  const trade = useUpbitTradeSocket('KRW-BTC');
  const [data, setData] = useState<CryptoDataProps[]>([]);
  const { username } = useUserStore();

  useEffect(() => {
    if (!trade) return;

    const newPoint: CryptoDataProps = {
      market: trade.code,
      timestamp: trade.timestamp,
      trade_price: trade.trade_price,
    };

    setData((prev) => {
      if (
        prev.length > 0 &&
        prev[prev.length - 1].timestamp === newPoint.timestamp
      ) {
        return prev;
      }

      const updated = [...prev, newPoint];
      return updated.length > 60 ? updated.slice(updated.length - 60) : updated;
    });
  }, [trade]);

  return (
    <BrowserRouter>
      {username === '' && (
        <NameModal inputName={inputName} setInputName={setInputName} />
      )}
      <Routes>
        <Route path="/" element={<HomeContainer data={data} />} />
        <Route
          path="/trade"
          element={<TradeContainer data={data} setData={setData} />}
        />
        <Route path="/purchase" element={<PurchaseContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
