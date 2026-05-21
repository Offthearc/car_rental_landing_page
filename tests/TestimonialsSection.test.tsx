import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TestimonialsSection } from '../src/components/TestimonialsSection/TestimonialsSection'

describe('TestimonialsSection', () => {
  it('renders section heading "What Our Customers Say"', () => {
    render(<TestimonialsSection />)
    expect(
      screen.getByRole('heading', { name: 'What Our Customers Say' }),
    ).toBeInTheDocument()
  })

  it('renders subheading "Join thousands of satisfied drivers"', () => {
    render(<TestimonialsSection />)
    expect(
      screen.getByText('Join thousands of satisfied drivers'),
    ).toBeInTheDocument()
  })

  it('section has id="testimonials"', () => {
    render(<TestimonialsSection />)
    const section = document.getElementById('testimonials')
    expect(section).toBeInTheDocument()
    expect(section?.tagName.toLowerCase()).toBe('section')
  })

  it('renders all 4 customer names', () => {
    render(<TestimonialsSection />)
    expect(screen.getByText('Sarah M.')).toBeInTheDocument()
    expect(screen.getByText('James T.')).toBeInTheDocument()
    expect(screen.getByText('Priya K.')).toBeInTheDocument()
    expect(screen.getByText('Marcus R.')).toBeInTheDocument()
  })

  it('renders 4 testimonial cards by quote text', () => {
    render(<TestimonialsSection />)
    expect(
      screen.getByText(
        'Absolutely seamless experience from start to finish! The car was spotless and the whole process took under 5 minutes online.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'DriveEasy made our road trip unforgettable. Great pricing and the staff was incredibly helpful when we needed an upgrade.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Very smooth booking process. The SUV was exactly what we needed for our family trip. Will definitely book again.',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        'Best car rental experience I’ve had. No hidden fees, no hassle. The Tesla was a dream to drive!',
      ),
    ).toBeInTheDocument()
  })

  it('renders 4 article elements (testimonial cards)', () => {
    render(<TestimonialsSection />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })
})
