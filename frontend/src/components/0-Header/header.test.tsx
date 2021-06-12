import React from 'react';
import Header from './index';
import { render } from '../../test-utils';

describe('Given a Footer component', () => {
  test('Should render a phone number', () => {
    const { container } = render(<Header />);
    const chooseTag = container.querySelector('p');

    expect(chooseTag?.textContent).toBe('923 213 508');
  });
});
