// Libraries
import styled from 'styled-components';
import { useEffect, useState } from 'react';

// Utils
import { getPastCryptoData } from '../../utils/tradeUtils';

// Other Components
import TradeInfo from './TradeInfo';
import TradeChart from './TradeChart';

const TradeMain = ({ data, setData }) => {
  const [latestData, setLatestData] = useState(data[data.length - 1]);
  const [openingPrice, setOpeningPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPastCryptoData({ type: 'days' });
      setOpeningPrice(result[result.length - 1].opening_price);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setLatestData(data[data.length - 1]);
  }, [data]);

  return (
    <Container>
      {latestData && openingPrice ? (
        <TradeInfo
          coinName={latestData.market}
          currentPrice={latestData.trade_price}
          changeSign={latestData.trade_price > openingPrice ? 1 : 0}
          changeRate={(
            (latestData.trade_price - openingPrice) /
            openingPrice
          ).toString()}
        />
      ) : null}
      <TradeChart data={data} setData={setData} />
    </Container>
  );
};

export default TradeMain;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
