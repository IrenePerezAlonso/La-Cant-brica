import React from 'react';
import logoImg from '../../assets/mercadocentral-logo.png';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoImg} alt="logo mercado" className="footer-logo" />
      <div className="footer-text">
        <p className="footer-text__title">
          🐟 guía de compra
        </p>
        <p className="footer-text__phrase">
          Envío gratuito para Salamanca y alfoz.
          Pago en efectivo o tarjeta.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
