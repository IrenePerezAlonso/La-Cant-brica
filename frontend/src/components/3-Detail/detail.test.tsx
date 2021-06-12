import React from 'react';
import Detail from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a phone number', () => {
    const { container } = render(<Detail />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('TIENDA');
  });
});
