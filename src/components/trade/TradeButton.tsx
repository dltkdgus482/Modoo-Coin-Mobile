// Types
interface TradeButtonProps {
  text: string;
  backgroundColor: string;
}

// Libraries
import styled from 'styled-components';

const TradeButton: React.FC<TradeButtonProps> = ({ text, backgroundColor }) => {
  return (
    <StyledButton style={{ backgroundColor: `${backgroundColor}` }}>
      {text}
    </StyledButton>
  );
};

export default TradeButton;

// Styled Components
const StyledButton = styled.button`
  width: min(45%);
  height: min(40px, 100%);
  color: white;
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
