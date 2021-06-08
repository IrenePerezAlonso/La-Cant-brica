/* eslint-disable no-underscore-dangle */
import actionTypes from './actionTypes';

export function addToCart(product: any) {
  return {
    type: actionTypes.ADD_PRODUCTS_TO_CART,
    product
  };
}
export function loadCart() {
  return {
    type: actionTypes.LOAD_CART_PRODUCT
  };
}
