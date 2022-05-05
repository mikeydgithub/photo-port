/* eslint-disable no-unused-vars */
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const mockToggelModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunch ultricie',
    index: 1
};

afterEach(cleanup);

// standard baseline test to render the compnent.
describe('Modal, component', () => {
    it('renders', () => {
        render(<Modal
        onClose={mockToggelModal}
        currentPhoto={currentPhoto}
        />)
    })
    // snapshot test
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - decalre variables
        const { asFragment } = render(<Modal
            onClose= {mockToggelModal}
            currentPhoto={currentPhoto}
            />);

        // Assert the match
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggelModal}
            currentPhoto={currentPhoto}
            />);

        // Act: Simulate click event
        fireEvent.click(getByText('Close this modal'))

        // Assert: Expected matcher
        expect(mockToggelModal).toHaveBeenCalledTimes(1);
    });
})