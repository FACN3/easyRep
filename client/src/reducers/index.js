import { combineReducers } from 'redux';
import categoryList from './category_list';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';
import symptomsReducer from './symptomsReducer';
import chosenSymptomsReducer from './chosenSymptomsReducer';
import pageCounterReducer from './pageCounterReducer';
import historyReducer from './historyReducer';
import emailSending from './emailSending';
import handlingError from './handlingError';

export default combineReducers({
  categories: categoryList,
  category: categoryReducer,
  location: locationReducer,
  symptoms: symptomsReducer,
  chosenSymptoms: chosenSymptomsReducer,
  page: pageCounterReducer,
  pathHistory: historyReducer,
  emailSending: emailSending,
  errorMessage: handlingError
});
