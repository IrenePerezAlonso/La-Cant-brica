import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreator';

interface ProductsListProps {
    products: Array<object>,
    dispatch: () => any
}

const ProductsList: React.FC<ProductsListProps> = ({ products, dispatch }) => {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
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
          <h3>Pescado Azul</h3>
        </div>
        <div className="productList-fishses">
          {products.map((product) => <Link key={product._id} to={`/detail/${product.id}`}>{product.name}</Link>)}
        </div>
      </div>
    </>
  );
};

ProductsList.propTypes = {
  products: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default ProductsList;
