// Libraries
import styled from 'styled-components';

const BottomNav = ({ children }: { children?: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default BottomNav;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: white;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.12);

  position: relative;
`;
