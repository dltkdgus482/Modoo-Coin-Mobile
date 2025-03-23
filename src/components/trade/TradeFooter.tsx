// Libraries
import { useNavigate } from 'react-router-dom';

// Other Components
import BottomNav from '../common/BottomNav';
import TradeButton from './TradeButton';

const TradeFooter = () => {
  const navigate = useNavigate();

  return (
    <BottomNav>
      <TradeButton onClick={() => navigate('/purchase')} text={'Long'} backgroundColor={'#008485'} />
      <TradeButton onClick={() => navigate('/purchase')} text={'Short'} backgroundColor={'#0072bc'} />
    </BottomNav>
  );
};

export default TradeFooter;
