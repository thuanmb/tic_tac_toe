import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Screen from 'ComponentsPath/common/screen';
import Board from './board';
import GameResultDialog from './game-result-dialog';
import UndoRedo from './undo-redo';
import { createNewGame, playAction, undo, redo } from './actions';

import './styles';

class Game extends Component {
  static propTypes = {
    boardSize: PropTypes.number.isRequired,
    gameBoardMatrix: PropTypes.array.isRequired,
    gameFinished: PropTypes.bool.isRequired,
    winner: PropTypes.number.isRequired,
    currentPlayerTurn: PropTypes.number.isRequired,
    canUndo: PropTypes.bool.isRequired,
    canRedo: PropTypes.bool.isRequired,
    createNewGameHandler: PropTypes.func.isRequired,
    playActionHandler: PropTypes.func.isRequired,
    undoHandler: PropTypes.func.isRequired,
    redoHandler: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      forceCloseDialog: false,
    };
  }

  componentWillMount() {
    this.createBoard();
  }

  createBoard() {
    const { boardSize, createNewGameHandler } = this.props;
    createNewGameHandler(boardSize);
  }

  handleCloseGameResultDialog() {
    this.setState({
      forceCloseDialog: true,
    });
  }

  handleCellClick(rowIndex, colIndex) {
    const {
      playActionHandler,
      gameBoardMatrix,
    } = this.props;

    if (gameBoardMatrix[rowIndex][colIndex] === -1) {
      playActionHandler(rowIndex, colIndex);
    }

    this.setState({
      forceCloseDialog: false,
    });
  }

  handleRestartGame() {
    this.setState({
      forceCloseDialog: false,
    });

    this.createBoard();
  }

  render() {
    const { forceCloseDialog } = this.state;
    const {
      boardSize,
      gameBoardMatrix,
      gameFinished,
      winner,
      canUndo,
      canRedo,
      undoHandler,
      redoHandler,
      currentPlayerTurn,
    } = this.props;
    return (
      <Screen title="Tic Tac Toe">
        <div className="white board-container dib">
          <UndoRedo canUndo={canUndo} canRedo={canRedo} onUndo={undoHandler} onRedo={redoHandler} />
          <Board
            size={boardSize}
            gameBoardMatrix={gameBoardMatrix}
            cellClickHandler={(rowIndex, colIndex) => this.handleCellClick(rowIndex, colIndex)}
            currentPlayerTurn={currentPlayerTurn}
          />
          {gameFinished && (
            <GameResultDialog
              open={gameFinished && !forceCloseDialog}
              winner={winner}
              closeHandler={() => this.handleCloseGameResultDialog()}
              restartGameHandler={() => this.handleRestartGame()}
            />
          )}
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = ({
  settings: { size: boardSize },
  game: { present: { boardMatrix: gameBoardMatrix, finished: gameFinished, winner, currentTurn }, past, future },
}) => ({
  boardSize,
  gameBoardMatrix,
  gameFinished,
  winner,
  canUndo: past.length > 1,
  canRedo: future.length > 0,
  currentPlayerTurn: currentTurn,
});

export default connect(mapStateToProps, {
  createNewGameHandler: createNewGame,
  playActionHandler: playAction,
  undoHandler: undo,
  redoHandler: redo,
})(Game);
