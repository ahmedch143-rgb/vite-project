import './navbar.css'
import logo from '../assets/ss.png'

const Navbar = ({ onSignIn }) => (
  <nav className="navbar">
    <a className="brand" href="#home" aria-label="Super Grill Burger home">
      <img src={logo} alt="Super Grill Burger logo" />
      <span>SUPER <b>GRILL</b></span>
    </a>

    <ul className="components">
      <li><a href="#home">Home</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="nav-actions">
      <button type="button" className="order-btn" onClick={onSignIn}>Order Now</button>
    </div>
  </nav>
)

export default Navbar