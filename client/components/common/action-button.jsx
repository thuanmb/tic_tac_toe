import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = (props) => (
  <button {...props} className={`f6 dim br4 ba ph3 pv1 mb2 white bg-transparent b--white ${props.className}`}>
    {props.children}
  </button>
);

ActionButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

ActionButton.defaultProps = {
  children: '',
  className: '',
};

export default ActionButton;
