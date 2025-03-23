// Assets
import money from '/src/assets/home/money.png'
import home from '/src/assets/home/home.png'
import myInfo from '/src/assets/home/myInfo.png'

// Libraries
import styled from 'styled-components';

// Other Components
import BottomNav from '../common/BottomNav';

const HomeFooter = () => {
  return (
    <BottomNav>
      <Icon src={money}/>
      <Icon src={home}/>
      <Icon src={myInfo}/>
    </BottomNav>
  );
};

export default HomeFooter;

// Styled Components
const Icon = styled.img`
  width: auto;
  height: 30%;
  cursor: pointer;
`