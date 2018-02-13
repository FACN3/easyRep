import { combineReducers } from "redux";
import categoryList from "./category_list";
import categoryReducer from "./categoryReducer";
import symptomsReducer from './symptomsReducer';

export default combineReducers({
  categories: categoryList,
  category: categoryReducer,
  symptoms: symptomsReducer
});
