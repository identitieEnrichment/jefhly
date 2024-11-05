import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useRef } from "react";
import { sliderData } from "../../../utils/Constant";
import Mid from "./Mid";
gsap.registerPlugin(ScrollToPlugin);
const WhatWeDo = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   gsap.set(".Slider .final", { opacity: 0 });
  //   gsap.timeline()
  //     .to(".Slider .initial", { opacity: 0, duration: 1 })
  //     .to(".Slider .final", { opacity: 1, duration: 1 }, "-=0.5"); // Overlap transition
  // }, []);
  useEffect(() => {
    const context = gsap.context(()=>{
      const sliders = gsap.utils.toArray(".Slider");
      let mm = gsap.matchMedia();
  
      mm.add("(min-width: 1024px)", () => {
        gsap.set(sliders, { width: "8.3333%" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 5%",
            end: `+=${sliders.length * 100}%`, // Extend scroll distance based on the number of sliders
            scrub: true,
            pin: true,
            pinSpacing: true,
            onLeave: () => ScrollTrigger.refresh(),
          },
        });
  
        sliders.forEach((slider, index) => {
          const previousSlider = sliders[index - 1];
  
          //for Making first Slider open by default
          if (index === 0) {
            gsap.set(slider, {
              width: "25%",
            });
            gsap.set(slider.querySelector(".final"), {
              opacity: 1,
              ease: "power1.inOut",
            });
            gsap.set(slider.querySelector(".initial"), {
              opacity: 0,
            });
          }
          // Animate current slider to expand to 25%
          tl.to(slider, {
            width: "25%",
            duration: 2, // Adjust this duration as needed for smooth scrolling
            ease: "power1.inOut",
          });
  
          // Set final content opacity to 1 as the width grows
          tl.to(
            slider.querySelector(".final"),
            {
              opacity: 1,
              duration: 2, // Sync opacity with width change
              ease: "power1.inOut",
            },
            "-=2"
          );
  
          // Animate the previous slider to shrink back to 0%
          if (previousSlider) {
            tl.to(
              previousSlider,
              {
                width: "8.333%",
                duration: 2, // Sync with the current slider's expansion
                ease: "power1.inOut",
              },
              "-=2"
            );
  
            // Set initial content opacity to 1 for the previous slider
            tl.to(
              previousSlider.querySelector(".initial"),
              {
                opacity: 1,
                duration: 2,
                ease: "power1.inOut",
              },
              "-=2"
            );
  
            // Set final content opacity to 0 for the previous slider
            tl.to(
              previousSlider.querySelector(".final"),
              {
                opacity: 0,
                duration: 2,
                ease: "power1.inOut",
              },
              "-=2"
            );
          }
  
          // Fade out initial content of the current slider as it expands
          tl.to(
            slider.querySelector(".initial"),
            {
              opacity: 0,
              duration: 0.1,
              ease: "power1.inOut",
            },
            "-=2"
          );
        });
      });
  
      mm.add("(max-width: 1023px)", () => {
        gsap.set(sliders, { height: "4rem" });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 5%",
            end: `+=${sliders.length * 100}%`, // Extend scroll distance based on the number of sliders
            scrub: true,
            pin: true,
            pinSpacing: true,
            onLeave: () => ScrollTrigger.refresh(),
          },
        });
  
        sliders.forEach((slider, index) => {
          const previousSlider = sliders[index - 1];
  
          //for Making first Slider open by default
          if (index === 0) {
            gsap.set(slider, {
              height: "16rem",
            });
            gsap.set(slider.querySelector(".final"), {
              opacity: 1,
              ease: "power1.inOut",
            });
            gsap.set(slider.querySelector(".initial"), {
              opacity: 0,
            });
          }else{
            gsap.set(slider, {
              height: "4rem",
            });
            gsap.set(slider.querySelector(".final"), {
              opacity: 0,
              ease: "power1.inOut",
            });
            gsap.set(slider.querySelector(".initial"), {
              opacity: 1,
            });
          }
          // Animate current slider to expand to 25%
          tl.to(slider, {
            height:'16rem',
            duration: 2, // Adjust this duration as needed for smooth scrolling
            ease: "power1.inOut",
          });
  
          // Set final content opacity to 1 as the width grows
          tl.to(
            slider.querySelector(".final"),
            {
              opacity: 1,
              duration: 2, // Sync opacity with width change
              ease: "power1.inOut",
            },
            "-=2"
          );
  
          // Animate the previous slider to shrink back to 0%
          if (previousSlider) {
            tl.to(
              previousSlider,
              {
                height:"4rem",
                duration: 2, // Sync with the current slider's expansion
                ease: "power1.inOut",
              },
              "-=2"
            );
  
            // Set initial content opacity to 1 for the previous slider
            tl.to(
              previousSlider.querySelector(".initial"),
              {
                opacity: 1,
                duration: 2,
                ease: "power1.inOut",
              },
              "-=2"
            );
  
            // Set final content opacity to 0 for the previous slider
            tl.to(
              previousSlider.querySelector(".final"),
              {
                opacity: 0,
                duration: 2,
                ease: "power1.inOut",
              },
              "-=2"
            );
          }
  
          // Fade out initial content of the current slider as it expands
          tl.to(
            slider.querySelector(".initial"),
            {
              opacity: 0,
              duration: 0.1,
              ease: "power1.inOut",
            },
            "-=2"
          );
        });
      });
    })
   
    return () => context.revert();
   
  }, []);

  return (
    <div
      ref={containerRef}
      className=" w-full -mt-1 bg-gradient-to-b from-[#E7F0EF] to-[#DAE8E6] py-4  lg:py-20 "
      id="OurServices"
    >
      <div>
        <h1 className="text-black text-5xl font-bold flex justify-center">
          What &nbsp; <span className="text-secondaryOrange">We Do</span>{" "}
        </h1>
        <div className="lg:px-20 px-2 lg:my-20 my-6 lg:flex justify-between w-full SliderContainer lg:space-y-0 space-y-2 ">
          {sliderData.map((Slider) => (
            <div className="lg:h-96  h-16  lg:w-1/12  w-full relative Slider ">
              <div className="text-black z-50 absolute text-white lg:flex flex-col justify-end w-full h-full px-2 lg:py-4   opacity-0 final ">
                <h1 className="font-semibold text-xl my-2  lg:block flex justify-center">{Slider.title}</h1>

                <div className="space-y-1  text-sm text-gray-200 lg:block flex flex-col justify-end lg:h-fit h-[70%]  items-center">
                  {Slider.services.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
              <div className=" absolute inset-0 w-full  h-full flex lg:py-16 flex-col  items-center lg:items-stretch   justify-center lg:justify-end rounded-xl initial opacity-100">
                <h2 className=" text-white z-50    whitespace-nowrap  font-bold text-xl lg:-rotate-90 ">
                  {Slider.title}
                </h2>
              </div>

              <img
                className="h-full w-full rounded-xl absolute inset-0 opacity-100  object-cover"
                src={Slider.image}
                alt=""
              />
              <div className="w-full h-full inset-0 absolute bg-black  rounded-xl opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
      <Mid />
    </div>
  );
};

export default WhatWeDo;
