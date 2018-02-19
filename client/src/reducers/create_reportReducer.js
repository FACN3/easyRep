import { CREATE_REPORT } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_REPORT:
      return action.payload;
    default:
      return state;
  }
}
