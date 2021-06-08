/* eslint-disable react/prop-types */
import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/actions/actionCreator';
import Products from '../../../types/products';

type DetailProps = {
    selectedProduct?: Products,
    dispatch: any
}

const ProductDetail: FC<DetailProps> = ({ selectedProduct, dispatch }) => {
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
      <button type="button">añadir al carrito</button>
    </>
  );
};

function mapStateToProps({ selectedProduct }: any) {
  return { selectedProduct };
}

export default connect(mapStateToProps)(ProductDetail);
