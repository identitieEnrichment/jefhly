import React, { useEffect } from 'react'
import HeroSection from '../Components/specific/Home/HeroSection'
import Header from '../Components/layout/Header'
import HomeAboutUs from '../Components/specific/Home/HomeAboutUs'
import Circle from '../Components/common/Circle'
import Lenis from '@studio-freight/lenis'
import WhyChooseUsHome from '../Components/specific/Home/WhyChooseUsHome'
import MeetTeam from '../Components/specific/Home/MeetTeam'
import WhatWeDo from '../Components/specific/Home/WhatWeDo'
import Testimonials from '../Components/specific/Home/Testimonials'

const Home = () => {
  return (
    <div  id='HomePage' className=' bg-[#0B675A] w-full  font-poppins relative overflow-x-hidden '>

      <Circle />
      {/* < Header/> */}
      <HeroSection /> 
      <HomeAboutUs/>
      <WhyChooseUsHome />
      <WhatWeDo />
      <Testimonials />
      {/* <HeroSection /> 
      <HomeAboutUs/> */}
      {/* <MeetTeam /> */}
    </div>
  )
}

export default Home
