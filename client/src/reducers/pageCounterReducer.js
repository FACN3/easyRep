import { PAGE_COUNTER } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case PAGE_COUNTER:
      return action.payload;
    default:
      return state;
  }
};
