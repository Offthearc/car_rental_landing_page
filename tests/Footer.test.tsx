import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../src/components/Footer/Footer'

describe('Footer', () => {
  it('renders "DriveEasy" brand name', () => {
    render(<Footer />)
    expect(
      screen.getByText(/DriveEasy/, { selector: 'span' }),
    ).toBeInTheDocument()
  })

  it('renders tagline "Your journey starts here."', () => {
    render(<Footer />)
    expect(screen.getByText('Your journey starts here.')).toBeInTheDocument()
  })

  it('renders "Quick Links" heading', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { name: 'Quick Links', level: 3 }),
    ).toBeInTheDocument()
  })

  it('renders all 5 quick nav links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Fleet' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'How It Works' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders "Contact Us" heading', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { name: 'Contact Us', level: 3 }),
    ).toBeInTheDocument()
  })

  it('renders address information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Motorway Blvd/)).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText(/\+1 \(800\) 555-DRIVE/)).toBeInTheDocument()
  })

  it('renders email address', () => {
    render(<Footer />)
    expect(screen.getByText(/hello@driveeasy\.com/)).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(
      screen.getByText(/© 2024 DriveEasy Car Rentals\. All rights reserved\./),
    ).toBeInTheDocument()
  })
})
