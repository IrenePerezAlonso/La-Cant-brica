import React from 'react';
import List from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a phone number', () => {
    const { container } = render(<List />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('TIENDA');
  });
});
