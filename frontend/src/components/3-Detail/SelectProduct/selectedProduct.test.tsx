import React from 'react';
import ProductDetail from './index';
import { screen, render, fireEvent } from '../../../test-utils';
import actionTypes from '../../../redux/actions/actionTypes';
import { addToCart } from '../../../redux/actions/actionCart';

describe('Given a ProductDetail component', () => {
  describe('User can send a comment', () => {
    const comment = 'Lo quiero en rodajas';

    fireEvent.change(screen.getByTestId('comment'), {
      target: { value: comment }
    });

    expect(screen.getByTestId('comment')).toContainElement(
      screen.getByText(comment)
    );
  });
  describe('And add to cart button is clicked', () => {
    test('addToCart function is invoked', () => {
      const button = screen.getByTestId('buttons-add-to-cart');
      addToCart.mockReturnValue({
        type: actionTypes.ADD_PRODUCTS_TO_CART,
        product: {
          name: 'Merluza', type: 'fish'
        }
      });

      fireEvent.click(button);

      expect(addToCart).toHaveBeenCalledTimes(1);
    });
  });
});
