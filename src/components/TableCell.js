import React from 'react';
import PropTypes from 'prop-types';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableBody = ({ bitcoinInfo }) => (
  <MaterialTableBody>
    {bitcoinInfo.map(row => (
      <TableRow key={row.date}>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.price}</TableCell>
      </TableRow>
    ))}
  </MaterialTableBody>
);

TableBody.propTypes = {
  bitcoinInfo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

TableBody.defaultProps = {
  bitcoinInfo: [],
};

export default TableCell;
