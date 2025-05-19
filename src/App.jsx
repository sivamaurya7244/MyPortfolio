import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Experiance from './components/Experiance.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast'


function App() {
    return(
        <>
        <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio/>
        <Experiance/>
        <Contact/>
        <Footer/>
        </div>
        <Toaster/>
        </>
    )
  
}

export default App

