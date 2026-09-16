import './services.css'

const Services = () => {
  return (
    <section id='services' className='services-container'>
      <div className='services-header'>
        <h2>
          We <span className='highlight'>Provide</span> The Best Services With{' '}
          <span className='highlight'>Our Developers</span>
        </h2>
      </div>

      <div className='cards-container'>
        <div className='card'>
          <h2>Digital Marketing</h2>
          <div className='icon'>
            <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#0099e6' strokeWidth='2'>
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' />
            </svg>
          </div>
          <p>
            The Digital Impacts have compiled a list of the best digital marketing companies in the world.
          </p>
        </div>

        <div className='card'>
          <h2>Web Development</h2>
          <div className='icon'>
            <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#0099e6' strokeWidth='2'>
              <polyline points='16 18 22 12 16 6' />
              <polyline points='8 6 2 12 8 18' />
            </svg>
          </div>
          <p>
            Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution.
          </p>
        </div>

        <div className='card'>
          <h2>Graphic Designing</h2>
          <div className='icon'>
            <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#0099e6' strokeWidth='2'>
              <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
              <circle cx='8.5' cy='8.5' r='1.5' />
              <polyline points='21 15 16 10 5 21' />
            </svg>
          </div>
          <p>
            Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design.
          </p>
        </div>

        <div className='card'>
          <h2>Content Writter</h2>
          <div className='icon'>
            <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#0099e6' strokeWidth='2'>
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
              <polyline points='14 2 14 8 20 8'></polyline>
              <line x1='16' y1='13' x2='8' y2='13'></line>
              <line x1='16' y1='17' x2='8' y2='17'></line>
              <polyline points='10 9 9 9 8 9'></polyline>
            </svg>
          </div>
          <p>
            That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media.
          </p>
        </div>

        <div className='card'>
          <h2>SEO</h2>
          <div className='icon'>
            <svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#0099e6' strokeWidth='2'>
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
              <line x1='11' y1='8' x2='11' y2='14'></line>
              <line x1='8' y1='11' x2='14' y2='11'></line>
            </svg>
          </div>
          <p>
            Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search queries.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
