import type { PricingPlan } from '../../data/pricing'
import './PricingCard.css'

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={`pricing-card${plan.isPopular ? ' pricing-card--featured' : ''}`}
    >
      {plan.isPopular && (
        <span className="pricing-card__badge" aria-label="Most Popular plan">
          Most Popular
        </span>
      )}
      <h3 className="pricing-card__tier">{plan.tierName}</h3>
      <div className="pricing-card__price">
        <span className="pricing-card__price-amount">${plan.pricePerDay}</span>
        <span className="pricing-card__price-unit">/ day</span>
      </div>
      <ul
        className="pricing-card__features"
        aria-label={`${plan.tierName} features`}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="pricing-card__feature">
            <span className="pricing-card__check" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="pricing-card__cta button-primary" type="button">
        {plan.ctaLabel}
      </button>
    </article>
  )
}
