// Libraries
import styled from 'styled-components';

// Other Components
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import HomeFooter from './HomeFooter';

const HomeContainer = () => {
  return (
    <Container>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </Container>
  );
};

export default HomeContainer;

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
