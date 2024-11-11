import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData } from "../../../utils/Constant";
import { FaStar } from "react-icons/fa";

const TestimonialsComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed:10000,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="flex justify-center px-5 lg:px-0 rounded-xl ">
      <Slider {...settings} className=" w-full lg:w-8/12  lg:h-96 mt-8 rounded-xl">
        {testimonialsData.map((testimonials)=>
         <div className="flex justify-center rounded-xl  ">
         <div className=" lg:h-96 h-[28rem]  relative  ">
           <div className="lg:h-[80%] lg:w-[110%] h-[90%] w-[120%] top-6 -left-7 bg-white opacity-60 z-0 rounded-xl absolute right-1  lg:-right-10 lg:top-8 nextElement "></div>
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
                 <p className="text-center my-5">{testimonials.review}</p>
                 <p className="flex justify-center font-semibold ">
                   {testimonials?.name}
                 </p>
                 <p className="flex justify-center text-[#333333] text-sm">
                   {testimonials?.occupation}
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
        )}
       
      </Slider>
    </div>
  );
};

export default TestimonialsComponent;
