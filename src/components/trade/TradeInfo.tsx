// Libraries
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Store
import useCoinStore from '../../store/coin';

const TradeInfo = ({}) => {
  const { coinName } = useParams<{ coinName: string }>();
  const { coinPrices } = useCoinStore();

  if (!coinName) return null;

  return (
    <Container>
      <StyledText style={{ fontSize: '1.8rem' }}>{coinName}</StyledText>
      <StyledText style={{ fontSize: '1.8rem' }}>
        {coinPrices[coinName].trade_price.toLocaleString()}
      </StyledText>
      <StyledText
        style={{
          color: coinPrices[coinName].change === 'RISE' ? '#E90061' : 'blue',
        }}
      >
        {coinPrices[coinName].change === 'RISE' ? '+' : ''}
        {parseInt(
          coinPrices[coinName].change_price.toFixed(0)
        ).toLocaleString()}{' '}
        ({(+coinPrices[coinName].change_rate * 100).toFixed(2)})%
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
