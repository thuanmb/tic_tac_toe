import { createMatrix, checkGameFinished } from 'UtilsPath';
import undoable from 'redux-undo';
import { NEW_GAME, PLAY_ACTION } from './types';

const PLAYER_X = 1;
const PLAYER_O = 0;
const DEFAULT_TURN = PLAYER_X;
const CELL_DEFAULT_VALUE = -1;

const DEFAULT_STATE = {
  size: 0,
  boardMatrix: [],
  currentTurn: DEFAULT_TURN,
  checkedCount: 0,
  finished: false,
  winner: CELL_DEFAULT_VALUE,
};

const gameReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case NEW_GAME:
      const { payload: { boardSize } } = action;
      return {
        ...DEFAULT_STATE,
        size: boardSize,
        boardMatrix: createMatrix(boardSize, CELL_DEFAULT_VALUE),
      };
    case PLAY_ACTION:
      const { payload: { rowIndex, colIndex } } = action;
      const newBoardMatrix = state.boardMatrix.map((a) => a.slice());
      newBoardMatrix[rowIndex][colIndex] = state.currentTurn;
      const nextState = {
        ...state,
        boardMatrix: newBoardMatrix,
        currentTurn: state.currentTurn === PLAYER_X ? PLAYER_O : PLAYER_X,
        checkedCount: state.checkedCount + 1,
      };

      return checkGameFinished(nextState, action.payload);
    default:
      return state;
  }
};

const undoableGameReducer = undoable(gameReducer);

export default undoableGameReducer;
