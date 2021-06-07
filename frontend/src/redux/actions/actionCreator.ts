import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

const config: Object = {
  method: 'get',
  url: 'http://localhost:2021/api/products',
  headers: {
    Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYjYzNTI2OTA1OGYzNGY0ODc3MDVjYSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTYyMzA0ODE2NCwiZXhwIjoxNjIzNTI4MTY0fQ.kXkNVqADpGaG5wTbyzXvQsoJrNQajK6OUMKIw39aEmQ'
  }
};

// const url = 'http://localhost:2021/api/products';

export default function loadProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(config);
      dispatch({
        type: actionTypes.LOAD_PRODUCTS,
        products: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_PRODUCTS_ERROR
      });
    }
  };
}

// export function addProduct(product: Object) {
//   return async (dispatch: Dispatch) => {
//     const { data } = await axios.post(url, product);
//     dispatch({
//       type: actionTypes.ADD_PRODUCT,
//       product: data
//     });
//   };
// }

// export function deleteProduct(productId: String) {
//   return async (dispatch: Dispatch) => {
//     await axios.delete(`${config}/${productId}`);
//     dispatch({
//       type: actionTypes.DELETE_PRODUCT,
//       productId
//     });
//   };
// }

// export function updateProduct(product: {_id: String}) {
//   return async (dispatch: Dispatch) => {
//     const { data } = await axios.put(`${config}/${product._id}`, product);
//     dispatch({
//       type: actionTypes.UPDATE_PRODUCT,
//       product: data
//     });
//   };
// }

// export function loadProduct(product: {_id: String}) {
//   return async (dispatch: Dispatch) => {
//     const { data } = await axios(`${config}/${product._id}`);
//     dispatch({
//       type: actionTypes.LOAD_PRODUCT,
//       product: data
//     });
//   };
// }

// export function login(user: object) {
//   return {
//     type: actionTypes.AUTH_LOGIN,
//     user
//   };
// }

// export function logout() {
//   return {
//     type: actionTypes.AUTH_LOGOUT
//   };
// }
