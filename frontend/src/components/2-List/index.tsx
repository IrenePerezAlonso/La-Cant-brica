/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import loadProducts from '../../redux/actions/actionCreator';
import Products from '../../types/products';

type ListProps = {
    products: Products [],
    dispatch: any
}

const List: FC<ListProps> = ({ products, dispatch }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <div className="productList">
        <h1 className="productList-title">TIENDA</h1>
        <div className="productList-buttons">
          <button type="button" className="productList-buttons__fishes button">Pescados</button>
          <button type="button" className="productList-buttons__molluscks button">Mariscos</button>
          <button type="button" className="productList-buttons__cephalopods button">Cefalópodos</button>
        </div>
        <div className="productList-fishTittle">
          <h2>PESCADOS</h2>
          <h3>Pescado Blanco</h3>
          <ul>
            {
            products.length && products?.map((product) => (
              <li>
                <span>
                  <img src={product.img} alt="" />
                  {product.name}
                  {product.price}
                  {' '}
                  €
                </span>
              </li>
            ))
            }
          </ul>
          <p>
            {products[0]?.price}
            {' '}
            €
          </p>
          <h3>Pescado Azul</h3>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(List);
