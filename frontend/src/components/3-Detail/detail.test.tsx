import React from 'react';
import Detail from './index';
import { render } from '../../test-utils';

describe('Given a Detail component', () => {
  test('Should render a title', () => {
    const { container } = render(<Detail />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('TIENDA');
  });
});
