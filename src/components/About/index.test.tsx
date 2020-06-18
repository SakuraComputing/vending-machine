import React from 'react';
import { render } from '@testing-library/react';
import About from './';

describe('About', () => {
    it('should render the form', () => {
       const name = 'Test About';
       const { getByText } = render(<About name={name} />)
       expect(getByText('Test About')).toBeInTheDocument(); 
    });
});
