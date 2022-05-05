/* eslint-disable jest/no-identical-title */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-unused-vars */
import React from 'react'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

// release memory allocation between tests
afterEach(cleanup)

// create a baseline test
describe('Contact component renders', () => {
    // renders Contact test
    // first test
    it('renders', () => {
    render(<Contact />);
});

    it ('renders', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    })
})

// snapshot test

it ('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
})

it ('renders', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
})



