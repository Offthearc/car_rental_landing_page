import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HeroSection } from '../src/components/HeroSection/HeroSection'

describe('HeroSection', () => {
  it('renders the headline "Your Journey Starts Here"', () => {
    render(<HeroSection />)
    expect(
      screen.getByRole('heading', { name: 'Your Journey Starts Here' }),
    ).toBeInTheDocument()
  })

  it('renders the subheadline text', () => {
    render(<HeroSection />)
    expect(
      screen.getByText(/Explore the world on your terms with DriveEasy/i),
    ).toBeInTheDocument()
  })

  it('renders the value proposition text', () => {
    render(<HeroSection />)
    expect(screen.getByText(/No hidden fees/i)).toBeInTheDocument()
    expect(screen.getByText(/Free cancellation/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 support/i)).toBeInTheDocument()
  })

  it('renders "Browse Fleet" link with href="#fleet"', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'Browse Fleet' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#fleet')
  })

  it('renders "Learn More" link with href="#how-it-works"', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'Learn More' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#how-it-works')
  })

  it('section element has id="home"', () => {
    render(<HeroSection />)
    const section = document.getElementById('home')
    expect(section).toBeInTheDocument()
    expect(section?.tagName.toLowerCase()).toBe('section')
  })
})
