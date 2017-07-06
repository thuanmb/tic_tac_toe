import React from 'react';
import PropTypes from 'prop-types';

const getIcon = (value, iconFontSize, currentPlayerTurn) => {
  const style = {
    fontSize: `${iconFontSize}vw`,
    visibility: value >= 0 ? 'visible' : 'hidden',
  };

  if (value === 1 || (value < 0 && currentPlayerTurn === 1)) {
    return (
      <i className="material-icons" style={style}>close</i>
    );
  }

  return (
    <i className="material-icons" style={style}>panorama_fish_eye</i>
  );
};

const Cell = ({ value, rowIndex, colIndex, iconFontSize, clickHandler, currentPlayerTurn }) => (
  <span className={`dtc cell tc v-mid pointer ${value < 0 ? '' : 'has-value'}`} onClick={() => clickHandler(rowIndex, colIndex)}>
    {getIcon(value, iconFontSize, currentPlayerTurn)}
  </span>
);

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  iconFontSize: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  currentPlayerTurn: PropTypes.number.isRequired,
};

export default Cell;
