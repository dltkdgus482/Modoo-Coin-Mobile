// Libraries
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Store
import { useMergedTradeData } from '../../hooks/useMergedTradeData.ts';

// Contants
import { coinArray } from '../../mocks/constants';

const TradeInfo = () => {
  const { coinName } = useParams<{ coinName: string }>();
  const coinPrices = useMergedTradeData(coinArray);

  if (!coinName) return null;

  const price = coinPrices[coinName]?.trade_price ?? 0;
  const change = coinPrices[coinName]?.change;
  const changePrice = coinPrices[coinName]?.change_price ?? 0;
  const changeRate = coinPrices[coinName]?.change_rate ?? 0;

  const formattedChangePrice = isNaN(changePrice)
    ? '0'
    : parseInt(changePrice.toFixed(0)).toLocaleString();

  const formattedChangeRate = isNaN(changeRate)
    ? '0.00'
    : (changeRate * 100).toFixed(2);

  return (
    <Container>
      <StyledText style={{ fontSize: '1.8rem' }}>{coinName}</StyledText>
      <StyledText style={{ fontSize: '1.8rem' }}>
        {isNaN(price) ? '0' : price.toLocaleString()}
      </StyledText>
      <StyledText
        style={{
          color: change === 'RISE' ? '#E90061' : 'blue',
        }}
      >
        {change === 'RISE' ? '+' : ''}
        {formattedChangePrice} ({formattedChangeRate})%
      </StyledText>
    </Container>
  );
};

export default TradeInfo;

// Styled Components
const Container = styled.div`
  width: 88%;
  height: 14%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledText = styled.p`
  font-weight: 600;

  &:nth-child(3) {
    padding-top: 2%;
  }
`;
