import type { Car } from '../../data/cars'
import './CarCard.css'

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card">
      <div
        className="car-card__image"
        style={{ background: car.gradient }}
        aria-hidden="true"
      >
        <span className="car-card__icon">🚗</span>
      </div>
      <div className="car-card__body">
        <span className="car-card__badge">{car.category}</span>
        <h3 className="car-card__name">{car.name}</h3>
        <p className="car-card__price">
          <span className="car-card__price-value">${car.pricePerDay}</span>
          {' / day'}
        </p>
        <ul className="car-card__specs" aria-label="Car specifications">
          <li className="car-card__spec">
            <span aria-hidden="true">👥</span>
            {car.seats} seats
          </li>
          <li className="car-card__spec">{car.transmission}</li>
          <li className="car-card__spec">{car.fuel}</li>
        </ul>
        <button className="car-card__cta" type="button">
          Rent Now
        </button>
      </div>
    </article>
  )
}
