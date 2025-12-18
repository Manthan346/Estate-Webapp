import HomeProperty from '../components/HomeProperty'
import HeroSection from '../components/HeroSection'

import InfoSection from '../components/InfoSection'
import React from 'react'
import AnimatedTestimonials from '../components/AnimatedTestimonial'
import Logos from '../components/Logos'
import HomeCategory from '../components/HomeCategory'

function Home() {
  return (
    <div>
        <HeroSection />
        <HomeCategory />
        <HomeProperty />
        <InfoSection />
      <AnimatedTestimonials />
      <Logos />
    </div>
  )
}

export default Home