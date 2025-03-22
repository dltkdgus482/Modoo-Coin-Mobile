// Libraries
import { useState } from 'react';

// Other Components
import Container from '../common/Container';
import PurchaseHeader from './PurchaseHeader';
import PurchaseMain from './PurchaseMain';
import PurchaseFooter from './PurchaseFooter';

const PurchaseContainer = () => {
  const [currentInput, setCurrentInput] = useState<number[]>([0]);

  return (
    <Container>
      <PurchaseHeader></PurchaseHeader>
      <PurchaseMain
        currentInput={currentInput}
        setCurrentInput={setCurrentInput}
      ></PurchaseMain>
      <PurchaseFooter currentInput={currentInput}></PurchaseFooter>
    </Container>
  );
};

export default PurchaseContainer;
