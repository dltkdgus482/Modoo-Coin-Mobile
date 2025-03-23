// App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import TradeContainer from './components/trade/TradeContainer';
import HomeContainer from './components/home/HomeContainer';
import PurchaseContainer from './components/purchase/PurchaseContainer';
import NameModal from './components/Modal/NameModal';

// Hooks & Stores
import { useUpbitTradeSocket } from './hooks/tradeHooks';
import useUserStore from './store/user';
import useCoinStore from './store/coin';

// Constants
import { coinArray } from './mocks/constants';

function App() {
  const { username } = useUserStore();
  const { setCoinInfo } = useCoinStore();
  const [inputName, setInputName] = useState<string>('');

  // 초기 coin 상태 설정
  useEffect(() => {
    coinArray.forEach((coin) => {
      setCoinInfo(coin, {
        code: coin,
        change: 'RISE',
        change_price: 0,
        trade_price: 0,
        opening_price: 0,
        change_rate: 0.0,
      });
    });
  }, []);

  const tradeData = useUpbitTradeSocket(coinArray);

  useEffect(() => {
    if (!tradeData || !tradeData.code) return;

    setCoinInfo(tradeData.code, tradeData);
  }, [tradeData]);

  return (
    <BrowserRouter>
      {username === '' && (
        <NameModal inputName={inputName} setInputName={setInputName} />
      )}
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/trade/:coinName" element={<TradeContainer />} />
        <Route path="/purchase/:coinName/:orderType" element={<PurchaseContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
