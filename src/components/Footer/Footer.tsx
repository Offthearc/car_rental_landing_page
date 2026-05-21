import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__brand">
            <span className="footer__logo">&#x1F697; DriveEasy</span>
            <p className="footer__tagline">Your journey starts here.</p>
          </div>

          <div className="footer__links">
            <h3 className="footer__column-heading">Quick Links</h3>
            <ul className="footer__link-list">
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="footer__link">
                  Fleet
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="footer__link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="footer__link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__column-heading">Contact Us</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                &#x1F4CD; 123 Motorway Blvd, Suite 400, New York, NY 10001
              </li>
              <li className="footer__contact-item">
                &#x1F4DE; +1 (800) 555-DRIVE
              </li>
              <li className="footer__contact-item">
                &#x2709;&#xFE0F; hello@driveeasy.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2024 DriveEasy Car Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
