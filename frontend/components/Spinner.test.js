// Import the Spinner component into this file and test
import React from 'react';
import {render, userEvent, screen, fireEvent} from '@testing-library/react'; 
import '@testing-library/jest-dom'
import Spinner from './Spinner'

// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
})

test('renders without errors', () => {
  render(<Spinner/>)
});


test("renders message 'Please Wait' when Spinner is true", () => {
  render(<Spinner on={true}/>);
  const pleaseWaitText = screen.queryByText(/Please wait.../i);
  expect(pleaseWaitText).toBeInTheDocument();


})