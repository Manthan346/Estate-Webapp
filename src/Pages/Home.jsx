import HomeProperty from '../components/HomeProperty'
import HeroSection from '../components/HeroSection'
import LandingLists from '../components/LandingLists'
import React from 'react'

function Home() {
  return (
    <div>
        <HeroSection />
        <LandingLists />
        <HomeProperty />
    </div>
  )
}

export default Home