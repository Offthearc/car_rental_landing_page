import './Hero.css'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <h1 className="hero__headline">Your Journey Starts Here</h1>
        <p className="hero__subheadline">
          Explore the world on your terms with DriveEasy — premium cars at
          affordable prices
        </p>
        <p className="hero__value-prop">
          ✓ No hidden fees&nbsp;&nbsp; ✓ Free cancellation&nbsp;&nbsp; ✓ 24/7
          support
        </p>
        <div className="hero__cta-group">
          <a href="#fleet" className="hero__btn hero__btn--primary">
            Browse Fleet
          </a>
          <a href="#how-it-works" className="hero__btn hero__btn--secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
