import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import HomeAboutUs from './HomeAboutUs'

const Home = () => {
  return (
    <div className='h-[100vh] bg-[#0B675A] w-full'>
      {/* < Header/>
      <HeroSection />  */}
      <HomeAboutUs/>
    </div>
  )
}

export default Home
