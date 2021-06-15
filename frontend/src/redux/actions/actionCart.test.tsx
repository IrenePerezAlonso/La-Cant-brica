import actionTypes from './actionTypes';
import {
  addToCart, loadCart, deleteFromCart, descreaseProduct
} from './actionCart';

describe('Given a Cart action reducer function and an ADD cart payload', () => {
  test('Should add the selected product into the cart component', () => {
    const product: any = { name: 'Merluza' };
    const result = addToCart(product);

    expect(result).toEqual({
      type: actionTypes.ADD_PRODUCTS_TO_CART,
      product
    });
  });
});

describe('Given a Cart action reducer function and an LOAD cart payload', () => {
  test('Should load all products into the Cart', () => {
    const result = loadCart();

    expect(result).toEqual({
      type: actionTypes.LOAD_CART_PRODUCT
    });
  });
});

describe('Given a Cart action reducer function and an DELETE cart payload', () => {
  test('Should delete the selected product into the cart component', () => {
    const productId: any = { id: '01' };
    const result = deleteFromCart(productId);

    expect(result).toEqual({
      type: actionTypes.DELETE_CART_PRODUCT,
      productId
    });
  });
});

describe('Given a Cart action reducer function and an DECREASE cart payload', () => {
  test('Should decrease the selected product into the cart component', () => {
    const product: any = { name: 'Merluza' };
    const result = descreaseProduct(product);

    expect(result).toEqual({
      type: actionTypes.DECREASE_PRODUCT,
      product
    });
  });
});
