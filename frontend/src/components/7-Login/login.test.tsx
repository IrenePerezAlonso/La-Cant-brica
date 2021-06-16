import React from 'react';
import Login from './index';
import { render } from '../../test-utils';

describe('Given a Login component', () => {
  test('Should render a title', () => {
    const { container } = render(<Login />);
    const chooseTag = container.querySelector('h1');

    expect(chooseTag?.textContent).toBe('login');
  });
});
