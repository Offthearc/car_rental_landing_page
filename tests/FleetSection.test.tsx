import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FleetSection } from '../src/components/FleetSection/FleetSection'

describe('FleetSection', () => {
  it('renders the section heading "Our Fleet"', () => {
    render(<FleetSection />)
    expect(
      screen.getByRole('heading', { name: 'Our Fleet' }),
    ).toBeInTheDocument()
  })

  it('renders the subheading text', () => {
    render(<FleetSection />)
    expect(
      screen.getByText('Choose from our wide selection of vehicles'),
    ).toBeInTheDocument()
  })

  it('section has id="fleet"', () => {
    render(<FleetSection />)
    const section = document.getElementById('fleet')
    expect(section).toBeInTheDocument()
    expect(section?.tagName.toLowerCase()).toBe('section')
  })

  it('renders all 6 car names', () => {
    render(<FleetSection />)
    expect(screen.getByText('Toyota Corolla')).toBeInTheDocument()
    expect(screen.getByText('Honda CR-V')).toBeInTheDocument()
    expect(screen.getByText('BMW 5 Series')).toBeInTheDocument()
    expect(screen.getByText('Volkswagen Polo')).toBeInTheDocument()
    expect(screen.getByText('Ford Explorer')).toBeInTheDocument()
    expect(screen.getByText('Tesla Model 3')).toBeInTheDocument()
  })

  it('renders a "Rent Now" button for each car card', () => {
    render(<FleetSection />)
    const buttons = screen.getAllByRole('button', { name: 'Rent Now' })
    expect(buttons).toHaveLength(6)
  })

  it('renders category badges including Economy, SUV, and Luxury', () => {
    render(<FleetSection />)
    const economyBadges = screen.getAllByText('Economy')
    const suvBadges = screen.getAllByText('SUV')
    const luxuryBadges = screen.getAllByText('Luxury')
    expect(economyBadges.length).toBeGreaterThanOrEqual(1)
    expect(suvBadges.length).toBeGreaterThanOrEqual(1)
    expect(luxuryBadges.length).toBeGreaterThanOrEqual(1)
  })

  it('renders price per day for each car', () => {
    render(<FleetSection />)
    expect(screen.getByText('$35')).toBeInTheDocument()
    expect(screen.getByText('$65')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$28')).toBeInTheDocument()
    expect(screen.getByText('$75')).toBeInTheDocument()
    expect(screen.getByText('$95')).toBeInTheDocument()
  })

  it('renders specs rows with seat counts and fuel types', () => {
    render(<FleetSection />)
    const seatSpec5 = screen.getAllByText(/5 seats/i)
    expect(seatSpec5.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/7 seats/i)).toBeInTheDocument()
    expect(screen.getByText('Electric')).toBeInTheDocument()
    const dieselItems = screen.getAllByText('Diesel')
    expect(dieselItems.length).toBeGreaterThanOrEqual(1)
  })
})
