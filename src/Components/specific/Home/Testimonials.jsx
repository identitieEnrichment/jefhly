import React, { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../../../utils/Constant";
import { FaStar } from "react-icons/fa";
import { gsap } from "gsap";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const changeTestimonialData = () => {
    setTestimonials((prevTestimonials) => {
      const updatedTestimonials = [...prevTestimonials];
      const firstElement = updatedTestimonials.shift();
      updatedTestimonials.push(firstElement);
      return updatedTestimonials;
    });
  };

  useEffect(() => {
    setTestimonials(testimonialsData);

    const intervalId = setInterval(() => {
      changeTestimonialData();
    }, 6000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  useEffect(() => {
    if (testimonials.length > 0) {
      // Animate both elements simultaneously
      gsap.fromTo(
        ".nextElement",
        { opacity: 0 }, // Start nextElement from opacity 0.3
        {
          opacity: 0.6, // Final opacity for nextElement
          duration: 0.5, // Duration for fading in
        }
      );

      gsap.fromTo(
        ".ActualElement",
        { opacity: 8 }, // Start ActualElement from opacity 0
        {
          opacity: 1, // Final opacity for ActualElement
          duration: 0.5, // Duration for fading in
        }
      );
      gsap.fromTo(
        ".actualElementData",
        { opacity: 0 }, // Start ActualElement from opacity 0
        {
          opacity: 1, // Final opacity for ActualElement
          duration: 2, // Duration for fading in
        }
      );


      
    }
  }, [testimonials]);
  return (
    <div className="">
      <div className="text-white py-20">
        <h1 className="flex justify-center text-3xl lg:text-left text-center lg:text-5xl">What our Customers Say</h1>
        <p className="flex justify-center text-gray-200 text-center lg:text-left text-sm my-2 mb-6">
          Thousands of happy customers that changed their energy use{" "}
        </p>
        <div className="flex justify-center  mt-20 ">
          <div className="lg:w-7/12 w-9/12 lg:h-96 h-[28rem]  relative  ">
            <div className="lg:h-[80%] lg:w-[110%] h-[90%] w-[120%] top-6 -left-7 bg-white opacity-60 z-0 rounded-lg absolute right-1  lg:-right-10 lg:top-8 nextElement "></div>
            <div className="bg-white overflow-auto w-full absolute inset-0 h-full text-black rounded-xl py-5 px-2 lg:px-10 flex flex-col justify-center  space-y-3 ActualElement  ">
              <div className="flex flex-col items-center justify-center actualElementData">
                <div className="flex justify-cente text-green-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className=" ">
                  <p className="text-center my-5">{testimonials[0]?.review}</p>
                  <p className="flex justify-center font-semibold ">
                    {testimonials[0]?.name}
                  </p>
                  <p className="flex justify-center text-[#333333] text-sm">
                    {testimonials[0]?.occupation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
