import React from 'react'
import HeroSection from './HeroSection'
import Header from './Header'

const Home = () => {
  return (
    <div className='h-[100vh] bg-green-800 w-full'>
      < Header/>
      <HeroSection />
    </div>
  )
}

export default Home
