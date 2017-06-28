import { UPDATE_SIZE } from './types';

const settingsReducer = (state = { size: 3 }, action) => {
  switch (action.type) {
    case UPDATE_SIZE:
      const { payload: { size } } = action;
      return {
        ...state,
        size,
      };
    default:
      return state;
  }
};

export default settingsReducer;
