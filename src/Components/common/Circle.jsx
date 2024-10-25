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
    const updateRadii = () => {
      let outerRadius, innerRadius;
      if (window.innerWidth < 1024) {
        innerRadius = 96;
        outerRadius = 176;
      } else {
        outerRadius = 464;
        innerRadius = 232;
      }

      // Position each outer logo at a unique angle around the outer orbit
      const numOuterLogos = outerLogoRefs.current.length;
      outerLogoRefs.current.forEach((logo, index) => {
        const angle = (index / numOuterLogos) * 360;
        const x = Math.cos((angle * Math.PI) / 180) * outerRadius;
        const y = Math.sin((angle * Math.PI) / 180) * outerRadius;

        gsap.set(logo, {
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });

      // Position each inner logo at a unique angle around the inner orbit
      const numInnerLogos = innerLogoRefs.current.length;
      innerLogoRefs.current.forEach((logo, index) => {
        const angle = (index / numInnerLogos) * 360;
        const x = Math.cos((angle * Math.PI) / 180) * innerRadius;
        const y = Math.sin((angle * Math.PI) / 180) * innerRadius;

        gsap.set(logo, {
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    };

    // Initial setup
    updateRadii();

    // Set up animations for circular rotations
    gsap.to(outerContainerRef.current, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(innerContainerRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });

    // Update radii on resize
    window.addEventListener("resize", updateRadii);
    return () => window.removeEventListener("resize", updateRadii);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 flex justify-center items-center opacity-50">
      <div className="absolute size-[22rem]   lg:w-[58rem] lg:h-[58rem] border-[.6px] flex justify-center items-center border-gray-500  lg:-right-72 right-[50%] translate-x-[50%] lg:translate-x-0  top-0 lg:top-56 rounded-full ">
        {/* Inner Circle */}
        <div className="lg:w-[32rem] size-[12rem] lg:h-[32rem] rounded-full relative ">
          <div className="absolute w-full h-full inset-0 border-[.6px] border-gray-500 rounded-full">
            <div
              ref={innerContainerRef}
              className="absolute w-[32rem] h-[32rem] bg-opacity-50"
            >
              <img
                ref={(el) => (innerLogoRefs.current[1] = el)}
                src="../svg/Tooth.svg"
                alt="Tooth Logo"
                className="absolute left-[50%] top-[50%] hidden lg:block"
              />
            </div>
          </div>
        </div>

        {/* Outer Circle */}
        <div
          ref={outerContainerRef}
          className="absolute size-[22rem] lg:w-[58rem] lg:h-[58rem] bg-opacity-50"
        >
          <img
            ref={(el) => (outerLogoRefs.current[0] = el)}
            src="../svg/Hospital.svg"
            alt="Hospital Logo"
            className="absolute lg:size-28 size-12 opacity-35 left-[50%] top-[50%]"
          />
          <div
            ref={(el) => (outerLogoRefs.current[1] = el)}
            className="absolute left-[50%] top-[50%] opacity-35 text-white opacity-45 text-3xl lg:text-6xl"
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
    </div>
  );
};

export default Circle;
