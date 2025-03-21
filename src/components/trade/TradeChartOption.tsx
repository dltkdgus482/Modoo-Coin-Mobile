// Types
interface StyledTextProps {
  selected?: boolean;
}

// Libraries
import styled from 'styled-components';
import { useState } from 'react';

const TradeChartOption = () => {
  const [currentOption, setCurrentOption] = useState<string>('실시간');
  const options = ['실시간', '1일', '1주', '1개월', '1년'];

  return (
    <Container>
      {options.map((option) => (
        <StyledText
          key={option}
          selected={currentOption === option}
          onClick={() => setCurrentOption(option)}
        >
          {option}
        </StyledText>
      ))}
    </Container>
  );
};

export default TradeChartOption;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 14%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledText = styled.p<StyledTextProps>`
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  color: ${({ selected }) =>
    selected ? 'white' : '#6b7280'}; /* 회색 텍스트 */
  background-color: ${({ selected }) => (selected ? '#2C77EF' : '#f0f2f5')};
  box-shadow: ${({ selected }) =>
    selected ? '0 2px 6px rgba(44, 119, 239, 0.25)' : 'none'};

  &:hover {
    background-color: ${({ selected }) => (selected ? '#2C77EF' : '#e6e8ec')};
  }
`;
