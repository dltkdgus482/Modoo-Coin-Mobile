// Types
interface TradeInfoProps {
  coinName: string;
  currentPrice: number;
  changeSign: number;
  changeRate: string;
}

// Libraries
import styled from 'styled-components';

const TradeInfo: React.FC<TradeInfoProps> = ({
  coinName,
  currentPrice,
  changeSign,
  changeRate,
}) => {
  const changePrice = currentPrice * +changeRate * 0.01;

  return (
    <Container>
      <StyledText style={{ fontSize: '1.8rem' }}>{coinName}</StyledText>
      <StyledText style={{ fontSize: '1.8rem' }}>
        {currentPrice ? currentPrice.toLocaleString() : 0}
      </StyledText>
      <StyledText style={{ color: +changeRate > 0 ? '#E90061' : 'blue' }}>
        {changeSign === 1 ? '+' : '-'}
        {changePrice.toLocaleString()}({changeRate})%
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
