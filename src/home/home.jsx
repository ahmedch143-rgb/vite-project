import './home.css'
import heroImage from '../assets/hero.png'

const Home = () => (
  <section id="home" className="home">
    <div className="hero-overlay" />
    <div className="home-content">
      <span className="eyebrow">🔥 FRESH • HOT • GRILLED</span>
      <h1>BIG FLAVOR.<br /><span>SUPER GRILL.</span></h1>
      <p>Juicy, smoky burgers made fresh to order. Loaded fries, crispy sides and ice-cold drinks — your next favorite meal is here.</p>
      <div className="home-buttons">
        <a className="home-btn primary" href="#menu">Explore Menu</a>
        <a className="home-btn secondary" href="#contact">Order a Burger</a>
      </div>
      <div className="hero-points"><span>🍔 Fresh Beef</span><span>🔥 Flame Grilled</span><span>⭐ Big Taste</span></div>
    </div>
    <div className="hero-visual">
      <div className="glow" />
      <img src={heroImage} alt="Super Grill Burger" />
      <div className="price-badge"><small>STARTING FROM</small><strong>Rs. 499</strong></div>
    </div>
  </section>
)

export default Home