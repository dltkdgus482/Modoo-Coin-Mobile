// hooks/tradeHooks.ts
import { useEffect, useRef, useState } from 'react';

interface TradeData {
  change_rate: number;
  opening_price: number;
  trade_price: number;
  code: string;
  change_price: number;
  change: string;
}

export const useUpbitTradeSocket = (markets: string[]) => {
  const [tradeData, setTradeData] = useState<TradeData | null>(null);
  const lastTradeRef = useRef<TradeData | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    socketRef.current = ws;

    ws.onopen = () => {
      const msg = JSON.stringify([
        { ticket: 'unique_ticket' },
        { type: 'ticker', codes: markets },
      ]);
      ws.send(msg);
    };

    ws.onmessage = (event) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed: TradeData = JSON.parse(reader.result as string);

          // 이전과 동일한 가격이면 업데이트 생략
          const last = lastTradeRef.current;
          if (
            last?.trade_price === parsed.trade_price &&
            last?.change_price === parsed.change_price
          ) {
            return;
          }

          lastTradeRef.current = parsed;
          setTradeData(parsed);
        } catch (e) {
          console.error('WebSocket parse error:', e);
        }
      };
      reader.readAsText(event.data);
    };

    ws.onerror = (e) => console.error('WebSocket error:', e);

    return () => ws.close();
  }, [markets]);

  return tradeData;
};
