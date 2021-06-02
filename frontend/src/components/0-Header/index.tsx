import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import logo from '../../assets/logo.png';
import Login from '../5-Login/index';

function Header() {
  return (
    <BrowserRouter>
      <header className="header">
        <nav className="header-login">
          <Link to="/login">Login</Link>
        </nav>
        <div className="header-nav">
          <img src={logo} alt="" />
        </div>
      </header>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
