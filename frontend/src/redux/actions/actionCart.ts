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

export function deleteFromCart(productId: any) {
  return {
    type: actionTypes.DELETE_CART_PRODUCT,
    productId
  };
}

export function descreaseProduct(product: any) {
  return {
    type: actionTypes.DECREASE_PRODUCT,
    product
  };
}

export function addNotes(product: any) {
  return {
    type: actionTypes.ADD_NOTES,
    product
  };
}
