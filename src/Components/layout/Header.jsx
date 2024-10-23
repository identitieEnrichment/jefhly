import React from 'react'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
    <div className='px-16 py-6 fixed top-0 w-full shadow-xl bg-primaryGreen z-[1000]'>
      <div className='flex justify-between items-center'>
        <div className='text-3xl font-semibold text-white'>
          JEFHLY
        </div>
        <div className='flex space-x-4 text-sm'>
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
