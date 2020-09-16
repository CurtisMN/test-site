import axios from 'axios';

const getDateKeysFromBitcoinInfo = info => Object.keys(info);

const mapBitcoinInfoToArray = info =>
  getDateKeysFromBitcoinInfo(info).map(date => ({
    date,
    price: info[date],
    comparedCurrency: 'USD',
  }));

export const getBitcoinInfo = async () => {
  const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  const { data } = await axios.get(url);
  return mapBitcoinInfoToArray(data.bpi);
};
