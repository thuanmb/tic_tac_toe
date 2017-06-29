import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const MenuButton = ({ to, className, children }) => (
  <Link className={`f6 link dim br1 ba ph3 pv2 mb2 white ${className}`} to={to}>{children}</Link>
);

MenuButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MenuButton.defaultProps = {
  className: '',
};

export default MenuButton;
