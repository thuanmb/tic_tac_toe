import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from 'ComponentsPath/menu';
import Board from './board';
import GameResultDialog from './game-result-dialog';
import { createNewGame, playAction } from './actions';

import './styles';

class Game extends Component {
  static propTypes = {
    boardSize: PropTypes.number.isRequired,
    gameBoardMatrix: PropTypes.array.isRequired,
    createNewGameHandler: PropTypes.func.isRequired,
    playActionHandler: PropTypes.func.isRequired,
    gameFinished: PropTypes.bool.isRequired,
    winner: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      gameResultDialogOpen: true,
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
      gameResultDialogOpen: false,
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
  }

  handleRestartGame() {
    this.setState({
      gameResultDialogOpen: true,
    });

    this.createBoard();
  }

  render() {
    const { gameResultDialogOpen } = this.state;
    const {
      boardSize,
      gameBoardMatrix,
      gameFinished,
      winner,
    } = this.props;
    return (
      <div>
        <Menu />
        <article className="screen-container absolute w-100 bg-main tc">
          <div className="white board-container dib">
            <Board
              size={boardSize}
              gameBoardMatrix={gameBoardMatrix}
              cellClickHandler={(rowIndex, colIndex) => this.handleCellClick(rowIndex, colIndex)}
            />
            {gameFinished && (
              <GameResultDialog
                open={gameResultDialogOpen && gameFinished}
                winner={winner}
                closeHandler={() => this.handleCloseGameResultDialog()}
                restartGameHandler={() => this.handleRestartGame()}
              />
            )}
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = ({
  settings: { size: boardSize },
  game: { boardMatrix: gameBoardMatrix, finished: gameFinished, winner },
}) => ({
  boardSize,
  gameBoardMatrix,
  gameFinished,
  winner,
});

export default connect(mapStateToProps, {
  createNewGameHandler: createNewGame,
  playActionHandler: playAction,
})(Game);
