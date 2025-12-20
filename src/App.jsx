import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import PropertyListing from './Pages/PropertyListing'
import PropertyDetails from './Pages/PropertyDetails'
import Footer from './components/Footer'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<PropertyListing />} />

      <Route path="/details" element={<PropertyDetails />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/aboutus' element={<AboutUs />} />

    </Routes>
    <Footer />
    </>
  )
}

export default App
