import actionTypes from '../actions/actionTypes';
import Products from '../../types/Products';

function productsReducer(products = [], action: {type: String, products: Products}) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return action.products;

      // case actionTypes.DELETE_PRODUCT:
      //   return products.filter(({ _id }) => _id !== action.productId);

      // case actionTypes.ADD_PRODUCT:
      //   return [
      //     ...products,
      //     action.data
      //   ];

      // case actionTypes.UPDATE_PRODUCT:
      //   return products.map(
      //     (product: object) => (product._id === action.product._id
      //       ? { ...product, ...action.data }
      //       : product)
      //   );

    default:
      return products;
  }
}

export default productsReducer;
