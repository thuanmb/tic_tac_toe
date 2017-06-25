import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute } from 'react-router';
import Game from 'ComponentsPath/game';
import Home from 'ComponentsPath/home';
import App from './core/app.jsx';
import store, { history } from './core/store';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="game/new" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('tic-tac-toe-container'),
);
