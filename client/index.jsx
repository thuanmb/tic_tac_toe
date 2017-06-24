import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './core/app.jsx';
import store from './core/store';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('tic-tac-toe-container'),
);
