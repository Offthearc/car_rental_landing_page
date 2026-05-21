import './App.css'
import { Hero } from './components/Hero/Hero'
import { NavHeader } from './components/NavHeader/NavHeader'

function App() {
  return (
    <>
      <NavHeader />
      <main className="app">
        <Hero />
      </main>
    </>
  )
}

export default App
