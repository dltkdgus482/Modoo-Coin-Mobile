// Libraries
import styled from 'styled-components';

// Store
import useUserStore from '../../store/user.ts';
import useCoinStore from '../../store/coin.ts';

// Contants
import { coinArray } from '../../mocks/constants';

// Store
import { useMergedTradeData } from '../../hooks/useMergedTradeData.ts';

// Assets
import BTC from '/src/assets/coin/KRW-BTC.png';
import ETH from '/src/assets/coin/KRW-ETH.png';
import XRP from '/src/assets/coin/KRW-XRP.png';
import DOT from '/src/assets/coin/KRW-DOT.png';
import ADA from '/src/assets/coin/KRW-ADA.png';
import POT from '/src/assets/coin/KRW-POT.png';

const coinNameMap: Record<string, string> = {
  'KRW-BTC': BTC,
  'KRW-ETH': ETH,
  'KRW-XRP': XRP,
  'KRW-DOT': DOT,
  'KRW-ADA': ADA,
  'KRW-POT': POT,
};

const PositionList = () => {
  const {
    positionArray,
    balance,
    setBalance,
    setPositionArray,
    setTradeData,
    tradeData,
  } = useUserStore();
  const coinPrices = useMergedTradeData(coinArray);

  return (
    <Container>
      <StyledText>현재 포지션</StyledText>
      <CoinListContainer>
        {positionArray.length > 0 ? (
          positionArray.map((position, i) => {
            return (
              <Account key={i}>
                <InnerContainer>
                  <ImgContainer>
                    <AccountLogo
                      src={coinNameMap[position.coinName]}
                      alt={'hanabank-logo'}
                    />
                  </ImgContainer>
                  <InnerInnerContainer>
                    <StyledInnerText style={{ color: 'rgba(0,0,0,0.5)' }}>
                      {position.coinName}
                    </StyledInnerText>
                    <StyledInnerText>
                      {(() => {
                        const marketPrice =
                          coinPrices[position.coinName]?.trade_price;

                        if (
                          !marketPrice ||
                          !position.entryPrice ||
                          !position.quantity
                        )
                          return '0 원';

                        const diff =
                          (marketPrice - position.entryPrice) *
                          (position.orderType === 'Long' ? 1 : -1) *
                          position.quantity;

                        const profit = isNaN(diff) ? 0 : diff;

                        return `${profit.toLocaleString()} 원`;
                      })()}
                    </StyledInnerText>
                  </InnerInnerContainer>
                </InnerContainer>
                <StyledButton
                  onClick={() => {
                    const marketPrice =
                      coinPrices[position.coinName]?.trade_price;

                    if (!marketPrice) return;

                    const temp =
                      (marketPrice - position.entryPrice) * position.quantity;

                    const profit = position.orderType === 'Long' ? temp : -temp;

                    const newTradeData = {
                      benefit: profit,
                      clearPrice: marketPrice,
                      entryPrice: position.entryPrice,
                      entryTime: position.entryData,
                      clearTime: new Date().toISOString(),
                      coinName: position.coinName,
                      orderType: position.orderType,
                    };

                    const updatedPositions = positionArray.filter(
                      (p) => p !== position
                    );

                    setPositionArray(updatedPositions);
                    setTradeData([...tradeData, newTradeData]);
                    setBalance(
                      balance + position.entryPrice * position.quantity + profit
                    );
                  }}
                >
                  청산
                </StyledButton>
              </Account>
            );
          })
        ) : (
          <div>현재 포지션이 없습니다.</div>
        )}
      </CoinListContainer>
    </Container>
  );
};

export default PositionList;

// Styled Components
const Container = styled.div`
  width: 78%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 30px;
  background-color: white;
  padding: 6%;
  gap: 6%;
  overflow: hidden;
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
  height: auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-center;
  gap: min(8%, 20px);
  padding-top: 10px;

  /* 스크롤바 스타일 자동 (macOS에서는 기본) */
  scrollbar-width: auto; /* Firefox */
  -ms-overflow-style: auto; /* IE 10+ */
`;
