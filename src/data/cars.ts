export interface Car {
  id: string
  name: string
  category: 'Economy' | 'SUV' | 'Luxury'
  pricePerDay: number
  seats: number
  transmission: 'Automatic' | 'Manual'
  fuel: 'Petrol' | 'Diesel' | 'Electric'
  gradient: string
}

export const cars: Car[] = [
  {
    id: 'car-1',
    name: 'Toyota Corolla',
    category: 'Economy',
    pricePerDay: 35,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    gradient:
      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
  },
  {
    id: 'car-2',
    name: 'Honda CR-V',
    category: 'SUV',
    pricePerDay: 65,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    gradient:
      'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
  },
  {
    id: 'car-3',
    name: 'BMW 5 Series',
    category: 'Luxury',
    pricePerDay: 120,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    gradient:
      'linear-gradient(135deg, var(--color-hero-bg) 0%, var(--color-primary-light) 100%)',
  },
  {
    id: 'car-4',
    name: 'Volkswagen Polo',
    category: 'Economy',
    pricePerDay: 28,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Diesel',
    gradient:
      'linear-gradient(135deg, var(--color-surface-variant) 0%, var(--color-border) 100%)',
  },
  {
    id: 'car-5',
    name: 'Ford Explorer',
    category: 'SUV',
    pricePerDay: 75,
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    gradient:
      'linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-hero-bg) 100%)',
  },
  {
    id: 'car-6',
    name: 'Tesla Model 3',
    category: 'Luxury',
    pricePerDay: 95,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    gradient:
      'linear-gradient(135deg, var(--color-on-surface) 0%, var(--color-primary) 100%)',
  },
]
