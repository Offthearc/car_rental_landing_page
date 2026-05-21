import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorksSection } from '../src/components/HowItWorksSection/HowItWorksSection'

describe('HowItWorksSection', () => {
  it('renders the section heading "How It Works"', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { name: 'How It Works' }),
    ).toBeInTheDocument()
  })

  it('renders the subheading text', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByText('Get on the road in three easy steps'),
    ).toBeInTheDocument()
  })

  it('section has id="how-it-works"', () => {
    render(<HowItWorksSection />)
    const section = document.getElementById('how-it-works')
    expect(section).toBeInTheDocument()
    expect(section?.tagName.toLowerCase()).toBe('section')
  })

  it('renders step title "Choose Your Car"', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { name: 'Choose Your Car' }),
    ).toBeInTheDocument()
  })

  it('renders step title "Book Online"', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { name: 'Book Online' }),
    ).toBeInTheDocument()
  })

  it('renders step title "Hit the Road"', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByRole('heading', { name: 'Hit the Road' }),
    ).toBeInTheDocument()
  })

  it('renders step numbers 1, 2, and 3', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders all three step descriptions', () => {
    render(<HowItWorksSection />)
    expect(
      screen.getByText(
        'Browse our wide selection of vehicles and pick the one that fits your needs and budget.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Complete your reservation in minutes with our simple, secure online booking form.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Pick up your car at your chosen location and enjoy the freedom of the open road.',
      ),
    ).toBeInTheDocument()
  })
})
