/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
      <h2 className="productList-products__title-shellfish" id="productList-products__title-shellfish">mariscos</h2>
      <hr className="hr1" />
      <h2 className="productList-products__title-white">moluscos</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
          mollusckList.map((mollusck) => (
            <li className="ul-list">
              <div>
                <Link key={mollusck._id} to={`/detail/${mollusck._id}`}>
                  <img src={mollusck.img} alt="fish" className="ul-list__img" />
                </Link>
                <p>
                  {mollusck.name}
                  {mollusck.price}
                  {' '}
                  €
                </p>
              </div>
            </li>
          ))
        }
      </ul>
      <AnchorLink offset={() => 100} href="#productList-title">
        <button type="button">volver arriba</button>
      </AnchorLink>
      <h2 className="productList-products__title-blue">crustáceos</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
        crustaceanList.map((crustacean) => (
          <li className="ul-list">
            <div>
              <Link key={crustacean._id} to={`/detail/${crustacean._id}`}>
                <img src={crustacean.img} alt="fish" className="ul-list__img" />
              </Link>
              <p>
                {crustacean.name}
                {crustacean.price}
                {' '}
                €
              </p>
            </div>
          </li>
        ))
        }
      </ul>
      <AnchorLink offset={() => 100} href="#productList-title">
        <button type="button">volver arriba</button>
      </AnchorLink>
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(ShellfishList);
