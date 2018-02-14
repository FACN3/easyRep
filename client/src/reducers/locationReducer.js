import { SELECT_LOCATION } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_LOCATION:
      return action.payload;
    default:
      return state;
  }
};
