/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
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
                  cart.map((item: any) => (
                    <li>
                      <div>
                        <img src={item.img} alt="" />
                        {item.name}
                        {' '}
                        x
                        {' '}
                        {item.quantity}
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Carrito vacío</p>
                )
            }
          </ul>
        </div>
        <div className="cart-title__buttons">
          <Link to="/tienda">
            <button type="button" className="section-button button">seguir comprando</button>
          </Link>
          <button type="button" className="section-button button">finalizar compra</button>
        </div>
      </div>
    </>
  );
};

function mapStateToProps({ cart }: any) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
