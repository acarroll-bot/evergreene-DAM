import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke test for App component

test('renders App component with heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/EverGreene DAM — Tag Search/i);
  expect(headingElement).toBeInTheDocument();
});