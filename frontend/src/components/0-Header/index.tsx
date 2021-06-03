import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from '../../assets/logo.png';
import Login from './Login/index';

function Header() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="header-login">
          <Link to="/">Inicio</Link>
          <Link to="/Login">Login</Link>
        </nav>
        <div className="header-nav">
          <img src={logo} alt="" />
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
