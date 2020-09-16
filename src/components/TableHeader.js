import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

const TableHeader = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map(header => (
        <TableCell align={header.align}>{header.name}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      align: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

TableHeader.defaultProps = {
  headers: [],
};

export default TableHeader;
