import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PricingSection } from '../src/components/PricingSection/PricingSection'

describe('PricingSection', () => {
  it('renders the section heading "Simple, Transparent Pricing"', () => {
    render(<PricingSection />)
    expect(screen.getByText('Simple, Transparent Pricing')).toBeInTheDocument()
  })

  it('renders the subheading "No hidden fees. Cancel anytime."', () => {
    render(<PricingSection />)
    expect(
      screen.getByText('No hidden fees. Cancel anytime.'),
    ).toBeInTheDocument()
  })

  it('renders all three tier names: Basic, Standard, Premium', () => {
    render(<PricingSection />)
    expect(
      screen.getByRole('heading', { name: 'Basic', level: 3 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Standard', level: 3 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Premium', level: 3 }),
    ).toBeInTheDocument()
  })

  it('renders the "Most Popular" badge on the Standard card', () => {
    render(<PricingSection />)
    const badge = screen.getByLabelText('Most Popular plan')
    expect(badge).toBeInTheDocument()
  })

  it('renders exactly 3 CTA buttons', () => {
    render(<PricingSection />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('renders the section with id="pricing"', () => {
    render(<PricingSection />)
    const section = document.getElementById('pricing')
    expect(section).toBeInTheDocument()
  })

  it('renders pricing for each tier', () => {
    render(<PricingSection />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })
})
