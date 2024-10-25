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
import BookAnAppoinment from '../Components/specific/Home/BookAnAppoinment'
import Footer from '../Components/layout/Footer'

import Mid from '../Components/specific/Home/Mid'
import ContactUs from './ContactUs'



const Home = () => {
  return (
    <div  id='HomePage' className=' bg-[#0B675A] w-full  font-poppins relative overflow-x-hidden '>

      {/* <Circle />
      <HeroSection /> 
      <HomeAboutUs/>
      <WhyChooseUsHome />
      <WhatWeDo />
      <Testimonials />
      <MeetTeam />
      <BookAnAppoinment/> */}
      <ContactUs/>
    </div>
  )
}

export default Home
