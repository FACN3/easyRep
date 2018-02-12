import { FETCH_CATEGORY } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
