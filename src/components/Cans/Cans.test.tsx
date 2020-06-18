import React from 'react';
import { render } from '@testing-library/react';
import Cans from './';

describe('Cans Component', () => {
    const canArray = [{
        id: 1,
        desc: 'bollocks'
    }];

    it('should render when cans link selected', () => {
       const { getByText } = render(<Cans canArray={canArray}/>);
       const heading = getByText(/Make a selection/);
       expect(heading).toBeInTheDocument();
    });
});
