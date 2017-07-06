import React from 'react';
import PropTypes from 'prop-types';
import Cell from './cell';

const getIconFontSize = (size) => {
  let fontSize = 13;

  if (size > 3 && size <= 6) {
    fontSize = 6;
  } else if (size > 6 && size <= 9) {
    fontSize = 4;
  } else if (size > 9 && size <= 15) {
    fontSize = 2;
  } else if (size > 15) {
    fontSize = 1;
  }

  return fontSize;
};

const renderCells = (rowIndex, size, gameBoardMatrix, cellClickHandler, currentPlayerTurn) => {
  const cells = [];

  for (let colIndex = 0; colIndex < size; colIndex += 1) {
    cells.push(
      <Cell
        rowIndex={rowIndex}
        colIndex={colIndex}
        key={`cell-${rowIndex}-${colIndex}`}
        iconFontSize={getIconFontSize(size)}
        value={gameBoardMatrix[rowIndex] ? gameBoardMatrix[rowIndex][colIndex] : -1}
        clickHandler={cellClickHandler}
        currentPlayerTurn={currentPlayerTurn}
      />);
  }

  return (
    <div className="dt-row board__row" key={`row-${rowIndex}`}>{cells}</div>
  );
};

const renderRows = (size, gameBoardMatrix, cellClickHandler, currentPlayerTurn) => {
  const rows = [];
  for (let rowIndex = 0; rowIndex < size; rowIndex += 1) {
    rows.push(renderCells(rowIndex, size, gameBoardMatrix, cellClickHandler, currentPlayerTurn));
  }

  return rows;
};

const Board = ({ size, gameBoardMatrix, cellClickHandler, currentPlayerTurn }) => {
  const rows = renderRows(size, gameBoardMatrix, cellClickHandler, currentPlayerTurn);

  return (
    <div className="dt w-100 h-100 pa1 pa3-m pa5-l pt0-l pt0-m pt0">
      {rows}
    </div>
  );
};

Board.propTypes = {
  size: PropTypes.number,
  gameBoardMatrix: PropTypes.array.isRequired,
  cellClickHandler: PropTypes.func.isRequired,
  currentPlayerTurn: PropTypes.number.isRequired,
};

export default Board;
