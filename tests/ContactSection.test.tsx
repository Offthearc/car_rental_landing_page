import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContactSection } from '../src/components/ContactSection/ContactSection'

describe('ContactSection', () => {
  it('renders the heading "Get In Touch"', () => {
    render(<ContactSection />)
    expect(
      screen.getByRole('heading', { name: 'Get In Touch', level: 2 }),
    ).toBeInTheDocument()
  })

  it('renders the subheading text', () => {
    render(<ContactSection />)
    expect(
      screen.getByText(/Have a question\? We.d love to hear from you\./),
    ).toBeInTheDocument()
  })

  it('renders form field with accessible label "Your Name"', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('renders form field with accessible label "Email Address"', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders form field with accessible label "Your Message"', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Your Message')).toBeInTheDocument()
  })

  it('renders submit button "Send Message"', () => {
    render(<ContactSection />)
    expect(
      screen.getByRole('button', { name: 'Send Message' }),
    ).toBeInTheDocument()
  })

  it('section has id="contact"', () => {
    render(<ContactSection />)
    const section = document.getElementById('contact')
    expect(section).toBeInTheDocument()
  })

  it('shows success message after valid form submission', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice Smith')
    await user.type(screen.getByLabelText('Email Address'), 'alice@example.com')
    await user.type(
      screen.getByLabelText('Your Message'),
      'Hello, I have a question.',
    )
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(
      screen.getByText(/Thank you! We.ll get back to you within 24 hours\./),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Send Message' }),
    ).not.toBeInTheDocument()
  })

  it('shows error when name field is empty on submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Email Address'), 'alice@example.com')
    await user.type(
      screen.getByLabelText('Your Message'),
      'Hello, I have a question.',
    )
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(screen.queryByText(/Thank you!/)).not.toBeInTheDocument()
  })

  it('shows error when email field is empty on submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice Smith')
    await user.type(
      screen.getByLabelText('Your Message'),
      'Hello, I have a question.',
    )
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Email is required.')).toBeInTheDocument()
  })

  it('shows error when email does not contain @', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice Smith')
    await user.type(screen.getByLabelText('Email Address'), 'notanemail')
    await user.type(
      screen.getByLabelText('Your Message'),
      'Hello, I have a question.',
    )
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument()
  })

  it('shows error when message field is empty on submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice Smith')
    await user.type(screen.getByLabelText('Email Address'), 'alice@example.com')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))

    expect(screen.getByText('Message is required.')).toBeInTheDocument()
  })
})
