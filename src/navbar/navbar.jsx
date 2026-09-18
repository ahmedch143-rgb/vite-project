import './navbar.css'
import ssImage from '../assets/ss.png'

const Navbar = ({ onSignIn }) => (
  <nav className="navbar">
    <a className="brand" href="#home" aria-label="The Digital Impacts home">
      <img src={ssImage} alt="The Digital Impacts logo" />
    </a>
    <ul className="components">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#work-together">Contact</a></li>
    </ul>
    <div className="nav-actions">
      <button type="button" className="btn1 btn-secondary" onClick={onSignIn}>Sign In</button>
      <a className="btn1" href="#work-together">Contact Us</a>
    </div>
  </nav>
)

export default Navbar
