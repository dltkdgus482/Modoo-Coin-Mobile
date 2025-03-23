// Store
import useUserStore from '../../store/user';

// Assets
import hana from '/src/assets/home/hana.png';

// Libraries
import styled from 'styled-components';

const HomeUser = () => {
  const { username, balance } = useUserStore();

  return (
    <Container>
      <StyledText>자산</StyledText>
      <Account>
        <InnerContainer>
          <ImgContainer>
            <AccountLogo src={hana} alt={'hanabank-logo'} />
          </ImgContainer>
          <InnerInnerContainer>
            <StyledInnerText style={{ color: 'rgba(0,0,0,0.5)' }}>
              {username} 님의 계좌
            </StyledInnerText>
            <StyledInnerText>{balance.toLocaleString()}원</StyledInnerText>
          </InnerInnerContainer>
        </InnerContainer>
        <StyledButton>더보기</StyledButton>
      </Account>
    </Container>
  );
};

export default HomeUser;

// Styled Components
const Container = styled.div`
  width: 78%;
  height: 11%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 30px;
  background-color: white;
  padding: 5% 6%;
  gap: 12%;
`;

const StyledText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const Account = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: max(20%, 60px);
  height: max(70%, 30px);
  color: rgba(0, 0, 0, 0.8);
  font-size: 100%;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7%;
`;

const ImgContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccountLogo = styled.img`
  width: auto;
  height: 100%;
`;

const InnerInnerContainer = styled.div`
  width: 75%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 5px;
`;

const StyledInnerText = styled.span`
  font-size: 1rem;
`;
