import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Table from '../components/Table';
import { getBitcoinInfo } from '../helpers/index.helpers';

const IndexPage = () => {
  const [bitcoinInfo, setBitcoinInfo] = useState([]);
  const retrieveBitcoinData = async () =>
    setBitcoinInfo(await getBitcoinInfo());

  useEffect(() => retrieveBitcoinData(), []);

  return (
    <Layout>
      <Table bitcoinInfo={bitcoinInfo} />
    </Layout>
  );
};

export default IndexPage;
