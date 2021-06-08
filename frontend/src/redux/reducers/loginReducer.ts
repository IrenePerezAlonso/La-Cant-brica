import actionTypes from '../actions/actionTypes';
import User from '../../types/users';

function loginReducer(user = {}, action: {type: String, user: User}) {
  switch (action.type) {
    case actionTypes.POST_LOGIN:
      return action.user;

    default:
      return user;
  }
}

export default loginReducer;
