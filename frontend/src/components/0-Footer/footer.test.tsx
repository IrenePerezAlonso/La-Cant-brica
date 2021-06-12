import React from 'react';
import Login from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a shopping guide', () => {
    const { container } = render(<Login />);
    const chooseTag = container.querySelector('p');

    expect(chooseTag?.textContent).toBe('🐟 guía de compra');
  });
});
