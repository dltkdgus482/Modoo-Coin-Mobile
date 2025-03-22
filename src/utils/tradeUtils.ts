// Types
interface CryptoDataProps {
  market: string;
  timestamp: number;
  trade_price: number;
  opening_price: number;
}

interface getPastCryptoDataParams {
  type: string;
}

// Constants
const baseURL = '/api/v1/candles';

export const getPastCryptoData = async ({
  type,
}: getPastCryptoDataParams): Promise<CryptoDataProps[]> => {
  const params = new URLSearchParams({
    market: 'KRW-BTC',
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
