import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';
import game from './game';

const rootReducer = combineReducers({
  routing: routerReducer,
  settings,
  game,
});

export default rootReducer;
