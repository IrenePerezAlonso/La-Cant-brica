/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import loadProducts from '../../../redux/actions/actionCreator';
import Products from '../../../types/Products';
import '../list.css';

type CephalopodProps = {
    products: Products [],
    dispatch: any
}

const CephalopodList: FC <CephalopodProps> = ({ products, dispatch }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const CEPHALOPOD = 'cephalopod';

  const cephalopodList = products.filter((cephalopod) => cephalopod.type === CEPHALOPOD);

  return (
    <>
      <h2 className="productList-products__title-cephalopod" id="productList-products__title-cephalopod">cefalópodos</h2>
      <hr className="hr1" />
      <ul className="productList-products__ul">
        {
          cephalopodList.map((cephalopod) => (
            <li className="ul-list" key={cephalopod._id}>
              <div>
                <Link key={cephalopod._id} to={`/detail/${cephalopod._id}`}>
                  <img src={cephalopod.img} alt="fish" className="ul-list__img" />
                </Link>
                <p>
                  {cephalopod.name}
                  {cephalopod.price}
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

export default connect(mapStateToProps)(CephalopodList);
