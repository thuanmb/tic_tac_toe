import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from 'ReducersPath/root';


const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware,
  ),
);

export default store;
export const history = syncHistoryWithStore(browserHistory, store);
