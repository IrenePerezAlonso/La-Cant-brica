import React from 'react';
import Dashboard from './index';
import { render } from '../../test-utils';

describe('Given a Dashboard component', () => {
  test('Should render a title', () => {
    const { container } = render(<Dashboard />);
    const chooseTag = container.querySelector('h2');

    expect(chooseTag?.textContent).toBe('LA CANTÁBRICA');
  });
});
