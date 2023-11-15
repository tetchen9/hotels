import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  render(<App />)
  const header = screen.getByText(/Hotels available in Melbourne/i)
  expect(header).toBeInTheDocument()
})
