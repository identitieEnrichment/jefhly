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
import FlipCardComponent from '../Components/specific/Home/FlipCardComponent'
import TestimonialsComponent from '../Components/specific/Home/TestimonialsComponent'



const Home = () => {
  return (
    <div  id='HomePage' className=' bg-[#0B675A] w-full  font-poppins relative overflow-x-hidden  '>

       <Circle />
      <HeroSection /> 
      <HomeAboutUs/>
      <WhyChooseUsHome />
      <WhatWeDo />
      <Testimonials />
      <MeetTeam />
      <BookAnAppoinment/> 
      <a target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" href={`https://wa.me/+919677630248?text=${encodeURIComponent('Hello, I would like to schedule an appointment   ')}`} className='fixed bottom-4 left-5 lg:left-auto  lg:bottom-10 lg:right-10 z-[1000] size-14 lg:size-20 object-contain'>
        <img alt="Chat on WhatsApp" src="../images/whatsap.png" />
      </a>
      {/* <FlipCardComponent /> */}
    
    </div>
  )
}

export default Home
