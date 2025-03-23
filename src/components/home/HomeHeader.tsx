// Assets
import Logo from '/public/favicon.ico';

// Libraries
import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <Container>
      <Diamond src={Logo} />
      <StyledText>모두의 코인</StyledText>
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
  justify-content: space-start;
  align-items: center;
  gap: 1.5%;
`;

const Diamond = styled.img`
  width: auto;
  height: 30%;
`;

const StyledText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
