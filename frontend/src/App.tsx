import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Header from './components/0-Header/index';
import Dashboard from './components/1-Dashboard/index';
// import List from './components/2-List/index';
import Footer from './components/0-Footer/index';

function App() {
  return (
    <Provider store={store({ type: String })}>
      <Header />
      <Dashboard />
      <Footer />
    </Provider>
  );
}

export default App;
