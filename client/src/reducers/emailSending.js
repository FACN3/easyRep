import { SEND_EMAIL } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SEND_EMAIL:
      return action.payload;
    default:
      return state;
  }
};
