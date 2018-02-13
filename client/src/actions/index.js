import { FETCH_CATEGORY, CHOSEN_SYMPTOMS } from "./types";

export const chooseCategory = category => {
  return { type: FETCH_CATEGORY, payload: category };
};

export const chooseSymptoms = symptoms => {
  return { type: CHOSEN_SYMPTOMS, payload: symptoms };
};
