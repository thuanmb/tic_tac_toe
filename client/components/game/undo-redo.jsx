import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from 'ComponentsPath/common/action-button';

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <ActionButton onClick={onUndo} disabled={!canUndo}>Undo</ActionButton>
    <ActionButton onClick={onRedo} disabled={!canRedo} className="ml2">Redo</ActionButton>
  </p>
);

UndoRedo.propTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
};


export default UndoRedo;
