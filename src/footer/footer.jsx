import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-column'>
          <h3>COMPANY</h3>
          <ul>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Why Choose Us</a></li>
            <li><a href='#'>Team</a></li>
            <li><a href='#'>Pricing &amp; Plans</a></li>
            <li><a href='#'>Contacts</a></li>
            <li><a href='#'>Investors</a></li>
          </ul>
        </div>

        <div className='footer-column'>
          <h3>SERVICES</h3>
          <ul>
            <li><a href='#'>Web Design &amp; Development</a></li>
            <li><a href='#'>Why Choose Us</a></li>
            <li><a href='#'>Specialized SEO Services</a></li>
            <li><a href='#'>Specialized Social Services</a></li>
            <li><a href='#'>Specialized Graphics Services</a></li>
            <li><a href='#'>Investors</a></li>
          </ul>
        </div>

        <div className='footer-column'>
          <h3>RESOURCES</h3>
          <ul>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Terms of Services</a></li>
            <li><a href='#'>Help &amp; FAQ</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Site map</a></li>
          </ul>
        </div>

        <div className='footer-column social-column'>
          <div className='follow-btn'>Follow Us</div>
          <div className='social-icons'>
            <a href='#' className='icon'>f</a>
            <a href='#' className='icon'>ig</a>
            <a href='#' className='icon'>in</a>
            <a href='#' className='icon'>tw</a>
          </div>
        </div>
      </div>

      <div className='locations-container'>
        <div className='location-box'>
          <div className='flag flag-usa'></div>
          <h4>USA :</h4>
          <p>1st Avenue, SW, Hickory,NC, USA</p>
          <p>
            Email: <a href='mailto:info@thedigitalimpacts.com'>info@thedigitalimpacts.com</a>
          </p>
        </div>

        <div className='location-box'>
          <div className='flag flag-uk'></div>
          <h4>UK :</h4>
          <p>Oldham Greater Manchester, United Kingdom</p>
          <p>
            Email: <a href='mailto:info@thedigitalimpacts.com'>info@thedigitalimpacts.com</a>
          </p>
        </div>

        <div className='location-box'>
          <div className='flag flag-canada'></div>
          <h4>CANADA :</h4>
          <p>92 Avenue, Surrey, BC, Canada</p>
          <p>
            Email: <a href='mailto:info@thedigitalimpacts.com'>info@thedigitalimpacts.com</a>
          </p>
        </div>
      </div>

      <div className='copyright-bar'>
        <p>Copyright © 2022 The Digital Impacts. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
