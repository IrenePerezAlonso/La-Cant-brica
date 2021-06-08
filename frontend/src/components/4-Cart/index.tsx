/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { loadCart } from '../../redux/actions/actionCart';
import './cart.css';

type CartProps = {
  cart: any,
  dispatch: any
}

const Cart: FC<CartProps> = ({ cart, dispatch }) => {
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  return (
    <>
      <div className="cart">
        <h1 className="cart-title">carrito</h1>
        <div className="cart-title__section">
          <ul>
            {
              cart?.length
                ? (
                  <li>
                    <div>
                      <img src={cart.img} alt="" />
                      {cart.name}
                    </div>
                  </li>
                ) : (
                  <p>Carrito vacío</p>
                )
            }
          </ul>
        </div>
        <button type="button" className="section-button button">finalizar compra</button>
      </div>
    </>
  );
};

function mapStateToProps({ cart }: any) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
