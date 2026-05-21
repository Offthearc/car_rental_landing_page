import './App.css'
import { FleetSection } from './components/FleetSection/FleetSection'
import { HeroSection } from './components/HeroSection/HeroSection'
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection'
import { NavHeader } from './components/NavHeader/NavHeader'

function App() {
  return (
    <>
      <NavHeader />
      <main className="app">
        <HeroSection />
        <FleetSection />
        <HowItWorksSection />
      </main>
    </>
  )
}

export default App
