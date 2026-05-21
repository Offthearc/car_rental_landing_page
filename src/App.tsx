import './App.css'
import { NavHeader } from './components/NavHeader/NavHeader'

function App() {
  return (
    <>
      <NavHeader />
      <main className="app">
        <h1 className="app__title">DriveEasy Car Rentals</h1>
        <p className="app__subtitle">
          Your journey starts here. Browse our fleet, choose your car, and hit
          the road.
        </p>
      </main>
    </>
  )
}

export default App
