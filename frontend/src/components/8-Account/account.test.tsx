import React from 'react';
import Account from './index';
import { render } from '../../test-utils';

describe('Given a Account component', () => {
  test('Should render a title', () => {
    const { container } = render(<Account />);
    const chooseTag = container.querySelector('h2');

    expect(chooseTag?.textContent).toBe('mi cuenta');
  });
});
