// Other Components
import BottomNav from '../common/BottomNav';
import TradeButton from './TradeButton';

const TradeFooter = () => {
  return (
    <BottomNav>
      <TradeButton text={'Long'} backgroundColor={'#008485'} />
      <TradeButton text={'Short'} backgroundColor={'#0072bc'} />
    </BottomNav>
  );
};

export default TradeFooter;
