import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/products';

export function loadProducts() {
  return async (dispatch: any) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_PRODUCTS_ERROR'
      });
    }
  };
}

export function addProduct(product: object) {
  return async (dispatch: any) => {
    const { data } = await axios.post(url, product);
    dispatch({
      type: actionTypes.ADD_PRODUCT,
      product: data
    });
  };
}

export function deleteProduct(productId: string) {
  return async (dispatch: any) => {
    await axios.delete(`${url}/${productId}`);
    dispatch({
      type: actionTypes.DELETE_PRODUCT,
      productId
    });
  };
}

export function updateProduct(product: {_id: string}) {
  return async (dispatch: any) => {
    const { data } = await axios.put(`${url}/${product._id}`, product);
    dispatch({
      type: actionTypes.UPDATE_PRODUCT,
      product: data
    });
  };
}

export function loadProduct(product: {_id: string}) {
  return async (dispatch: any) => {
    const { data } = await axios(`${url}/${product._id}`);
    dispatch({
      type: actionTypes.LOAD_PRODUCT,
      product: data
    });
  };
}

export function getHeroById(productId: string) {
  return async (dispatch: any) => {
    const { data } = await axios(`${url}/${productId}`);
    dispatch({
      type: actionTypes.LOAD_PRODUCT,
      product: data
    });
  };
}

export function login(user: object) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
