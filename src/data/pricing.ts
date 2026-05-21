export interface PricingPlan {
  id: string
  tierName: string
  pricePerDay: number
  features: string[]
  isPopular: boolean
  ctaLabel: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    tierName: 'Basic',
    pricePerDay: 29,
    features: [
      'Economy vehicles',
      '100 km/day included',
      'Basic insurance',
      '24/7 roadside assistance',
    ],
    isPopular: false,
    ctaLabel: 'Get Started',
  },
  {
    id: 'standard',
    tierName: 'Standard',
    pricePerDay: 59,
    features: [
      'Economy & SUV vehicles',
      '300 km/day included',
      'Comprehensive insurance',
      '24/7 roadside assistance',
      'Free GPS navigation',
      'One free driver upgrade',
    ],
    isPopular: true,
    ctaLabel: 'Most Popular',
  },
  {
    id: 'premium',
    tierName: 'Premium',
    pricePerDay: 99,
    features: [
      'All vehicle classes',
      'Unlimited km',
      'Full coverage insurance',
      '24/7 concierge support',
      'Free GPS & child seat',
      'Airport pickup included',
      'Priority booking',
    ],
    isPopular: false,
    ctaLabel: 'Go Premium',
  },
]
