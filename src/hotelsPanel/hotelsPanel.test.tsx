import React from 'react'
import { render, screen } from '@testing-library/react'
import HotelsPanel from '.'

test('renders the title', () => {
  render(<HotelsPanel />)
  const header = screen.getByText(/Hotels available in Melbourne/i)
  expect(header).toBeInTheDocument()
})
