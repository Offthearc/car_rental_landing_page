import { useState } from 'react'
import './NavHeader.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a className="nav__logo" href="#home" aria-label="DriveEasy home">
          🚗 <span className="nav__logo-text">DriveEasy</span>
        </a>

        <button
          className="nav__hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          <span className="nav__hamburger-bar" />
          <span className="nav__hamburger-bar" />
          <span className="nav__hamburger-bar" />
        </button>

        <ul
          id="nav-links"
          className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                className="nav__link"
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav__cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
