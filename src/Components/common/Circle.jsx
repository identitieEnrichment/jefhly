import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CiFaceSmile } from "react-icons/ci";
import { IoHappyOutline } from "react-icons/io5";

const Circle = () => {
  const outerContainerRef = useRef(null);
  const outerLogoRefs = useRef([]);

  const innerContainerRef = useRef(null);
  const innerLogoRefs = useRef([]);

  useEffect(() => {
    const outerRadius = 464; // Orbit radius for the outer circle
    const innerRadius = 232; // Orbit radius for the inner circle
    const numOuterLogos = outerLogoRefs.current.length;
    const numInnerLogos = innerLogoRefs.current.length;

    // Position each outer logo at a unique angle around the outer orbit
    outerLogoRefs.current.forEach((logo, index) => {
      const angle = (index / numOuterLogos) * 360; // Spread logos evenly around the outer circle
      const x = Math.cos((angle * Math.PI) / 180) * outerRadius; // Calculate x position
      const y = Math.sin((angle * Math.PI) / 180) * outerRadius; // Calculate y position

      gsap.set(logo, {
        xPercent: -50,
        yPercent: -50,
        x: x, // Horizontal position based on angle
        y: y, // Vertical position based on angle
      });
    });

    // Rotate the outer container to create circular motion
    gsap.to(outerContainerRef.current, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    // Position each inner logo at a unique angle around the inner orbit
    innerLogoRefs.current.forEach((logo, index) => {
      const angle = (index / numInnerLogos) * 360; // Spread logos evenly around the inner circle
      const x = Math.cos((angle * Math.PI) / 180) * innerRadius; // Calculate x position
      const y = Math.sin((angle * Math.PI) / 180) * innerRadius; // Calculate y position

      gsap.set(logo, {
        xPercent: -50,
        yPercent: -50,
        x: x, // Horizontal position based on angle
        y: y, // Vertical position based on angle
      });
    });

    gsap.to(innerContainerRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <div className="absolute  w-[58rem] h-[58rem] border-[.6px] flex justify-center items-center border-gray-500  -right-72 top-56 rounded-full ">
        {/* Inner Circle */}
        <div className="w-[32rem] h-[32rem] rounded-full relative">
          <div className="absolute w-full h-full inset-0 border-[.6px] border-gray-500 rounded-full">
            <div
              ref={innerContainerRef}
              className="absolute w-[32rem] h-[32rem] bg-opacity-50"
            >
              <img
                ref={(el) => (innerLogoRefs.current[1] = el)}
                src="../svg/Tooth.svg"
                alt="Tooth Logo"
                className="absolute left-[50%] top-[50%]"
              />
            </div>
          </div>
        </div>

        {/* Outer Circle */}
        <div
          ref={outerContainerRef}
          className="absolute w-[58rem] h-[58rem] bg-opacity-50"
        >
          <img
            ref={(el) => (outerLogoRefs.current[0] = el)}
            src="../svg/Hospital.svg"
            alt="Hospital Logo"
            className="absolute left-[50%] top-[50%]"
          />
          <div
            ref={(el) => (outerLogoRefs.current[1] = el)}
            className="absolute left-[50%] top-[50%] text-white opacity-45 text-6xl"
          >
            <CiFaceSmile />
          </div>
          {/* <div
            ref={(el) => (outerLogoRefs.current[1] = el)}
            className="absolute left-[50%] top-[50%] text-white opacity-45 text-6xl"
          >
            <IoHappyOutline />
          </div>
           */}
        </div>
      </div>
    </>
  );
};

export default Circle;
