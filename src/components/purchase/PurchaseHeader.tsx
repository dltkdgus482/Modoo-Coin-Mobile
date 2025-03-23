// Assets
import backArrow from '../../assets/trade/backArrow.png';

// Libraries
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PurchaseHeader = () => {
  const navigate = useNavigate();
  const { coinName } = useParams();

  if (!coinName) return null;

  return (
    <Container>
      <BackButton
        src={backArrow}
        alt="back-arrow"
        onClick={() => navigate(`/trade/${coinName}`)}
      />
    </Container>
  );
};

export default PurchaseHeader;

// Styled Components
const Container = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.img`
  width: auto;
  height: 30%;

  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;
