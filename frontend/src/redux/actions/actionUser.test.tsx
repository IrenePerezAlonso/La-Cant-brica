import axios from 'axios';
import actionTypes from './actionTypes';
import {
  getUser,
  logout,
  updateUser
} from './actionUser';

jest.mock('axios');

describe('Given an actionUser', () => {
  test('loadProducts should return an action, with an actionType POST_LOGIN', async () => {
    const dispatch = jest.fn();
    const email = 'pepe@pepe.com';
    const password = 'hola';
    const data = { email: 'pepe@pepe.com', password: 'hola' };
    (axios as unknown as jest.Mock).mockResolvedValue(data);

    await getUser(email, password)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.POST_LOGIN,
      user: data
    });
  });
  test('return a call to dispatch', async () => {
    const email = 'pepe@pepe.com';
    const password = 'hola';
    const dispatch = jest.fn();
    await getUser(email, password)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given an actionUser', () => {
  test('loadProducts should return an action, with an actionType POST_LOGOUT', async () => {
    const dispatch = jest.fn();
    (axios as unknown as jest.Mock).mockResolvedValue();

    await logout()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.POST_LOGOUT
    });
  });
  test('return a call to dispatch', async () => {
    const dispatch = jest.fn();
    await logout()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('Given an actionUser', () => {
  test('loadProducts should return an action, with an actionType POST_LOGOUT', () => {
    const user = { email: 'pepe@pepe.com', password: 'hola' };
    const result = updateUser(user);

    expect(result).toEqual({
      type: actionTypes.UPDATE_USER,
      user
    });
  });
});
