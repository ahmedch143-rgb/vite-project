import './home.css'
import homePic from '../assets/homepic.png'

const Home = () => (
  <section id="home" className="home">
    <div className="home-image-wrap"><img src={homePic} alt="Digital marketing illustration" className="home-image" /></div>
    <div className="home-content">
      <p className="home-tagline"># We are full Services</p>
      <p className="home-agency">Digital Marketing Agency</p>
      <h1>Welcome to the Digital Impacts</h1>
      <p>We partner with our clients with a team of professionals, providing digital marketing solutions designed to help businesses grow online.</p>
      <div className="home-buttons"><a className="home-btn primary" href="#work-together">Message Us Now</a></div>
    </div>
  </section>
)
export default Home
