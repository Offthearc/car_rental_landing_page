import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from '../src/components/Hero/Hero'

describe('Hero', () => {
  it('renders the headline "Your Journey Starts Here"', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: 'Your Journey Starts Here' }),
    ).toBeInTheDocument()
  })

  it('renders the subheadline text', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Explore the world on your terms with DriveEasy/i),
    ).toBeInTheDocument()
  })

  it('renders the value proposition text', () => {
    render(<Hero />)
    expect(screen.getByText(/No hidden fees/i)).toBeInTheDocument()
    expect(screen.getByText(/Free cancellation/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 support/i)).toBeInTheDocument()
  })

  it('renders "Browse Fleet" link with href="#fleet"', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Browse Fleet' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#fleet')
  })

  it('renders "Learn More" link with href="#how-it-works"', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Learn More' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#how-it-works')
  })

  it('section element has id="home"', () => {
    render(<Hero />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
    expect(section?.tagName.toLowerCase()).toBe('section')
  })
})
