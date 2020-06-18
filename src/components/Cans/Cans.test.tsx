import React from 'react';
import { render } from '@testing-library/react';
import Cans from './';
import canArray from '../../shared/cans'

describe('Cans Component', () => {
    it('should render when cans link selected', () => {
       const { getByText } = render(<Cans canArray={canArray}/>);
       const heading = getByText(/Make a selection/);
       expect(heading).toBeInTheDocument();
    });
    it('should render 2 cans', () => {
        const { getAllByText } = render(<Cans canArray={canArray}/>);
        const items = getAllByText('500ml');

        expect(items).toHaveLength(2);
    });
});
