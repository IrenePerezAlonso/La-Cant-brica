import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

const url = 'http://localhost:2021/login';

export function getUser(email: string, password: string) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post(url, { email, password });
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

export function updateUser(user: any) {
  return {
    type: actionTypes.UPDATE_USER,
    user
  };
}
