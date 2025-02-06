import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Menushake from './components/Menushake'

const App = () => {
  return (
    <div >
       <Navbar/>
       <Hero/>
       <Menu/>
       <Menushake />
       <About/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
