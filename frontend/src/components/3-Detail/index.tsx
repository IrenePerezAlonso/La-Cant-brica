/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { connect } from 'react-redux';
import Products from '../../types/products';
import ProductDetail from './SelectProduct/index';

type DetailProps = {
    products: Products [],
    dispatch: any
}

const Detail: FC<DetailProps> = () => (
  <div className="productList">
    <h1 className="productList-title">TIENDA</h1>
    <div className="productList-products">
      <ProductDetail />
    </div>
  </div>
);

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(Detail);
