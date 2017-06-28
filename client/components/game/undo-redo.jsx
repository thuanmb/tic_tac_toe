import React from 'react';
import PropTypes from 'prop-types';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button className="f6 dim br4 ba ph3 pv1 mb2 white bg-transparent b--white" onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button className="f6 dim br4 ba ph3 pv1 mb2 white bg-transparent b--white ml2" onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </p>
);

UndoRedo.propTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
};


export default UndoRedo;
