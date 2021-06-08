import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectedProductReducer from './selectedProductReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  productsStore: productsReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer
});

export default rootReducer;
