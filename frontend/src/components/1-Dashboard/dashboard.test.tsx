import React from 'react';
import Dashboard from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a phone number', () => {
    const { container } = render(<Dashboard />);
    const chooseTag = container.querySelector('h2');

    expect(chooseTag?.textContent).toBe('LA CANTÁBRICA');
  });
});
