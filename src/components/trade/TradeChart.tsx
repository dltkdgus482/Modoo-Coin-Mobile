// Types
interface CryptoDataProps {
  market: string;
  timestamp: number;
  trade_price: number;
}

// Utils
import { getPastCryptoData } from '../../utils/tradeUtils';

// Libraries
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  ReferenceDot,
  XAxis,
  YAxis,
} from 'recharts';

// Contants
import { coinArray } from '../../mocks/constants';

// Other Components
import TradeChartOption from './TradeChartOption';

// Store
import { useMergedTradeData } from '../../hooks/useMergedTradeData.ts';

const TradeChart = () => {
  const { coinName } = useParams();
  const coinPrices = useMergedTradeData(coinArray);
  const [data, setData] = useState<CryptoDataProps[]>([]);
  const [type, setType] = useState<string>('seconds');
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [minDataPoint, setMinDataPoint] = useState<CryptoDataProps | null>(
    null
  );
  const [maxDataPoint, setMaxDataPoint] = useState<CryptoDataProps | null>(
    null
  );

  useEffect(() => {
<<<<<<< HEAD
    if (coinName !== 'KRW-POT') return;

    setData([
      ...data,
      {
        market: 'KRW-POT',
        timestamp: Date.now(),
        trade_price: coinPrices['KRW-POT']?.trade_price ?? 0,
      },
    ]);
  }, [coinPrices]);

  useEffect(() => {
    if (coinName === 'KRW-POT') return;

    const fetchData = async () => {
      const result = await getPastCryptoData({ type, coinName });
      setData(result);
    };

=======
    const fetchData = async () => {
      const result = await getPastCryptoData({ type, coinName });
      setData(result);
    };

>>>>>>> 8712fe7da65cee0fd651921522838035084b3ef0
    fetchData();
  }, [type]);

  useEffect(() => {
    if (data.length === 0) return;

    const max = data.reduce(
      (a, b) => (a.trade_price > b.trade_price ? a : b),
      data[0]
    );
    const min = data.reduce(
      (a, b) => (a.trade_price < b.trade_price ? a : b),
      data[0]
    );

    setMaxDataPoint(max);
    setMinDataPoint(min);
  }, [data]);

  if (data.length === 0) return <div>로딩 중 ...</div>;

  return (
    <Container>
      <ResponsiveContainer width="90%" height="60%">
        <LineChart
          data={data}
          margin={{ top: 20, left: 0, right: 0, bottom: 20 }}
        >
          <XAxis
            dataKey="timestamp"
            hide
            type="number"
            domain={['auto', 'auto']}
            scale="time" // 시간 기준 x축
          />
          <YAxis domain={['auto', 'auto']} hide />
          <Line
            type="monotone"
            dataKey="trade_price"
            stroke="#008485"
            strokeWidth={2}
            dot={false}
            isAnimationActive={isAnimated}
          />
          {maxDataPoint && (
            <ReferenceDot
              x={maxDataPoint.timestamp}
              y={maxDataPoint.trade_price}
              ifOverflow="visible"
              r={4}
              fill="#008485"
              label={{
                value: `최고 ${maxDataPoint.trade_price.toLocaleString()}`,
                position: 'top',
                fontSize: '0.8rem',
                fontWeight: 600,
                fill: '#E90061',
              }}
            />
          )}
          {minDataPoint && (
            <ReferenceDot
              x={minDataPoint.timestamp}
              y={minDataPoint.trade_price}
              ifOverflow="visible"
              r={4}
              fill="#008485"
              label={{
                value: `최저 ${minDataPoint.trade_price.toLocaleString()}`,
                position: 'bottom',
                fontSize: '0.8rem',
                fontWeight: 600,
                fill: '#2C77EF',
              }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      <TradeChartOption setType={setType} setIsAnimated={setIsAnimated} />
    </Container>
  );
};

export default TradeChart;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;
