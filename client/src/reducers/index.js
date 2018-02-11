import { combineReducers } from 'redux';
import categoryList from './category_list';

export default combineReducers({
  categories: categoryList
});
