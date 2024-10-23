import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { sliderData } from "../../../utils/Constant";
gsap.registerPlugin(ScrollToPlugin);
const WhatWeDo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sliders = gsap.utils.toArray('.Slider'); 

    gsap.set(sliders, { width: '8.3333%' });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 5%",
        end: `+=${sliders.length * 100}%`,  // Extend scroll distance based on the number of sliders
        scrub: true,                        
        pin: true,                          
        pinSpacing: true,                   
        onLeave: () => ScrollTrigger.refresh(), 
      },
    });

    sliders.forEach((slider, index) => {
      const previousSlider = sliders[index - 1];

     //for Making first Slider open by default
      if(index === 0){
        gsap.set(slider,{
            width:'25%',
        })
        gsap.set(slider.querySelector(".final"), {
            opacity: 1,
            ease: "power1.inOut",
          }, );
          gsap.set(slider.querySelector(".initial"), {
            opacity: 0,
          },);

      }
       // Animate current slider to expand to 25%
      tl.to(slider, {
        width: '25%',
        duration: 2,  // Adjust this duration as needed for smooth scrolling
        ease: "power1.inOut",
        
      },);

      // Set final content opacity to 1 as the width grows
      tl.to(slider.querySelector(".final"), {
        opacity: 1,
        duration: 2,  // Sync opacity with width change
        ease: "power1.inOut",
      }, '-=2');

      // Animate the previous slider to shrink back to 0%
      if (previousSlider) {
        tl.to(previousSlider, {
          width: '8.333%',
          duration: 2,  // Sync with the current slider's expansion
          ease: "power1.inOut",
        }, '-=2');

        // Set initial content opacity to 1 for the previous slider
        tl.to(previousSlider.querySelector(".initial"), {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        }, '-=2');

        // Set final content opacity to 0 for the previous slider
        tl.to(previousSlider.querySelector(".final"), {
          opacity: 0,
          duration: 2,
          ease: "power1.inOut",
        }, '-=2');
      }

      // Fade out initial content of the current slider as it expands
      tl.to(slider.querySelector(".initial"), {
        opacity: 0,
        duration: .1,
        ease: "power1.inOut",
      }, '-=2');
    });
  }, []);


  return (
    <div
      ref={containerRef}
      className=" w-full -mt-1 bg-gradient-to-b from-[#E7F0EF] to-[#DAE8E6] py-16 "
    >
      <div>
        <h1 className="text-black text-5xl font-bold flex justify-center">
          What &nbsp; <span className="text-secondaryOrange">We Do</span>{" "}
        </h1>
        <div className="px-20 my-20 flex justify-between w-fullSliderContainer">
            {sliderData.map((Slider)=>
                <div className="h-96 w-1/12 relative Slider ">
                <div className="text-black z-50 absolute text-white flex flex-col justify-end w-full h-full px-2 py-4  opacity-0 final ">
                <h1 className="font-semibold text-xl my-2">{Slider.title}</h1>

                <div className="space-y-1 text-sm text-gray-200">
                    {Slider.services.map((item)=>
                     <p>{item}</p>
                    )}
                </div>
                </div>
                <div className=" absolute inset-0 w-full  h-full flex py-16 flex-col justify-end bg-red-900 rounded-xl initial opacity-100">
                <h2 className=" text-white z-50  whitespace-nowrap  font-bold text-xl -rotate-90 ">
                    {Slider.initialText}
                </h2>
                </div>

                <img
                className="h-full w-full rounded-xl absolute inset-0 opacity-100  object-cover"
                src={Slider.image}
                alt=""
                />
                <div className="w-full h-full inset-0 absolute bg-black  rounded-xl opacity-70"></div>
            </div>
            )}
          


          {/* <div className="h-96 w-1/12 relative ">
            <div className="text-black z-50 absolute text-white flex flex-col justify-end w-full h-full px-2 py-4 hidden ">
              <h1 className="font-semibold text-xl my-2">General Dentristry</h1>

              <div className="space-y-1 text-sm text-gray-200">
                <p>Routine Check-up</p>
                <p>Dental X-Ray</p>
                <p>Professional Cleaning</p>
                <p>Tooth Extractions</p>
                <p>Filling and Sealant</p>
                <p>Oral Cancer Screening</p>
              </div>
            </div>
            <div className=" absolute inset-0 w-full h-full flex py-16 flex-col justify-end bg-red-900 rounded-xl ">
              <h2 className=" text-white z-50  whitespace-nowrap  font-bold text-xl -rotate-90 ">
                Cosmetic Dentrisry
              </h2>
            </div>

            <img
              className="h-full w-full rounded-xl absolute inset-0 opacity-100  object-cover"
              src="../images/clinic.jpg"
              alt=""
            />
            <div className="w-full h-full inset-0 absolute bg-black  rounded-xl opacity-70"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
