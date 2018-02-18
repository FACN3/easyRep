import { CHECK_HISTORY } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CHECK_HISTORY:
      return action.payload;
    default:
      return state;
  }
}
