import { combineReducers } from 'redux';
import categoryList from './category_list';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';
import symptomsReducer from './symptomsReducer';
import chosenSymptomsReducer from './chosenSymptomsReducer';
import pageCounterReducer from './pageCounterReducer';
import historyReducer from './historyReducer';

export default combineReducers({
  categories: categoryList,
  category: categoryReducer,
  location: locationReducer,
  symptoms: symptomsReducer,
  chosenSymptoms: chosenSymptomsReducer,
  page: pageCounterReducer,
  pathHistory: historyReducer
});
