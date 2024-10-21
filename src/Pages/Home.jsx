import React, { useEffect } from 'react'
import HeroSection from '../Components/specific/Home/HeroSection'
import Header from '../Components/layout/Header'
import HomeAboutUs from '../Components/specific/Home/HomeAboutUs'
import Circle from '../Components/common/Circle'
import Lenis from '@studio-freight/lenis'
import WhyChooseUsHome from '../Components/specific/Home/WhyChooseUsHome'
import MeetTeam from '../Components/specific/Home/MeetTeam'
import BookAnAppoinment from '../Components/specific/Home/BookAnAppoinment'
import Mid from '../Components/specific/Home/Mid'

const Home = () => {
  return (
    <div  id='HomePage' className=' bg-[#0B675A] w-full  font-poppins relative overflow-x-hidden '>

       {/* <Circle />
      < Header/>
      <HeroSection /> 
      <HomeAboutUs/>
       <WhyChooseUsHome />
      <MeetTeam /> 
      <BookAnAppoinment/> */}
      <Mid/>
    </div>
  )
}

export default Home
