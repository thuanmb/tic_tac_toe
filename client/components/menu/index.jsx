import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import './styles';

class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Tic Tac Toe',
  };

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
    const { title } = this.props;
    const { menuOpen } = this.state;

    return (
      <div>
        <AppBar
          title={title}
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
          <MenuItem>
            <Link to="/settings" className="link dib w-100 black">Settings</Link>
            <Divider />
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Menu;
