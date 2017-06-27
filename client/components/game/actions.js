import { NEW_GAME, PLAY_ACTION } from 'ReducersPath/types';

export const createNewGame = (boardSize) => ({
  type: NEW_GAME,
  payload: {
    boardSize,
  },
});

export const playAction = (rowIndex, colIndex) => ({
  type: PLAY_ACTION,
  payload: {
    rowIndex,
    colIndex,
  },
});
