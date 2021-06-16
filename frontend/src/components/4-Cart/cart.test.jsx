import React from 'react';
import Cart from './index';
import { screen, render, fireEvent } from '../../test-utils';

describe('Given a Cart component', () => {
  test('Should render a title', () => {
    const { container } = render(<Cart />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('carrito');
  });

  test('And when res button is clicked descreaseProduct function is invoked', () => {
    const initialState = { cart: [{ name: 'Merluza' }] };
    render(<Cart />, { initialState });
    fireEvent.click(screen.getByTestId('elements-button__res'), {
      target: { value: 'Bacalao' }
    });
  });

  test('And when sum button is clicked addToCart function is invoked', () => {
    const initialState = { cart: [{ name: 'Merluza' }] };
    render(<Cart />, { initialState });
    fireEvent.click(screen.getByTestId('elements-button__sum'), {
      target: { value: 'Bacalao' }
    });
  });

  test('And when res button is clicked descreaseProduct function is invoked', () => {
    const initialState = { cart: [{ name: 'Merluza' }] };
    render(<Cart />, { initialState });
    fireEvent.click(screen.getByTestId('list-info__elements-delete'), {
      target: { value: 'Bacalao' }
    });
  });
});
