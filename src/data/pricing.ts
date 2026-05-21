export interface PricingPlan {
  id: string
  tier: string
  pricePerDay: number
  features: string[]
  featured: boolean
  ctaLabel: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    tier: 'Basic',
    pricePerDay: 29,
    features: [
      'Economy vehicles',
      '100 km/day included',
      'Basic insurance',
      '24/7 roadside assistance',
    ],
    featured: false,
    ctaLabel: 'Get Started',
  },
  {
    id: 'standard',
    tier: 'Standard',
    pricePerDay: 59,
    features: [
      'Economy & SUV vehicles',
      '300 km/day included',
      'Comprehensive insurance',
      '24/7 roadside assistance',
      'Free GPS navigation',
      'One free driver upgrade',
    ],
    featured: true,
    ctaLabel: 'Most Popular',
  },
  {
    id: 'premium',
    tier: 'Premium',
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
    featured: false,
    ctaLabel: 'Go Premium',
  },
]
