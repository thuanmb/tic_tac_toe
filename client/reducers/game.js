import { NEW_GAME, PLAY_ACTION } from './types';

const PLAYER_X = 1;
const PALYER_O = 0;
const DEFAULT_TURN = PLAYER_X;
const CELL_DEFAULT_VALUE = -1;

const DEFAULT_STATE = {
  size: 0,
  boardMatrix: [],
  currentTurn: DEFAULT_TURN,
};

const initMatrix = (size) => (new Array(size)).fill().map(() => (new Array(size)).fill(CELL_DEFAULT_VALUE));

const gameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEW_GAME:
      const { payload: { boardSize } } = action;
      return {
        ...state,
        size: boardSize,
        boardMatrix: initMatrix(boardSize),
      };
    case PLAY_ACTION:
      return {
        ...state,
        boardMatrix: boardMatrix.clone()
      };
    default:
      return state;
  }
};

export default gameReducer;
