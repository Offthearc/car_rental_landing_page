import './App.css'
import { HeroSection } from './components/HeroSection/HeroSection'
import { NavHeader } from './components/NavHeader/NavHeader'

function App() {
  return (
    <>
      <NavHeader />
      <main className="app">
        <HeroSection />
      </main>
    </>
  )
}

export default App
