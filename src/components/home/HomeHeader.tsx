// Assets
import backArrow from '../../assets/trade/backArrow.png';

// Libraries
import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <Container>
      <BackButton src={backArrow} />
    </Container>
  );
};

export default HomeHeader;

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
