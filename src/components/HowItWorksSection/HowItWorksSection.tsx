import './HowItWorksSection.css'

interface Step {
  number: number
  icon: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: '🚗',
    title: 'Choose Your Car',
    description:
      'Browse our wide selection of vehicles and pick the one that fits your needs and budget.',
  },
  {
    number: 2,
    icon: '📱',
    title: 'Book Online',
    description:
      'Complete your reservation in minutes with our simple, secure online booking form.',
  },
  {
    number: 3,
    icon: '🛣️',
    title: 'Hit the Road',
    description:
      'Pick up your car at your chosen location and enjoy the freedom of the open road.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__container">
        <h2 className="how-it-works__heading">How It Works</h2>
        <p className="how-it-works__subheading">
          Get on the road in three easy steps
        </p>
        <div className="how-it-works__steps">
          {STEPS.map((step) => (
            <div key={step.number} className="how-it-works__step">
              <div className="how-it-works__step-number">{step.number}</div>
              <div className="how-it-works__step-icon" aria-hidden="true">
                {step.icon}
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
