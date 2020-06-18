import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Vending Machine App', () => {
  it('render the component', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Vending Machine/i);
    expect(linkElement).toBeInTheDocument();
  });
});

