import { combineReducers } from "redux";
import categoryList from "./category_list";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  categories: categoryList,
  category: categoryReducer
});
