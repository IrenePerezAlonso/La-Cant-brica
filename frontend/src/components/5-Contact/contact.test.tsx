import React from 'react';
import Contact from './index';
import { render } from '../../test-utils';

describe('Given a Contact component', () => {
  test('Should render a title', () => {
    const { container } = render(<Contact />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('contacto');
  });
});
