// Types
interface CryptoDataProps {
  market: string;
  timestamp: number;
  trade_price: number;
}

interface getPastCryptoDataParams {
  type: string;
  coinName: string | undefined;
}

// Constants
const baseURL = 'https://api.upbit.com/v1/candles';

export const getPastCryptoData = async ({
  type,
  coinName,
}: getPastCryptoDataParams): Promise<CryptoDataProps[]> => {
  const params = new URLSearchParams({
    market: coinName || 'KRW-BTC',
    to: getKSTTimeISOString(),
    count: '60',
  }).toString();

  const apiURL = `${baseURL}/${type}?${params}`;

  const getData: CryptoDataProps[] = await fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return getData.sort((a, b) => a.timestamp - b.timestamp);
};

const getKSTTimeISOString = (): string => {
  const now = new Date();

  const kstOffset = 9 * 60 * 60 * 1000;
  const kstDate = new Date(now.getTime() + kstOffset);

  const isoString = kstDate.toISOString().split('.')[0];
  return `${isoString}+09:00`;
};

export const getCurretPrice = (coinName: string): number => {
  return 0;
};
