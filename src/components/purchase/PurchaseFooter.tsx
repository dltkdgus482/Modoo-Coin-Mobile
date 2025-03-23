// Types
interface PurchaseFooterProps {
  currentInput: number[];
}

interface position {
  coinName: string;
  entryData: string;
  entryPrice: number;
  orderType: string;
  quantity: number;
}

// Libraries
import styled from 'styled-components';
import useUserStore from '../../store/user';
import useCoinStore from '../../store/coin';
import { useNavigate, useParams } from 'react-router-dom';

const PurchaseFooter = ({ currentInput }: PurchaseFooterProps) => {
  const navigate = useNavigate();
  const { coinName, orderType } = useParams();
  const { balance, positionArray, setPositionArray, setBalance } =
    useUserStore();
  const { coinPrices } = useCoinStore();

  return (
    <Container>
      <StyledButton
        onClick={() => {
          if (!coinName || !orderType) {
            return;
          }

          const currentPrice = coinPrices[coinName].trade_price;
          const quantity = parseInt(currentInput.join(''));

          if (currentPrice * quantity > balance) {
            alert('잔액이 부족합니다.');
            return;
          }

          const newPosition: position = {
            coinName,
            entryData: new Date().toISOString(),
            entryPrice: currentPrice,
            orderType: orderType,
            quantity,
          };

          setBalance(balance - currentPrice * quantity);
          setPositionArray([...positionArray, newPosition]);
          navigate(`/trade/${coinName}`);
        }}
      >
        확인
      </StyledButton>
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
