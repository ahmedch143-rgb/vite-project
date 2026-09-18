import './services.css'
import homePic from '../assets/homepic.png'

const items = [
  ['Classic Smash', 'Double smashed beef, melted cheese, fresh lettuce, tomato and our signature sauce.', 'Rs. 499', '🍔'],
  ['Super Grill Special', 'Juicy grilled beef, double cheese, caramelized onions and smoky house sauce.', 'Rs. 699', '🔥'],
  ['Crispy Chicken', 'Crunchy chicken fillet, fresh lettuce, cheese and creamy spicy mayo.', 'Rs. 599', '🍗'],
  ['Loaded Fries', 'Crispy fries loaded with cheese, jalapeños and our special grill sauce.', 'Rs. 349', '🍟'],
  ['BBQ Beef Burger', 'Flame-grilled beef, cheddar, crispy onions and rich BBQ glaze.', 'Rs. 649', '🥩'],
  ['Chilled Drink', 'Ice-cold refreshing drink to complete your Super Grill meal.', 'Rs. 149', '🥤'],
]

const Services = () => (
  <section id="menu" className="services-container">
    <div className="services-header">
      <span>OUR MENU</span>
      <h2>Choose Your <b>Favorite</b></h2>
      <p>Made fresh. Served hot. Built for serious burger lovers.</p>
    </div>
    <div className="menu-grid">
      {items.map(([name, text, price, icon], index) => (
        <article className="card" key={name}>
          <div className="food-art">{index === 0 ? <img src={homePic} alt="" /> : <span>{icon}</span>}</div>
          <div className="card-body">
            <div className="card-top"><h3>{name}</h3><strong>{price}</strong></div>
            <p>{text}</p>
            <a href="#contact" className="card-btn">Add to Order +</a>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Services