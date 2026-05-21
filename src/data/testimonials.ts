export interface Testimonial {
  id: string
  customerName: string
  avatarInitials: string
  avatarColor: string
  rating: number
  quote: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    customerName: 'Sarah M.',
    avatarInitials: 'SM',
    avatarColor: '#1B2B5E',
    rating: 5,
    quote:
      'Absolutely seamless experience from start to finish! The car was spotless and the whole process took under 5 minutes online.',
    location: 'New York, NY',
  },
  {
    id: 't2',
    customerName: 'James T.',
    avatarInitials: 'JT',
    avatarColor: '#F59E0B',
    rating: 5,
    quote:
      'DriveEasy made our road trip unforgettable. Great pricing and the staff was incredibly helpful when we needed an upgrade.',
    location: 'Los Angeles, CA',
  },
  {
    id: 't3',
    customerName: 'Priya K.',
    avatarInitials: 'PK',
    avatarColor: '#2A4080',
    rating: 4,
    quote:
      'Very smooth booking process. The SUV was exactly what we needed for our family trip. Will definitely book again.',
    location: 'Chicago, IL',
  },
  {
    id: 't4',
    customerName: 'Marcus R.',
    avatarInitials: 'MR',
    avatarColor: '#16A34A',
    rating: 5,
    quote:
      'Best car rental experience I’ve had. No hidden fees, no hassle. The Tesla was a dream to drive!',
    location: 'Austin, TX',
  },
]
