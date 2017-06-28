import { UPDATE_SIZE } from 'ReducersPath/types';

export const updateBoardSize = (size) => ({
  type: UPDATE_SIZE,
  payload: {
    size,
  },
});
