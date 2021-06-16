import axios from 'axios';
import actionTypes from './actionTypes';
import {
  loadProducts,
  getProductById
} from './actionCreator';

jest.mock('axios');

describe('Given an actionCreators', () => {
  test('loadProducts should return an action, with an actionType LOAD_PRODUCTS', async () => {
    const dispatch = jest.fn();
    const data = 'Bacalao';
    (axios as unknown as jest.Mock).mockResolvedValue(data);

    await loadProducts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCTS,
      products: data
    });
  });

  test('return a call to dispatch', async () => {
    const dispatch = jest.fn();
    await loadProducts()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });

  test('getProductById should return an action, with an actionType LOAD_PRODUCT', async () => {
    const dispatch = jest.fn();
    const data = 'Bacalao';
    (axios as unknown as jest.Mock).mockResolvedValue(data);

    await getProductById()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PRODUCT,
      products: data
    });
  });
});
