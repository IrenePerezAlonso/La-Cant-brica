import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store/index';
import Header from './components/0-Header/index';
import Login from './components/7-Login/index';
import Dashboard from './components/1-Dashboard/index';
import List from './components/2-List/index';
import Contact from './components/5-Contact/index';
import Footer from './components/0-Footer/index';
import Cart from './components/4-Cart/index';
import Recipes from './components/6-Recipes/index';
import Detail from './components/3-Detail/index';

function App() {
  return (
    <Provider store={store({ type: String })}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/tienda" component={List} />
          <Route exact path="/carrito" component={Cart} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/recetas" component={Recipes} />
          <Route exact path="/detail/:productId" component={Detail} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
