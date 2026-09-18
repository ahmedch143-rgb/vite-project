import { useState } from 'react'
import './workTogether.css'
const WorkTogether = () => {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true) }
  return <section id="contact" className="work-together-section">
    <div className="contact-copy"><span>ORDER / CONTACT</span><h2>Hungry Yet?</h2><p>Tell us what you want and we'll get your Super Grill order started.</p><div className="contact-info"><span>📞 0300-1234567</span><span>📍 Lahore, Pakistan</span></div></div>
    <form className="order-form" onSubmit={submit}><input required placeholder="Your name" /><input required type="tel" placeholder="Phone number" /><select defaultValue=""><option value="" disabled>Select your order</option><option>Super Grill Special</option><option>Classic Smash</option><option>Crispy Chicken</option><option>Loaded Fries</option></select><textarea placeholder="Extra instructions (optional)" rows="3" /><button type="submit">{sent ? 'Order Request Sent ✓' : 'Send Order Request →'}</button></form>
  </section>
}
export default WorkTogether