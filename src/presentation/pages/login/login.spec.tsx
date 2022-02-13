import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should not render spinner and error on start', () => {
    render(<Login />)

    expect(screen.getByTestId('error-wrap').childElementCount).toBe(0)
  })
})
