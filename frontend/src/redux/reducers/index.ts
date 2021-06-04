import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  productsStore: productsReducer
});

export default rootReducer;
