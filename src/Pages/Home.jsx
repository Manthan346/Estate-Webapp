import HomeProperty from '../components/HomeProperty'
import HeroSection from '../components/HeroSection'
import LandingLists from '../components/LandingLists'
import InfoSection from '../components/InfoSection'
import React from 'react'
import AnimatedTestimonials from '../components/AnimatedTestimonial'
import Logos from '../components/Logos'

function Home() {
  return (
    <div>
        <HeroSection />
        <LandingLists />
        <HomeProperty />
        <InfoSection />
      <AnimatedTestimonials />
      <Logos />
    </div>
  )
}

export default Home