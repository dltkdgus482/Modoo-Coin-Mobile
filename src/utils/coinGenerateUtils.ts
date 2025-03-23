export const generateFakeData = () => {
  const fakeCoinList = ['KRW-POT'];
  const data = {};

  fakeCoinList.forEach((code) => {
    const basePrice = 100000000;
    let changeRate = Math.random() * 0.1 - 0.05;

    const eventProbability = Math.random();
    if (eventProbability < 0.1) {
      changeRate = Math.random() * 0.2 + 0.1;
    } else if (eventProbability > 0.9) {
      changeRate = -(Math.random() * 0.2) - 0.1;
    }

    const newPrice = Math.floor(basePrice * (1 + changeRate));
    const changePrice = Math.abs(newPrice - basePrice);

    data[code] = {
      trade_price: newPrice,
      prev_closing_price: basePrice,
      change: changeRate > 0 ? 'RISE' : 'FALL',
      change_price: changePrice,
      change_rate: Math.abs(changeRate),
    };
  });

  return data;
};
