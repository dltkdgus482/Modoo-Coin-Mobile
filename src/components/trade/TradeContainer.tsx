// Libraries
import styled from 'styled-components';

// OtherComponents
import TradeHeader from './TradeHeader';
import TradeMain from './TradeMain';
import TradeFooter from './TradeFooter';

const TradeContainer = ({ data, setData }) => {
  return (
    <Container>
      <TradeHeader/>
      <TradeMain data={data} setData={setData} />
      <TradeFooter />
    </Container>
  );
};

export default TradeContainer;

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
