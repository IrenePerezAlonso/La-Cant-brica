/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

function cartReducer(cartList = [], action: any) {
  let newCartList = [...cartList];

  switch (action.type) {
    case actionTypes.LOAD_CART_PRODUCT:
      return cartList;

    case actionTypes.ADD_PRODUCTS_TO_CART:
      let productToAdd;
      const item = newCartList
        .find(({ _id }) => action.product._id === _id);
      if (item) {
        newCartList = newCartList.map(
          (product) => (action.product._id === product._id
            ? { ...product, quantity: item.quantity += 1 }
            : product)
        );
      } else {
        productToAdd = { ...action.product, quantity: 1 };
        newCartList = [...newCartList, productToAdd];
      }
      break;

    default:
      return cartList;
  }
}

export default cartReducer;
