import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const GameResultDialog = ({ open, winner, closeHandler, restartGameHandler }) => {
  const actions = [
    <FlatButton
      label="Continue"
      primary
      onTouchTap={closeHandler}
    />,
    <FlatButton
      label="Restart"
      primary
      keyboardFocused
      onTouchTap={restartGameHandler}
    />,
  ];

  return (
    <Dialog
      className="game-result"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={closeHandler}
    >
      <div className="tc">
        {(winner === 1 || winner === -1) && (
          <i className="material-icons">close</i>
        )}
        {(winner === 0 || winner === -1) && (
          <i className="material-icons">panorama_fish_eye</i>
        )}
        <div className="f3 b black-50">{winner > -1 ? 'Win' : 'Draw'}</div>
      </div>
    </Dialog>
  );
};

GameResultDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  winner: PropTypes.number.isRequired,
  closeHandler: PropTypes.func.isRequired,
  restartGameHandler: PropTypes.func.isRequired,
};

export default GameResultDialog;
