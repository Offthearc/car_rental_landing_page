import type { Testimonial } from '../../data/testimonials'
import './TestimonialCard.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="testimonial-card__stars"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__header">
        <div
          className="testimonial-card__avatar"
          style={{ background: testimonial.avatarColor }}
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>
        <div className="testimonial-card__identity">
          <strong className="testimonial-card__name">{testimonial.name}</strong>
          <small className="testimonial-card__location">
            {testimonial.location}
          </small>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
      <p className="testimonial-card__quote">{testimonial.quote}</p>
    </article>
  )
}
