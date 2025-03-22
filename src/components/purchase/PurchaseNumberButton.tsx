// Libraries
import styled from 'styled-components';

const PurchaseNumberButton = ({ setCurrentInput }) => {
  const numberArr: (number | string)[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    '취소',
    0,
    '지우기',
  ];

  const handleClick = (num: number | string): void => {
    setCurrentInput((prev): number[] => {
      if (num === '지우기') {
        if (prev.length === 1) {
          return [0];
        }
        return prev.slice(0, -1);
      } else if (num === '취소') {
        return [0];
      } else {
        return [...prev, num as number];
      }
    });
  };

  return (
    <Container>
      {numberArr.map((num, i) => {
        return (
          <StyledNum
            key={i}
            onClick={() => {
              handleClick(num);
            }}
          >
            {num}
          </StyledNum>
        );
      })}
    </Container>
  );
};

export default PurchaseNumberButton;

// Styled Components
const Container = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 22%;
  align-items: center;
  justify-content: center;
`;

const StyledNum = styled.div`
  width: 33%;
  height: 33%;
  color: black;
  font-size: 1.6rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    background-color: #cccccc;
  }
`;
