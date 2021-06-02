import React from 'react';
import Header from '../0-Header/index';
import Footer from '../0-Footer/index';

function Dashboard() {
  return (
    <>
      <Header />
      <body className="App">
        <div>
          <p>guía de compra</p>
          <p>
            Envío gratuito para Salamanca y alfoz.
            Pago en efectivo o tarjeta.
          </p>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default Dashboard;
