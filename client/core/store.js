import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from 'ReducersPath/root';
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const customStatePersistance = () => ({ settings }) => ({
  settings,
});

const middlewares = () => (
  process.env.NODE_ENV !== 'production' ? [thunkMiddleware, createLogger()] : [thunkMiddleware]
);

const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares()),
  persistState('smt', { slicer: customStatePersistance }),
);

const store = createStore(rootReducer, {}, enhancer);

export default store;
export const history = syncHistoryWithStore(browserHistory, store);
