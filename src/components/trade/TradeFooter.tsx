// Libraries
import styled from 'styled-components';

// Other Components
import TradeButton from './TradeButton';

const TradeFooter = () => {
  return (
    <Container>
      <TradeButton text={'Long'} backgroundColor={'#008485'} />
      <TradeButton text={'Short'} backgroundColor={'#0072bc'} />
    </Container>
  );
};

export default TradeFooter;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;
  border-radius: 20px 20px 0 0; /* 상단 둥근 모서리 */
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.12); /* 위쪽 그림자 효과 */
`;
