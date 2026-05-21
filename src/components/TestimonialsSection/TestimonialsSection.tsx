import { testimonials } from '../../data/testimonials'
import { TestimonialCard } from './TestimonialCard'
import './TestimonialsSection.css'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__heading">What Our Customers Say</h2>
        <p className="testimonials__subheading">
          Join thousands of satisfied drivers
        </p>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
