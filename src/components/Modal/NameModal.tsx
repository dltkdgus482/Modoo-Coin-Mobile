// Types
interface NameModalProps {
  inputName: string;
  setInputName: (inputName: string) => void;
}

// Libraries
import styled, { keyframes } from 'styled-components';

// Assets
import Image from '/src/assets/home/character1.png';

// Store
import useUserStore from '../../store/user';

const NameModal = ({ inputName, setInputName }: NameModalProps) => {
  const { setUsername } = useUserStore();

  return (
    <>
      <Overlay />
      <Container>
        <StyledText style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          이름을 입력해주세요.
        </StyledText>
        <StyledText
          style={{
            fontSize: '0.8rem',
            color: 'rgba(0,0,0,0.4)',
            fontWeight: 400,
          }}
        >
          모두의 코인 서비스를 이용하시려면 이름이 필요합니다.
        </StyledText>
        <StyledImage src={Image} alt="hana-character" />
        <StyledInput
          type="text"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setUsername(inputName);
            }
          }}
        />
        <StyledButton
          style={{ backgroundColor: '#008485' }}
          onClick={() => setUsername(inputName)}
        >
          확인
        </StyledButton>
      </Container>
    </>
  );
};

export default NameModal;

// 애니메이션 정의
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

// Styled Components
const Container = styled.div`
  width: 80%;
  height: 30%;
  background-color: white;
  border-radius: 25px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5% 0;

  animation: ${slideDown} 1.2s ease-out;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const StyledText = styled.p``;

const StyledImage = styled.img`
  width: min(20%, 120px);
  height: auto;
`;

export const StyledInput = styled.input`
  width: 74%;
  height: 10%;
  border: 2px solid #008485;
  text-align: center;
  padding: 0 2%;
  outline: none;
  -moz-appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border: 2px solid #0072bc;
    box-shadow: 0px 0px 8px rgba(0, 114, 188, 0.5);
  }
`;

const StyledButton = styled.button`
  width: 80%;
  height: 12%;
  color: white;
  background-color: #008485;
  font-size: 100%;
  font-weight: 500;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`;
