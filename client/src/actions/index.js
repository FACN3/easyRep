import { FETCH_CATEGORY } from "./types";

export const chooseCategory = category => {
  return { type: FETCH_CATEGORY, payload: category };
};
