import './App.css'
import { ContactSection } from './components/ContactSection/ContactSection'
import { FleetSection } from './components/FleetSection/FleetSection'
import { Footer } from './components/Footer/Footer'
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
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
