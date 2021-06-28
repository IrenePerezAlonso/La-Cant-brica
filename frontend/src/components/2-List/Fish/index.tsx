/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import loadProducts from '../../../redux/actions/actionCreator';
import Products from '../../../types/products';
import '../list.css';

type ListFishProps = {
    products: Products [],
}

const FishList: FC<ListFishProps> = ({ products }) => {
  const WHITE = 'white';
  const BLUE = 'blue';

  const whiteList = products?.filter((fish) => fish.subType === WHITE);
  const blueList = products?.filter((fish) => fish.subType === BLUE);

  return (
    <>
      <h2 className="productList-products__title-fish" id="productList-products__title-fish">pescados</h2>
      <hr className="hr1" />
      <h2 className="productList-products__title-white">Pescado blanco</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
          whiteList.map((whiteFish) => (
            <li className="ul-list" key={whiteFish._id}>
              <div>
                <Link key={whiteFish._id} to={`/detail/${whiteFish._id}`}>
                  <img src={whiteFish.img} alt="fish" className="ul-list__img" />
                </Link>
                <p>
                  {whiteFish.name}
                  {whiteFish.price}
                  {' '}
                  €
                </p>
              </div>
            </li>
          ))
        }
      </ul>
      <AnchorLink offset={() => 100} href="#productList-title">
        <button type="button" className="goBack-button">volver arriba</button>
      </AnchorLink>
      <h2 className="productList-products__title-blue">Pescado azul</h2>
      <hr className="hr2" />
      <ul className="productList-products__ul">
        {
        blueList.map((blueFish) => (
          <li className="ul-list" key={blueFish._id}>
            <div>
              <Link key={blueFish._id} to={`/detail/${blueFish._id}`}>
                <img src={blueFish.img} alt="fish" className="ul-list__img" />
              </Link>
              <p>
                {blueFish.name}
                {blueFish.price}
                {' '}
                €
              </p>
            </div>
          </li>
        ))
        }
      </ul>
      <AnchorLink offset={() => 100} href="#productList-title">
        <button type="button" className="goBack-button">volver arriba</button>
      </AnchorLink>
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(FishList);
