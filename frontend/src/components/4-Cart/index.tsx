/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loadCart, deleteFromCart, addToCart, descreaseProduct
} from '../../redux/actions/actionCart';
import './cart.css';

type CartProps = {
  cart: any,
  dispatch: any
}

const Cart: FC<CartProps> = ({ cart, dispatch }) => {
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function getTotalCost(total: number, cost: number) {
    return total + cost;
  }
  function cartTotalCost() {
    const total = cart.map((x: any) => x.price * x.quantity);
    return total.reduce(getTotalCost);
  }

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
                            <button
                              type="button"
                              className="elements-button__res"
                              id={item?._id}
                              onClick={() => {
                                dispatch(descreaseProduct(item));
                              }}
                            >
                              -

                            </button>
                            <button
                              type="button"
                              className="elements-button__sum"
                              id={item?._id}
                              onClick={() => {
                                dispatch(addToCart(item));
                              }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className="list-info__elements-delete"
                            onClick={() => dispatch(deleteFromCart(item._id))}
                          >
                            Eliminar
                          </button>
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
        <div className="cart-title__totalPrice">
          <span>
            Total:
            {'  '}
            {cart.length ? cartTotalCost() : 0}
            €
          </span>
        </div>
        <div className="cart-buttons">
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
