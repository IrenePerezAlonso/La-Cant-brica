import actionTypes from '../actions/actionTypes';
import Products from '../../types/Products';

export default function selectedProductReducer(products = {},
  action: {type: string, product: Products}) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      return action.product;

    default:
      return products;
  }
}
