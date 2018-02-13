import { FETCH_CATEGORY } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
    console.log('action is', action.payload);
      return action.payload;
    default:
      return state;
  }
}
