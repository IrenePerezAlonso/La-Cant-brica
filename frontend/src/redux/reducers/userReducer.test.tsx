import actionTypes from '../actions/actionTypes';
import userReducer from './UserReducer';

describe('Given a userReducer', () => {
  test('return a POST_LOGIN', () => {
    const user = { name: 'Pepe', password: 'hola' };
    const action: any = { type: actionTypes.POST_LOGIN, user };
    const results = userReducer(user, action);

    expect(results).toEqual(user);
  });
  test('return a UPDATE_USER', () => {
    const user = { name: 'Pepe', password: 'hola' };
    const action: any = { type: actionTypes.UPDATE_USER, user };
    const results = userReducer(user, action);

    expect(results).toEqual(user);
  });
  test('return a UPDATE_USER', () => {
    const user = { name: 'Pepe', password: 'hola' };
    const action: any = { type: actionTypes.POST_LOGOUT, user };
    const results = userReducer(user, action);

    expect(results).toEqual(user);
  });
});
