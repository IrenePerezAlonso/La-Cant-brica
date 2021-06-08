/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { connect } from 'react-redux';
import Products from '../../types/products';
import ProductDetail from './SelectProduct/index';
import './detail.css';

type DetailProps = {
    products: Products [],
    dispatch: any
}

const Detail: FC<DetailProps> = () => (
  <div className="detail">
    <h1 className="detail-title">TIENDA</h1>
    <div className="detail-selectedProduct">
      <ProductDetail />
    </div>
  </div>
);

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(Detail);
