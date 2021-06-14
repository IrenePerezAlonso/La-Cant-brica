import actionTypes from '../actions/actionTypes';
import User from '../../types/users';

function loginReducer(user = {}, action: {type: string, user: User}) {
  switch (action.type) {
    case actionTypes.POST_LOGIN:
      return action.user;

    case actionTypes.UPDATE_USER:
      return action.user;

    case actionTypes.POST_LOGOUT:
      return action.user;

    default:
      return user;
  }
}

export default loginReducer;
