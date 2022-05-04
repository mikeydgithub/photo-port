/* eslint-disable no-unused-vars */

// Create the test file and Import React
import React from 'react';

// incorporate the react testing library
// render is to the render the component. cleanup is to prevent memory leaks
import { render, cleanup } from '@testing-library/react';

// import the jest-dom package
// this library offers access to customer matchers that are used to test dom elements.
import '@testing-library/jest-dom/extend-expect';

// import the component we will be testing which is the About component
import About from '..';

// Configure the testing enovironment
// we'll use cleanup function using the afterEach global function from JEst
afterEach(cleanup);

// create a baseline test
describe('About component', () => {
    // renders About test
    // first test
    it('renders', () => {
        render(<About />);
    })

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        // asFragment function which returns a snapshot of the About compnent
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
});
