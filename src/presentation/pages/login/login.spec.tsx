import React from 'react'
import { render, screen } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should start with inital state', () => {
    render(<Login />)

    expect(screen.getByTestId('error-wrap').childElementCount).toBe(0)
    expect(screen.getByRole('button')).toHaveProperty('disabled')
    expect(screen.getByPlaceholderText(/Digite seu e-mail/i))
    expect(screen.getByPlaceholderText(/Digite sua senha/i))
    expect(screen.getByTestId('email-status').textContent).toBe('🔴')
    expect(screen.getByTestId('password-status').textContent).toBe('🔴')
  })
})
