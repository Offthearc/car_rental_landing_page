import { useContactForm } from '../../hooks/useContactForm'
import './ContactSection.css'

export function ContactSection() {
  const { fields, errors, submitted, handleChange, handleSubmit } =
    useContactForm()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <div className="contact-section__header">
          <h2 className="contact-section__heading">Get In Touch</h2>
          <p className="contact-section__subheading">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="contact-section__form-wrapper">
          {submitted ? (
            <div className="contact-section__success" role="alert">
              Thank you! We&apos;ll get back to you within 24 hours.
            </div>
          ) : (
            <form
              className="contact-section__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-section__field">
                <label
                  htmlFor="contact-name"
                  className="contact-section__label"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact-section__input"
                  value={fields.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  aria-describedby={
                    errors.name ? 'contact-name-error' : undefined
                  }
                  aria-invalid={errors.name ? true : undefined}
                />
                {errors.name && (
                  <span
                    id="contact-name-error"
                    className="contact-section__error"
                    role="alert"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-section__field">
                <label
                  htmlFor="contact-email"
                  className="contact-section__label"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact-section__input"
                  value={fields.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  aria-describedby={
                    errors.email ? 'contact-email-error' : undefined
                  }
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email && (
                  <span
                    id="contact-email-error"
                    className="contact-section__error"
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-section__field">
                <label
                  htmlFor="contact-message"
                  className="contact-section__label"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className="contact-section__textarea"
                  rows={5}
                  value={fields.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  aria-describedby={
                    errors.message ? 'contact-message-error' : undefined
                  }
                  aria-invalid={errors.message ? true : undefined}
                />
                {errors.message && (
                  <span
                    id="contact-message-error"
                    className="contact-section__error"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <p className="contact-section__disclaimer">
                This form is a demo — no data is sent.
              </p>

              <button type="submit" className="contact-section__submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
