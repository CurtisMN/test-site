import React from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = ({ bitcoinInfo }) => {
  const headers = [
    { name: 'Date' },
    { name: 'Compared Currency', align: 'center' },
    { name: 'Price', align: 'right' },
  ];
  const getFormattedRows = () =>
    bitcoinInfo.map(item => [
      { data: item.date },
      { data: item.comparedCurrency, align: 'center' },
      { data: item.price, align: 'right' },
    ]);

  return (
    <TableContainer component={Paper} style={{ padding: 10 }}>
      <MaterialTable size="small" aria-label="a dense table">
        <TableHeader headers={headers} />
        <TableBody rows={getFormattedRows()} />
      </MaterialTable>
    </TableContainer>
  );
};

Table.propTypes = {
  bitcoinInfo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      price: PropTypes.string,
      comparedCurrency: PropTypes.string,
    })
  ),
};

Table.defaultProps = {
  bitcoinInfo: [],
};

export default Table;
