export const generateFakeData = () => {
  const fakeCoinList = ['KRW-POT'];
  const data: Record<string, any> = {};

  fakeCoinList.forEach((code) => {
    const opening_price = 100000000;
    let changeRate = Math.random() * 0.1 - 0.05;

    const eventProbability = Math.random();
    if (eventProbability < 0.1) {
      changeRate = Math.random() * 0.2 + 0.1;
    } else if (eventProbability > 0.9) {
      changeRate = -(Math.random() * 0.2) - 0.1;
    }

    const trade_price = Math.floor(opening_price * (1 + changeRate));
    const change_price = Math.abs(trade_price - opening_price);
    data[code] = {
      code,
      trade_price,
      opening_price,
      change_price,
      change_rate: Math.abs(changeRate),
      change: changeRate > 0 ? 'RISE' : 'FALL',
    };
  });

  return data;
};
