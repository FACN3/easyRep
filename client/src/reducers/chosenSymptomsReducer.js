import { CHOSEN_SYMPTOMS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CHOSEN_SYMPTOMS:
      return action.payload;
    default:
      return state;
  }
}
