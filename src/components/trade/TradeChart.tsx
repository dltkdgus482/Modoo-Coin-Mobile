// Libraries
import styled from 'styled-components';
import { LineChart, Line, ResponsiveContainer, ReferenceDot } from 'recharts';

// DummyData
import { data } from '../../mocks/tradeDummyData';

// Other Components
import TradeChartOption from './TradeChartOption';

const TradeChart = () => {
  const maxDataPoint = data.reduce(
    (max, item) => (item.pv > max.pv ? item : max),
    data[0]
  );
  const minDataPoint = data.reduce(
    (min, item) => (item.pv < min.pv ? item : min),
    data[0]
  );

  const maxIndex = data.findIndex((item) => item === maxDataPoint);
  const minIndex = data.findIndex((item) => item === minDataPoint);

  return (
    <Container>
      <ResponsiveContainer width="90%" height="60%">
        <LineChart data={data} margin={{ top: 40 }}>
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#008485"
            strokeWidth={2}
            dot={false}
          />
          {/* 최고값 표시 */}
          <ReferenceDot
            x={maxIndex}
            y={maxDataPoint.pv}
            r={4}
            fill="#008485"
            label={{
              value: `최고 ${maxDataPoint.pv.toLocaleString()}`,
              position: 'top',
              fontSize: '1rem',
              fontWeight: 600,
              fill: '#E90061',
            }}
          />

          {/* 최저값 표시 */}
          <ReferenceDot
            x={minIndex}
            y={minDataPoint.pv}
            r={4}
            fill="#008485"
            label={{
              value: `최저 ${minDataPoint.pv.toLocaleString()}`,
              position: 'bottom',
              fontSize: '1rem',
              fontWeight: 600,
              fill: '#2C77EF',
            }}
          />
        </LineChart>
        <TradeChartOption />
      </ResponsiveContainer>
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
