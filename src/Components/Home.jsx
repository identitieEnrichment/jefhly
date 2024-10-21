import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import Header from './Header'
import HomeAboutUs from './HomeAboutUs'
import Circle from './Circle'
import Lenis from '@studio-freight/lenis'
import WhyChooseUsHome from './WhyChooseUsHome'
import MeetTeam from './MeetTeam'

const Home = () => {
//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time) {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => {
//         lenis.destroy();
//     };
// }, []);
  return (
    <div  id='HomePage' className=' bg-[#0B675A] w-full  font-poppins relative overflow-x-hidden '>

      <Circle />
      < Header/>
      <HeroSection /> 
      <HomeAboutUs/>
      <WhyChooseUsHome />
      {/* <MeetTeam /> */}
    </div>
  )
}

export default Home
