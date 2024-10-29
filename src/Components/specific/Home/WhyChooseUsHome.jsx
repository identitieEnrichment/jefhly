import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyChooseUsData } from "../../../utils/Constant";
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsHome = () => {
  const circleDesktopRef = useRef(null);
  const circleMobileRef = useRef(null);
  const containerRef = useRef(null);
  const leftPartRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const leftPart = leftPartRef.current;
    const circleDesktop = circleDesktopRef.current;
    const circleMobile = circleMobileRef.current;

    // ScrollTrigger for pinning the left part (Desktop)

    const scrollTriggerDesktop = ScrollTrigger.create({
      trigger: container,
      start: "top 10%",
      end: "bottom bottom",
      pin: leftPart,
      pinSpacing: false,
      scrub: true,
    });
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container,
        start: "top top%", // Trigger animation when the container is slightly in view
        end: "bottom top", 
        scrub: 0.5,
      },
    });
    if(window.innerWidth < 1024){
      const mobileCircleTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top center", // When WhyChooseUsHome enters the viewport
        end: "bottom bottom", // When WhyChooseUsHome leaves the viewport
        onEnter: () => gsap.to('.MobileCircle', { opacity: 1, display: 'block' }), // Show MobileCircle
        onLeave: () => gsap.to('.MobileCircle', { opacity: 0, display: 'none' }), // Hide MobileCircle
        onEnterBack: () => gsap.to('.MobileCircle', { opacity: 1, display: 'block' }), // Show MobileCircle when scrolling back up
        onLeaveBack: () => gsap.to('.MobileCircle', { opacity: 0, display: 'none' }), // Hide MobileCircle when scrolling back up
      });
    }
    
    // Animate both desktop and mobile circles
    const animateCircle = (circle) => {
      gsap.to(circle, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: container,
          start: "top 10%", // Start when the container reaches the top of the viewport
          end: "bottom bottom", // End when the container's bottom reaches the bottom of the viewport
          scrub: 1, // Smoothly animate the changes
        },
      });
    };
    cardsRef.current.forEach((card, index) => {
      gsap.from(
        card,
        { opacity: 0, y: 50 
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Trigger when the card is near the viewport
            end: "top 70%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
            once: true, // Only trigger once
          },
          duration: 1,
          delay: index * 0.2, // Delay for staggered effect
        }
      );
    });


    // Apply the same animation to both circles
    if (circleDesktop) animateCircle(circleDesktop);
    if (circleMobile) animateCircle(circleMobile);

    return () => {
      scrollTriggerDesktop.kill();
      mobileCircleTrigger.kill(); // Cleanup mobile scroll trigger
    };
  }, []);
  return (
    <div
      ref={containerRef}
      id="whyChooseUsContainer"
      className=" w-full h-fit   relative "
    >
        <div className="fixed bottom-3 right-3 hidden  z-50 MobileCircle  lg:hidden">
            <div className="relative size-28 overflow-hidden flex justify-center items-center">
              <img
                className="absolute size-12 object-contain max-h-full z-50"
                src="../ToOptimize/logo.png"
                alt=""
              />

              <svg
                className="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="#E7F0EF"
                  className="stroke-current text-gray-300"
                  strokeWidth="2"
                ></circle>
                <circle
                  ref={circleMobileRef}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-primaryGreen CircleClass"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                ></circle>
              </svg>
            </div>
          </div>
      <h1 className="text-3xl text-secondaryOrange flex justify-center px-4 lg:hidden  text-center font-bold">
              Why Choose us for your smile
            </h1>
      <div className="flex w-full h-full relative">
        
        <div
          ref={leftPartRef}
          id="whyChooseUsLeftPart"
          className="bg-[#E7F0EF] hidden lg:flex w-1/2 lg:px-20 justify-center h-[90vh]  sticky top-0  flex-col"
        >
          <div className="absolute -right-[9rem]">
            <div className="relative size- overflow-hidden flex justify-center items-center">
              <img
                className="absolute size-20 object-contain max-h-full z-50"
                src="../ToOptimize/logo.png"
                alt=""
              />

              <svg
                className="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="#E7F0EF"
                  className="stroke-current text-gray-300"
                  strokeWidth="2"
                ></circle>
                <circle
                  ref={circleDesktopRef}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-primaryGreen CircleClass"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                ></circle>
              </svg>
            </div>
          </div>
          <div className="space-y-10 max-w-md">
            <h1 className="text-5xl text-secondaryOrange font-semibold">
              Why Choose us for your smile
            </h1>
            <p className="text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel.
            </p>
          </div>
        </div>
        <div id="whyChooseUsRightPart" className="lg:w-1/2 w-full text-white px-4  lg:px-20 py-20">
          <div className="space-y-10">
            {whyChooseUsData.map((item ,index) => (
              <div ref={(el)=>cardsRef.current[index] = el}  className="flex lg:justify-end whyChooseUsCard">
                <svg viewBox="0 0 100 40" className="w-[100px] h-[40px]">
                  <text
                    x="50"
                    y="30"
                    textAnchor="middle"
                    fontSize="25"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    fontFamily="sans-serif"
                  >
                    {'0'+ (index+1).toString()}
                  </text>
                </svg>
                <div className="lg:w-1/2 ">
                  <img
                    src={item.imgSrc}
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                  />
                  <h3 className="font-semibold my-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#E9E9E9]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsHome;
