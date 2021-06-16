import React from 'react';
import Footer from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a shopping guide', () => {
    const { container } = render(<Footer />);
    const chooseTag = container.querySelector('p');

    expect(chooseTag?.textContent).toBe('🐟 guía de compra');
  });
});
