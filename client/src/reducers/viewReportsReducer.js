import { VIEW_REPORTS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case VIEW_REPORTS:
      return action.payload;
    default:
      return state;
  }
};
