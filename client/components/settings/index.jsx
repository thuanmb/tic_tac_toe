import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from 'material-ui-slider-label/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Screen from 'ComponentsPath/common/screen';
import MenuButton from 'ComponentsPath/common/menu-button';
import { updateBoardSize } from './actions';

import './styles';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: 'white',
    selectionColor: 'white',
  },
});

class Settings extends Component {
  static propTypes = {
    boardSize: PropTypes.number.isRequired,
    updateBoardSizeHandler: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      sizeValue: props.boardSize,
    };
  }

  handleSlider = (event, value) => {
    this.setState({ sizeValue: value });
    this.props.updateBoardSizeHandler(value);
  };

  render() {
    const { sizeValue } = this.state;

    return (
      <Screen title="Settings">
        <form className="pa4-m ph7-l pv5-l">
          <div>
            <label htmlFor="board-size" className="f3 b db mb2">Board size</label>
            <MuiThemeProvider muiTheme={muiTheme}>
              <Slider
                id="board-size"
                className="mt5"
                min={3}
                max={21}
                step={1}
                value={sizeValue}
                onChange={this.handleSlider}
                label={
                  <div className="slider__label--outer">
                    <div className="slider__label--inner">
                      {sizeValue}<small>x</small>{sizeValue}
                    </div>
                  </div>
                }
              />
            </MuiThemeProvider>
          </div>
        </form>
        <MenuButton className="dib" to="/">Back to Home</MenuButton>
      </Screen>
    );
  }
}

const mapStateToProps = ({
  settings: { size: boardSize },
}) => ({
  boardSize,
});

export default connect(mapStateToProps, {
  updateBoardSizeHandler: updateBoardSize,
})(Settings);
