import React, { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../../../utils/Constant";
import { FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import TestimonialsComponent from "./TestimonialsComponent";
const Testimonials = () => {
  // const [testimonials, setTestimonials] = useState([]);

  // const changeTestimonialData = () => {
  //   setTestimonials((prevTestimonials) => {
  //     const updatedTestimonials = [...prevTestimonials];
  //     const firstElement = updatedTestimonials.shift();
  //     updatedTestimonials.push(firstElement);
  //     return updatedTestimonials;
  //   });
  // };

  // useEffect(() => {
  //   setTestimonials(testimonialsData);

  //   const intervalId = setInterval(() => {
  //     changeTestimonialData();
  //   }, 6000); // Change testimonial every 5 seconds

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);
  // useEffect(() => {
  //   if (testimonials.length > 0) {
  //     // Animate both elements simultaneously
  //     gsap.fromTo(
  //       ".nextElement",
  //       { opacity: 0 }, // Start nextElement from opacity 0.3
  //       {
  //         opacity: 0.6, // Final opacity for nextElement
  //         duration: 0.5, // Duration for fading in
  //       }
  //     );

  //     gsap.fromTo(
  //       ".ActualElement",
  //       { opacity: 8 }, // Start ActualElement from opacity 0
  //       {
  //         opacity: 1, // Final opacity for ActualElement
  //         duration: 0.5, // Duration for fading in
  //       }
  //     );
  //     gsap.fromTo(
  //       ".actualElementData",
  //       { opacity: 0 }, // Start ActualElement from opacity 0
  //       {
  //         opacity: 1, // Final opacity for ActualElement
  //         duration: 2, // Duration for fading in
  //       }
  //     );


      
  //   }
  // }, [testimonials]);
  return (
    <div className="">
      <div className="text-white px-2 py-6 lg:py-20">
        <h1 className="flex justify-center text-3xl lg:text-left text-center lg:text-5xl">What our Customers Say</h1>
        <p className="flex justify-center text-gray-200 text-center lg:text-left text-sm my-2 mb-6">
          Thousands of happy customers that changed their energy use{" "}
        </p>
        <TestimonialsComponent />
        
      </div>
    </div>
  );
};

export default Testimonials;
