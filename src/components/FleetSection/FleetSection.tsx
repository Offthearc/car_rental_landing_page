import { cars } from '../../data/cars'
import { CarCard } from './CarCard'
import './FleetSection.css'

export function FleetSection() {
  return (
    <section id="fleet" className="fleet">
      <div className="fleet__container">
        <h2 className="fleet__heading">Our Fleet</h2>
        <p className="fleet__subheading">
          Choose from our wide selection of vehicles
        </p>
        <div className="fleet__grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
