// Assets
import backArrow from '../../assets/trade/backArrow.png';
import heart from '../../assets/trade/heart.png';
import voidHeart from '../../assets/trade/voidHeart.png';

// Libraries
import { useState } from 'react';
import styled from 'styled-components';

const TradeHeader = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <Container>
      <BackButton src={backArrow} />
      <Favorite
        src={isFavorite ? voidHeart : heart}
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </Container>
  );
};

export default TradeHeader;

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

const Favorite = styled.img`
  width: auto;
  height: 30%;
  padding-right: 2%;
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;
