/* eslint-disable react/prop-types */
import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/actionLogin';
import Cart from '../4-Cart/index';
import Users from '../../types/users';

type LoginProps = {
  dispatch: any,
  user: Users []
}

const Login: FC<LoginProps> = ({ user, dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event: any) {
    setEmail(event.target.value);
  }

  function handlePassword(event: any) {
    setPassword(event.target.value);
  }

  function handleSubmitLogin(event: any) {
    event.preventDefault();
    dispatch(getUser(email, password));
  }

  return (
    !user ? (
      <div>
        <form className="login">
          <h1>login</h1>
          <input type="text" className="email" placeholder="introduzca su email" onChange={handleEmail} />
          <input type="text" className="password" placeholder="introduzca su contraseña" onChange={handlePassword} />
          <button type="button" className="submit" onClick={handleSubmitLogin}>Submit</button>
        </form>
      </div>
    ) : (
      <Cart />
    )
  );
};

function mapStateToProps({ user }: any) {
  return { user };
}

export default connect(mapStateToProps)(Login);
