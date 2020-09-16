import React from 'react';
import PropTypes from 'prop-types';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableBody = ({ rows }) => (
  <MaterialTableBody>
    {rows.map(row => (
      <TableRow>
        {row.map(item => (
          <TableCell component="th" align={item.align} scope="row">
            {item.data}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </MaterialTableBody>
);

TableBody.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        align: PropTypes.string,
        data: PropTypes.any,
      })
    )
  ),
};

TableBody.defaultProps = {
  rows: [],
};

export default TableBody;
