import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Board from './board';

import './styles';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleMenuToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const { menuOpen } = this.state;
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
        <article className="game-container absolute w-100 tl bg-main">
          <div className="v-mid white ph4-l">
            <Board size={3} />
          </div>
        </article>
      </div>
    );
  }
}

export default Game;
