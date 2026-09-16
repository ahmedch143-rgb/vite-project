import './home.css'
import homePic from '../assets/homepic.png'

const Home = () => {
  return (
    <>
      <section id='home' className='home'>
        <div className='home-image-wrap'>
          <img src={homePic} alt='Home visual' className='home-image' />
        </div>

        <div className='home-content'>
          <p className='home-tagline'># We are full Services</p>
          <p className='home-agency'>Digital Marketing Agency</p>
          <h2>Welcome to the Digital Impacts</h2>
          <p>
            We partner with our clients with a team of professionals, we are able to provide the best
            on our side. We strive to be leaders in digital marketing services worldwide by
            revolutionizing the industry and setting new standards of professionalism and success.
          </p>
          <div className='home-buttons'>
            <button className='home-btn primary'>Message Us Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
