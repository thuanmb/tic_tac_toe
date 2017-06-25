import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => (
  <div className="tc">
    <h1>Tic Tac Toe</h1>
    {props.children}
  </div>
);

App.defaultProps = {
  children: '',
};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
