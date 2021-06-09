/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById } from '../../../redux/actions/actionCreator';
import { addToCart } from '../../../redux/actions/actionCart';
import Products from '../../../types/products';

type DetailProps = {
    cart: any,
    selectedProduct?: Products,
    dispatch: any
}

const ProductDetail: FC<DetailProps> = ({ selectedProduct, dispatch, cart }) => {
  const { productId }: any = useParams();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);

  return (
    <>
      <img src={selectedProduct?.img} alt="imagen producto seleccionado" />
      <h2 className="detail-selectedProduct__name">
        {selectedProduct?.name}
        {' '}
      </h2>
      <p className="detail-selectedProduct__price">
        {selectedProduct?.price}
        {' '}
        €
      </p>
      <hr />
      <div className="detail-selectedProduct__preparation">
        <h3 className="preparation-title">preparación</h3>
        <p className="preparation-choose">añada un comentario si precisa</p>
        <form action="">
          <label htmlFor="preparation">
            <input type="text" className="comment" placeholder="ej. Quiero el producto en rodajas, filetes, entero, sin cabeza..." />
          </label>
        </form>
      </div>
      <hr />
      <div className="detail-selectedProduct__buttons">
        <Link to="/tienda">
          <button type="button">seguir comprando</button>
        </Link>
        <button
          type="button"
          id={selectedProduct?._id}
          onClick={() => {
            dispatch(addToCart(selectedProduct));
          }}
        >
          añadir al carrito
        </button>
      </div>
    </>
  );
};

function mapStateToProps({ selectedProduct, cart }: any) {
  return { selectedProduct, cart };
}

export default connect(mapStateToProps)(ProductDetail);
