import { FETCH_CATEGORY, CHOSEN_SYMPTOMS, FETCH_SYMPTOMS } from "./types";

export const chooseCategory = category => {
  return { type: FETCH_CATEGORY, payload: category };
};

export const chooseSymptoms = symptoms => {
  const chosenSymptoms = Object.keys(symptoms);
  const symptomsSelected = chosenSymptoms.filter(item => {
    return symptoms[item] === true;
  })
  return { type: CHOSEN_SYMPTOMS, payload: symptomsSelected };
};

export const renderSymptoms = category => {
  return { type: FETCH_SYMPTOMS, payload: category }
};
