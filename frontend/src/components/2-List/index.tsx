/* eslint-disable react/prop-types */
import React, { useEffect, FC } from 'react';
import { useDispatch } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import loadProducts from '../../redux/actions/actionCreator';
import FishList from './Fish/index';
import ShellfishList from './Shellfish/index';
import CephalopodList from './Cephalopod/index';
import './list.css';

const List: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <div className="productList">
        <h1 className="productList-title">TIENDA</h1>
        <div className="productList-buttons">
          <AnchorLink offset={() => 100} href="#productList-products__title-fish">
            <button type="button" className="productList-buttons__fishes button">Pescados</button>
          </AnchorLink>
          <AnchorLink offset={() => 100} href="#productList-products__title-shellfish">
            <button type="button" className="productList-buttons__molluscks button">Mariscos</button>
          </AnchorLink>
          <AnchorLink offset={() => 100} href="#productList-products__title-cephalopod">
            <button type="button" className="productList-buttons__cephalopods button">Cefalópodos</button>
          </AnchorLink>
        </div>
        <div className="productList-products">
          <FishList />
          <ShellfishList />
          <CephalopodList />
        </div>
      </div>
    </>
  );
};

export default List;
