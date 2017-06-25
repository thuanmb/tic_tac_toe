import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import rootReducer from 'ReducersPath/root';

const combinedReducers = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

const store = createStore(
  combinedReducers,
  applyMiddleware(
    createLogger(),
    thunkMiddleware,
  ),
);

export default store;
export const history = syncHistoryWithStore(browserHistory, store);
