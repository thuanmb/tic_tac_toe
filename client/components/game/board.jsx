import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

const renderCells = (rowIndex, size) => {
  const cells = [];

  for (let colIndex = 0; colIndex < size; colIndex += 1) {
    cells.push(<Cell row={rowIndex} col={colIndex} />);
  }

  return (
    <div className="dt-row">{cells}</div>
  );
};

const renderRows = (size) => {
  const rows = [];
  for (let rowIndex = 0; rowIndex < size; rowIndex += 1) {
    rows.push(renderCells(rowIndex, size));
  }

  return rows;
};

const Board = ({ size }) => {
  const rows = renderRows(size);

  return (
    <div className="dt">
      {rows}
    </div>
  );
};

Board.propTypes = {
  size: PropTypes.number,
};

export default Board;
