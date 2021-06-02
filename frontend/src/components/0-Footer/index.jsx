import React from 'react';
import logo from '../../assets/mercadocentral-logo.png';

function Footer() {
  return (
    <footer className="App">
      <img src={logo} alt="" />
      <div>
        <p>guía de compra</p>
        <p>
          Envío gratuito para Salamanca y alfoz.
          Pago en efectivo o tarjeta.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
