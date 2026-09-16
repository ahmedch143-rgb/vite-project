import React from 'react'
import './navbar.css'
import ssImage from '../assets/ss.png'

const Navbar = ({ onSignIn }) => {
  return (
    <nav className='navbar'>
      <div className='img'>
        <img src={ssImage} alt='ss' />
      </div>

      <ul className='components'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About Us</a></li>
      </ul>

      <div className='nav-actions'>
        <button type='button' className='btn1 btn-secondary' onClick={onSignIn}>
          Sign In
        </button>
        <button type='button' className='btn1'>Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar
