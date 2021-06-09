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
        <div className="cart-section">
          <ul>
            {
              cart?.length
                ? (
                  cart.map((item: any) => (
                    <li className="cart-section__list">
                      <div className="section__list-info">
                        <img src={item.img} alt="" />
                        <div className="list-info__elements">
                          <p className="list-info__elements-letters">
                            {item.name}
                            {' '}
                            x
                            {' '}
                            {item.quantity}
                          </p>
                          <div className="list-info__elements-button">
                            <button type="button" className="elements-button__sum">+</button>
                            <button type="button" className="elements-button__res">-</button>
                          </div>
                          <button type="button" className="list-info__elements-delete">Eliminar</button>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p className="cart-section-empty">- el carrito está vacío -</p>
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
