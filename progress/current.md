Feature in progress: F006 — Pricing Plans Section

Plan:
- Create src/data/pricing.ts with PricingPlan interface and 3 static entries (Basic, Standard, Premium)
- Create src/components/PricingSection/PricingCard.tsx and PricingCard.css (tier name, badge for featured, price, features list, CTA button)
- Create src/components/PricingSection/PricingSection.tsx and PricingSection.css (section wrapper with 3-column grid on desktop)
- Update src/App.tsx to render PricingSection after TestimonialsSection
- Create tests/PricingSection.test.tsx validating all acceptance criteria
