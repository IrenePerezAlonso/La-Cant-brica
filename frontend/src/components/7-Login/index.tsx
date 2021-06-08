/* eslint-disable react/prop-types */
import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/actionLogin';
import Cart from '../4-Cart/index';
import Users from '../../types/users';
import './login.css';

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
      <div className="login">
        <h1 className="login-title">login</h1>
        <div className="login-create">
          <h2>Crear cuenta</h2>
          <form className="login">
            <p>Introduzca su contraseña:</p>
            <input type="text" id="email" className="email" placeholder="email" onChange={handleEmail} />
            <p>Introduzca su password:</p>
            <input type="text" id="password" placeholder="contraseña" onChange={handlePassword} />
          </form>
          <button type="button" className="submit" onClick={handleSubmitLogin}>Submit</button>
        </div>
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
