import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoMdMenu } from "react-icons/io";

// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const scrollToSection = (to) => {
    // Use a small delay to ensure DOM elements are rendered
    setTimeout(() => {
      const section = document.getElementById(to);
      if (section) {
        gsap.to(window, {
          scrollTo: { y: section, offsetY: 100 }, // Scroll to section with offset
          duration: 0.5,
          ease: "power2.inOut", 
        });
      }
    }, 100); // Optional delay to make sure the section exists
  };

  return (
    <div className='lg:px-16 px-2 flex     items-center  h-[4rem] lg:h-[5.8rem] fixed top-0 w-full shadow-xl bg-primaryGreen z-[1000]'>
      <div className='flex justify-between items-center w-full'>
        <div className=' size-20 lg:size-28 font-semibold text-white'>
          <img className=' object-contain  h-full w-full ' src="../../images/logoWhite.png" alt="" />
        </div>
        <div className='text-white text-4xl lg:hidden'>
            <IoMdMenu />
        </div>
        <div className=' space-x-4 text-sm hidden lg:flex'>
          <div 
            onClick={() => scrollToSection("AppoinMentSection")} 
            className='px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full'
          >
            Appointment
          </div>
          <div 
          onClick={() => scrollToSection("OurServices")} 
            className='px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full'
          >
            Our Services
          </div>
          <div 
            className='px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full'
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
