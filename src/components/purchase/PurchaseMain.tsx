// Libraries
import styled from 'styled-components';

// Other Components
import PurchaseInfo from './PurchaseInfo';
import PurchaseNumberButton from './PurchaseNumberButton';

const PurchaseMain = ({ currentInput, setCurrentInput }) => {
  return (
    <Container>
      <PurchaseInfo currentInput={currentInput} />
      <PurchaseNumberButton setCurrentInput={setCurrentInput} />
    </Container>
  );
};

export default PurchaseMain;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
