/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import loadProducts from '../../../redux/actions/actionCreator';
import Products from '../../../types/products';
import '../list.css';

type ListShellfishProps = {
    products: Products [],
    dispatch: any
}

const ShellfishList: FC<ListShellfishProps> = ({ products, dispatch }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const MOLLUSCK = 'mollusck';
  const CRUSTACEAN = 'crustacean';

  const mollusckList = products.filter((mollusck) => mollusck.subType === MOLLUSCK);
  const crustaceanList = products.filter((crustacean) => crustacean.subType === CRUSTACEAN);

  return (
    <>
      <h2 className="productList-products__title-fish">mariscos</h2>
      <hr className="hr1" />
      <h2 className="productList-products__title-white">moluscos</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
          mollusckList.map((mollusck) => (
            <li className="ul-list">
              <div>
                <img src={mollusck.img} alt="fish" className="ul-list__img" />
                {mollusck.name}
                {mollusck.price}
                {' '}
                €
              </div>
            </li>
          ))
        }
      </ul>
      <h2 className="productList-products__title-blue">crustáceos</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
        crustaceanList.map((crustacean) => (
          <li className="ul-list">
            <div>
              <img src={crustacean.img} alt="fish" className="ul-list__img" />
              {crustacean.name}
              {crustacean.price}
              {' '}
              €
            </div>
          </li>
        ))
        }
      </ul>
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(ShellfishList);
