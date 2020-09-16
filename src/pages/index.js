import React from 'react';
import axios from 'axios';
import Layout from '../components/layout';

const IndexPage = () => {
  const getBitcoinData = async () => {
    const { data } = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    return data.bpi;
  };

  return (
    <Layout>
    </Layout>
  );
};

export default IndexPage
