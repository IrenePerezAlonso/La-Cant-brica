/* eslint-disable react/prop-types */
import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/actionUser';
import Account from '../8-Account/index';
import Users from '../../types/users';
import './login.css';

type LoginProps = {
  dispatch: any,
  user: Users
}

const Login: FC<LoginProps> = ({ user, dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(event: any) {
    setEmail(event.target.value);
    localStorage.setItem('userRegister', event.target.value);
  }

  function handlePassword(event: any) {
    setPassword(event.target.value);
  }

  function handleSubmitLogin(event: any) {
    event.preventDefault();
    dispatch(getUser(email, password));
  }

  return (
    !user.token ? (
      <div className="login">
        <h1 className="login-title">login</h1>
        <div className="login-acount">
          <h2 className="login-acount__create">Crear cuenta</h2>
          <hr />
          <form className="login-acount__form">
            <p className="form-emailTitle">Introduzca su email:</p>
            <input type="text" id="email" className="email" placeholder="email" onChange={handleEmail} />
            <p className="form-paswordTitle">Introduzca su password:</p>
            <input type="text" id="password" placeholder="contraseña" onChange={handlePassword} />
          </form>
          <button type="button" className="submit-button" onClick={handleSubmitLogin}>Submit</button>
        </div>
      </div>
    ) : (
      <Account />
    )
  );
};

function mapStateToProps({ user }: any) {
  return { user };
}

export default connect(mapStateToProps)(Login);
