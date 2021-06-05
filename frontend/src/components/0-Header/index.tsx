import React from 'react';
import './header.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Login from './Login/index';
import loginImg from '../../assets/user_login.png';
import logoImg from '../../assets/logo.png';
import cartImg from '../../assets/shopping_cart.png';

function Header() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="header-login">
          <Link to="/" className="header-login__start">Inicio</Link>
          <Link to="/Login" className="header-login__login">
            <img src={loginImg} alt="login" />
          </Link>
        </nav>
        <div className="header-nav">
          <img src={logoImg} alt="logo de La Cantábrica" className="header-nav__logo" />
          <img src={cartImg} alt="cart" className="header-nav__cart" />
        </div>
      </header>
      <Switch>
        <Route exact path="/" />
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
