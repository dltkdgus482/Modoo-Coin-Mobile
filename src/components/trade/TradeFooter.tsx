// Libraries
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// Other Components
import BottomNav from '../common/BottomNav';
import TradeButton from './TradeButton';

const TradeFooter = () => {
  const navigate = useNavigate();
  const { coinName } = useParams();

  return (
    <BottomNav>
      <TradeButton
        onClick={() => navigate(`/purchase/${coinName}/Long`)}
        text={'Long'}
        backgroundColor={'#008485'}
      />
      <TradeButton
        onClick={() => navigate(`/purchase/${coinName}/Short`)}
        text={'Short'}
        backgroundColor={'#0072bc'}
      />
    </BottomNav>
  );
};

export default TradeFooter;
