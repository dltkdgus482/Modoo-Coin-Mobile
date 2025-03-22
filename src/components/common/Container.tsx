// Libraries
import styled from 'styled-components';

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <InnerContainer>{children}</InnerContainer>;
};

export default Container;

// Styled Components
const InnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
