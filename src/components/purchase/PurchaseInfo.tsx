// Types
interface PurchaseInfoProps {
  currentInput: number[];
}

// Libraries
import styled from 'styled-components';

const PurchaseInfo = ({ currentInput }: PurchaseInfoProps) => {
  const cryptoPrice = 119000;

  return (
    <Container>
      <UpperContainer>
        <p style={{color: 'rgba(0,0,0,0.45)' }}>주문할 가격</p>
        <p style={{color: '#008485'}}>{cryptoPrice.toLocaleString()} 원</p>
      </UpperContainer>
      <LowerContainer>
        <p style={{ textAlign: 'center', fontSize: '3rem' }}>
          {parseInt(currentInput.join('')).toLocaleString()} BTC
        </p>
        <p
          style={{
            textAlign: 'center',
            fontSize: '1rem',
            color: 'rgba(0,0,0, 0.4)',
          }}
        >
          {(cryptoPrice * parseInt(currentInput.join(''))).toLocaleString()} 원
        </p>
      </LowerContainer>
    </Container>
  );
};

export default PurchaseInfo;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const UpperContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  gap: 5%;
`;

const LowerContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`;
