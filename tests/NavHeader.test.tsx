import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NavHeader } from '../src/components/NavHeader/NavHeader'

describe('NavHeader', () => {
  it('renders the DriveEasy logo text', () => {
    render(<NavHeader />)
    expect(screen.getByText('DriveEasy')).toBeInTheDocument()
  })

  it('renders all five nav links', () => {
    render(<NavHeader />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Fleet' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'How It Works' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the Book Now CTA button', () => {
    render(<NavHeader />)
    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('nav links have correct anchor hrefs', () => {
    render(<NavHeader />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '#home',
    )
    expect(screen.getByRole('link', { name: 'Fleet' })).toHaveAttribute(
      'href',
      '#fleet',
    )
    expect(screen.getByRole('link', { name: 'How It Works' })).toHaveAttribute(
      'href',
      '#how-it-works',
    )
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('hamburger button toggles mobile menu visibility on click', async () => {
    const user = userEvent.setup()
    render(<NavHeader />)

    // The hamburger button is visually hidden on desktop via CSS (display:none),
    // but in jsdom media queries are not evaluated, so we query with hidden:true.
    const hamburger = screen.getByRole('button', {
      name: 'Open menu',
      hidden: true,
    })
    expect(hamburger).toBeInTheDocument()

    const navLinks = document.getElementById('nav-links')
    expect(navLinks).not.toHaveClass('nav__links--open')

    await user.click(hamburger)
    expect(navLinks).toHaveClass('nav__links--open')

    const closeButton = screen.getByRole('button', {
      name: 'Close menu',
      hidden: true,
    })
    await user.click(closeButton)
    expect(navLinks).not.toHaveClass('nav__links--open')
  })

  it('uses a nav element with role navigation', () => {
    render(<NavHeader />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
