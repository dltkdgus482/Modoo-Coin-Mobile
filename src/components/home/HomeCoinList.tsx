// Libraries
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Contants
import { coinArray } from '../../mocks/constants';

// Store
import useCoinStore from '../../store/coin.ts';

// Assets
import BTC from '/src/assets/coin/KRW-BTC.png';
import ETH from '/src/assets/coin/KRW-ETH.png';
import XRP from '/src/assets/coin/KRW-XRP.png';
import DOT from '/src/assets/coin/KRW-DOT.png';
import ADA from '/src/assets/coin/KRW-ADA.png';

const coinNameMap: Record<string, string> = {
  'KRW-BTC': BTC,
  'KRW-ETH': ETH,
  'KRW-XRP': XRP,
  'KRW-DOT': DOT,
  'KRW-ADA': ADA,
};

const HomeCoinList = () => {
  const { coinPrices } = useCoinStore();
  const navigate = useNavigate();

  return (
    <Container>
      <StyledText>가상화폐</StyledText>
      <CoinListContainer>
        {coinArray.length &&
          coinArray.map((coin, i) => {
            return (
              <Account key={i}>
                <InnerContainer>
                  <ImgContainer>
                    <AccountLogo
                      src={coinNameMap[coin]}
                      alt={'hanabank-logo'}
                    />
                  </ImgContainer>
                  <InnerInnerContainer>
                    <StyledInnerText style={{ color: 'rgba(0,0,0,0.5)' }}>
                      {coin}
                    </StyledInnerText>
                    <StyledInnerText>
                      {coinPrices[coin]?.trade_price?.toLocaleString() ?? 0} 원
                    </StyledInnerText>
                  </InnerInnerContainer>
                </InnerContainer>
                <StyledButton onClick={() => navigate(`/trade/${coin}`)}>
                  더보기
                </StyledButton>
              </Account>
            );
          })}
      </CoinListContainer>
    </Container>
  );
};

export default HomeCoinList;

// Styled Components
const Container = styled.div`
  width: 78%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 30px;
  background-color: white;
  padding: 6%;
  gap: 6%;
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

const CoinListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-center;
  gap: min(8%, 20px);

  /* 스크롤바 스타일 자동 (macOS에서는 기본) */
  scrollbar-width: auto; /* Firefox */
  -ms-overflow-style: auto; /* IE 10+ */
`;
