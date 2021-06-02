import actionTypes from './actionTypes';
import PRODUCTS from '../../constants/products.mock';

function loadProducts() {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    pokemons: PRODUCTS
  };
}
export default loadProducts;
