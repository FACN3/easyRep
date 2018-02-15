import {
  FETCH_CATEGORY,
  CHOSEN_SYMPTOMS,
  FETCH_SYMPTOMS,
  SELECT_LOCATION,
  VALIDATE_ROUTE,
  CHECK_HISTORY
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

export const validateRoute = (counter, direction) => {
  let count;
  switch (direction) {
    case 'next':
      count = counter + 1;
      break;
    case 'back':
      count = counter - 1;
      break;
    default:
      count = 0;
  }

  return { type: VALIDATE_ROUTE, payload: count };
}

export const recordHistory = history => {
  return { type: CHECK_HISTORY, payload: history };
}
