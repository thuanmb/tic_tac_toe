import React from 'react';
import PropTypes from 'prop-types';

const getIcon = (value, iconFontSize) => {
  const style = {
    fontSize: `${iconFontSize}vw`,
    visibility: value >= 0 ? 'visible' : 'hidden',
  };

  if (value > 0) {
    return (
      <i className="material-icons" style={style}>close</i>
    );
  }

  return (
    <i className="material-icons" style={style}>panorama_fish_eye</i>
  );
};

const Cell = ({ value, rowIndex, colIndex, iconFontSize, clickHandler }) => (
  <span className="dtc cell tc v-mid pointer" onClick={() => clickHandler(rowIndex, colIndex)}>
    {getIcon(value, iconFontSize)}
  </span>
);

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  iconFontSize: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Cell;
