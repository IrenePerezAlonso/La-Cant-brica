import React from 'react';
import { screen, render, fireEvent } from '../../../test-utils';
import ProductDetail from './index';

describe('Given a ProductDetail component', () => {
  test('And when add to cart button is clicked addToCart function is invoked', async () => {
    render(<ProductDetail />);
    fireEvent.click(screen.getByTestId('buttons-detail'), {
      target: { value: 'Bacalao' }
    });
  });

  test('And when the onChange of the input is used setNotes fruncion is invoked', () => {
    render(<ProductDetail />);
    fireEvent.change(screen.getByTestId('comment'), {
      target: { value: 'Bacalao' }
    });
  });
});
