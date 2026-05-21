import './App.css'
import { FleetSection } from './components/FleetSection/FleetSection'
import { HeroSection } from './components/HeroSection/HeroSection'
import { HowItWorksSection } from './components/HowItWorksSection/HowItWorksSection'
import { NavHeader } from './components/NavHeader/NavHeader'
import { PricingSection } from './components/PricingSection/PricingSection'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'

function App() {
  return (
    <>
      <NavHeader />
      <main className="app">
        <HeroSection />
        <FleetSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
    </>
  )
}

export default App
