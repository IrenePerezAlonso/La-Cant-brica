import React from 'react';
import './cart.css';

function Cart() {
  return (
    <>
      <div className="cart">
        <h1 className="cart-title">carrito</h1>
        <div className="cart-title__section">
          <button type="button" className="section-button button">finalizar compra</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
