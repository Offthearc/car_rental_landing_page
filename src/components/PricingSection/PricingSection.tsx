import { pricingPlans } from '../../data/pricing'
import { PricingCard } from './PricingCard'
import './PricingSection.css'

export function PricingSection() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-section__container">
        <div className="pricing-section__header">
          <h2 className="pricing-section__heading">
            Simple, Transparent Pricing
          </h2>
          <p className="pricing-section__subheading">
            No hidden fees. Cancel anytime.
          </p>
        </div>
        <div className="pricing-section__grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
