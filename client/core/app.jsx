import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => (
  <MuiThemeProvider>
    <div className="tc athelas">
      {props.children}
    </div>
  </MuiThemeProvider>
);

App.defaultProps = {
  children: '',
};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
