// Types
interface PurchaseFooterProps {
  currentInput: number[];
}

import { useNavigate } from 'react-router-dom';
// Libraries
import styled from 'styled-components';

const PurchaseFooter = ({ currentInput }: PurchaseFooterProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <StyledButton onClick={() => navigate('/trade')}>확인</StyledButton>
    </Container>
  );
};

export default PurchaseFooter;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 90%;
  height: 60%;
  color: white;
  background-color: #008485;
  font-size: 100%;
  font-weight: 500;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`;
