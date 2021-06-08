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
      <div>
        <img src={selectedProduct?.img} alt="imagen producto seleccionado" />
        <h2>
          {selectedProduct?.name}
          {' '}
        </h2>
        <p>
          {selectedProduct?.price}
        </p>
      </div>
      <div>
        <h2>preparación</h2>
        <p>elige una opción</p>
        <form action="">
          <label htmlFor="hola">
            <input type="checkbox" className="" name="preparation" value="hola" />
          </label>
        </form>
      </div>
      <button type="button">añadir al carrito</button>
    </>
  );
};

function mapStateToProps({ selectedProduct }: any) {
  return { selectedProduct };
}

export default connect(mapStateToProps)(ProductDetail);
