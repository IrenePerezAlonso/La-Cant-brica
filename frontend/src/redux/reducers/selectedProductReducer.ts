import actionTypes from '../actions/actionTypes';
import Products from '../../types/products';

export default function productsReducer(products = {}, action: {type: String, products: Products}) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      return action.products;

    default:
      return products;
  }
}
