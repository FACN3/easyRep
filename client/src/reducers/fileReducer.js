import { SAVE_FILE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_FILE:
      return action.payload;
    default:
      return state;
  }
};
