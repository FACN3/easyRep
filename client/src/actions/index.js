import {
  FETCH_CATEGORY,
  CHOSEN_SYMPTOMS,
  FETCH_SYMPTOMS,
  SELECT_LOCATION,
  SAVE_FILE
} from './types';

export const chooseCategory = category => {
  return { type: FETCH_CATEGORY, payload: category };
};

export const chooseLocation = location => {
  return { type: SELECT_LOCATION, payload: location };
};

export const chooseSymptoms = symptoms => {
  const chosenSymptoms = Object.keys(symptoms);
  const symptomsSelected = chosenSymptoms.filter(item => {
    return symptoms[item] === true;
  });
  return { type: CHOSEN_SYMPTOMS, payload: symptomsSelected };
};

export const renderSymptoms = category => {
  return { type: FETCH_SYMPTOMS, payload: category };
};

export const saveFile = fileUrl => {
  return { type: SAVE_FILE, payload: fileUrl };
};
