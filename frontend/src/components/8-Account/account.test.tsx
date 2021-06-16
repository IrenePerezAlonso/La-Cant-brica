import React from 'react';
import Account from './index';
import { screen, render, fireEvent } from '../../test-utils';

describe('Given a Account component', () => {
  test('Should render a title', () => {
    const { container } = render(<Account />);
    const chooseTag = container.querySelector('h2');

    expect(chooseTag?.textContent).toBe('mi cuenta');
  });

  test('And when onchange is used handleAddress function is invoked', () => {
    render(<Account />);
    fireEvent.change(screen.getByTestId('address-input'), {
      target: { value: 'Bacalao' }
    });
  });

  test('And when add address button is cliked sendData function is invoked', () => {
    render(<Account />);
    fireEvent.click(screen.getByTestId('button-address'), {
      target: { value: 'Bacalao' }
    });
  });

  test('And when logout button is cliked logout function is invoked', () => {
    render(<Account />);
    fireEvent.click(screen.getByTestId('button-logout'), {
      target: { value: 'Bacalao' }
    });
  });
});
