/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import loadProducts from '../../redux/actions/actionCreator';
import Products from '../../types/products';
import FishList from './Fish/index';
import './list.css';

type ListProps = {
    products: Products [],
    dispatch: any
}

const List: FC<ListProps> = ({ dispatch }) => {
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
        <div className="productList-products">
          <FishList />
        </div>
      </div>
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(List);
