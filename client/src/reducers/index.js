import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import categoryList from "./category_list";

export default combineReducers({
  categories: categoryList,
  form: formReducer
});
