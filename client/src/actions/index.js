import { FETCH_CATEGORY, SELECT_LOCATION } from './types';

export const chooseCategory = category => {
  return { type: FETCH_CATEGORY, payload: category };
};

export const chooseLocation = location => {
  return { type: SELECT_LOCATION, payload: location };
};
