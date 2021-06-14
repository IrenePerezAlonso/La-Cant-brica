import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

const urlLogin = 'http://localhost:2021/login';
const urlLogout = 'http://localhost:2021/logout';

export function getUser(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post(urlLogin, { email, password });
      dispatch({
        type: actionTypes.POST_LOGIN,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POST_ERROR_LOGIN
      });
    }
  };
}

export function logout() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post(urlLogout);
      dispatch({
        type: actionTypes.POST_LOGOUT,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.POST_ERROR_LOGOUT
      });
    }
  };
}

export function updateUser(user: any) {
  return {
    type: actionTypes.UPDATE_USER,
    user
  };
}
