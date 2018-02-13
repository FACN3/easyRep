import { combineReducers } from 'redux';
import categoryList from './category_list';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  categories: categoryList,
  category: categoryReducer,
  location: locationReducer,
});
