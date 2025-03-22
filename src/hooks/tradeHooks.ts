import { useEffect, useState, useRef } from 'react';

interface TradeData {
  type: string;
  market: string;
  trade_price: number;
  timestamp: number;
}

export const useUpbitTradeSocket = (market: string) => {
  const [tradeData, setTradeData] = useState<TradeData | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://api.upbit.com/websocket/v1');
    socketRef.current = ws;

    ws.onopen = () => {
      const subscribeMessage = JSON.stringify([
        { ticket: 'unique_ticket' },
        {
          type: 'ticker',
          codes: [market],
        },
      ]);
      ws.send(subscribeMessage);
    };

    ws.onmessage = (event) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result as string);
          setTradeData(parsed);
        } catch (e) {
          console.error('WebSocket parse error:', e);
        }
      };
      reader.readAsText(event.data);
    };

    ws.onerror = (e) => {
      console.error('WebSocket error:', e);
    };

    return () => {
      ws.close();
    };
  }, [market]);

  return tradeData;
};
