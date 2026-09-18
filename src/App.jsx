import { useState } from 'react'
import Navbar from './navbar/navbar'
import Home from './home/home'
import Services from './services/services'
import About from './about/about'
import WorkTogether from './workTogether/workTogether'
import Footer from './footer/footer'
import SignIn from './signin/signin'
import './App.css'

function App() {
  const [showSignIn, setShowSignIn] = useState(false)

  if (showSignIn) return <SignIn onBack={() => setShowSignIn(false)} />

  return (
    <>
      <Navbar onSignIn={() => setShowSignIn(true)} />
      <main>
        <Home />
        <Services />
        <About />
        <WorkTogether />
      </main>
      <Footer />
    </>
  )
}

export default App