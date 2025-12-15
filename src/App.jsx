import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import PropertyListing from './Pages/PropertyListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<PropertyListing />} />
    </Routes>
    </>
  )
}

export default App
