/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import loadProducts from '../../../redux/actions/actionCreator';
import Products from '../../../types/products';
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
      <h2 className="productList-products__title-fish">cefalópodos</h2>
      <hr className="hr1" />
      <ul className="productList-products__ul">
        {
          cephalopodList.map((cephalopod) => (
            <li className="ul-list">
              <div>
                <img src={cephalopod.img} alt="fish" className="ul-list__img" />
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
    </>
  );
};

function mapStateToProps(store: any) {
  return { products: store.productsStore };
}

export default connect(mapStateToProps)(CephalopodList);
