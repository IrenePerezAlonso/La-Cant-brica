import React from 'react';
import Recipes from './index';
import { render } from '../../test-utils';

describe('Given a Recipes component', () => {
  test('Should render a title', () => {
    const { container } = render(<Recipes />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('recetas');
  });
});
