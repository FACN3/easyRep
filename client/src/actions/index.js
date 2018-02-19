import {
  FETCH_CATEGORY,
  CHOSEN_SYMPTOMS,
  FETCH_SYMPTOMS,
  SELECT_LOCATION,
  PAGE_COUNTER,
  CHECK_HISTORY,
  LOGIN
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

export const pageCounter = (counter, direction) => {
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

  return { type: PAGE_COUNTER, payload: count };
}

export const recordHistory = history => {
  return { type: CHECK_HISTORY, payload: history };
}

export const authLogin = user => {
  return { type: LOGIN, payload: token };
}
