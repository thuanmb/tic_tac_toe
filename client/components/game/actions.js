import { NEW_GAME, PLAY_ACTION } from 'ReducersPath/types';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

export const createNewGame = (boardSize) => (dispatch) => {
  dispatch(UndoActionCreators.clearHistory());

  dispatch({
    type: NEW_GAME,
    payload: {
      boardSize,
    },
  });
};

export const playAction = (rowIndex, colIndex) => ({
  type: PLAY_ACTION,
  payload: {
    rowIndex,
    colIndex,
  },
});

export const undo = () => (dispatch) => {
  dispatch(UndoActionCreators.undo());
};

export const redo = () => (dispatch) => {
  dispatch(UndoActionCreators.redo());
};

