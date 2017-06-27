import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Board from './board';
import { createNewGame, playAction } from './actions';

import './styles';

class Game extends Component {
  static propTypes = {
    boardSize: PropTypes.number.isRequired,
    gameBoardMatrix: PropTypes.array.isRequired,
    createNewGameHandler: PropTypes.func.isRequired,
    playActionHandler: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  componentWillMount() {
    const { boardSize, createNewGameHandler } = this.props;
    createNewGameHandler(boardSize);
  }

  handleMenuToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  handleCellClick(rowIndex, colIndex) {
    const { playActionHandler, gameBoardMatrix } = this.props;

    if (gameBoardMatrix[rowIndex][colIndex] === -1) {
      playActionHandler(rowIndex, colIndex);
    }
  }

  render() {
    const { menuOpen } = this.state;
    const {
      boardSize,
      gameBoardMatrix,
    } = this.props;
    return (
      <div>
        <AppBar
          title="Tic Tac Toe"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.handleMenuToggle()}
          className="app-bar"
        />
        <Drawer
          open={menuOpen}
          docked={false}
          onRequestChange={() => this.handleMenuToggle()}
        >
          <MenuItem>
            <Link to="/" className="link dib w-100 black">Home</Link>
            <Divider />
          </MenuItem>
        </Drawer>
        <article className="game-container absolute w-100 bg-main tc">
          <div className="white board-container dib">
            <Board
              size={boardSize}
              gameBoardMatrix={gameBoardMatrix}
              cellClickHandler={(rowIndex, colIndex) => this.handleCellClick(rowIndex, colIndex)}
            />
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = ({
  settings: { size: boardSize },
  game: { boardMatrix: gameBoardMatrix },
}) => ({
  boardSize,
  gameBoardMatrix,
});

export default connect(mapStateToProps, {
  createNewGameHandler: createNewGame,
  playActionHandler: playAction,
})(Game);
