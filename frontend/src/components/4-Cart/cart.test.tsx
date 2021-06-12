import React from 'react';
import Cart from './index';
import { render } from '../../test-utils';

describe('Given a Cart component', () => {
  test('Should render a phone number', () => {
    const { container } = render(<Cart />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('carrito');
  });
});
