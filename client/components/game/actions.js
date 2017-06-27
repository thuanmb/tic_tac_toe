import { NEW_GAME } from 'ReducersPath/types';

export const createNewGame = (boardSize) => ({
  type: NEW_GAME,
  payload: {
    boardSize,
  },
});
