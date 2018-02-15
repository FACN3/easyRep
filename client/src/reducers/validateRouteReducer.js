import { VALIDATE_ROUTE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case VALIDATE_ROUTE:
      return action.payload;
    default:
      return state;
  }
};
