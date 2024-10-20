    import React, { useEffect, useRef } from "react";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    const WhyChooseUsHome = () => {
    const circleRef = useRef(null);
    const containerRef = useRef(null);

    
    
    const leftPartRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const leftPart = leftPartRef.current;
        const circle = circleRef.current;
    
        // Create a single ScrollTrigger for both pinning and animation
        const scrollTrigger = ScrollTrigger.create({
          trigger: container,
          start: "top 10%", // Start when the container reaches the top of the viewport
          end: () => `bottom bottom`, // End when the container's bottom reaches the bottom of the viewport
          pin: leftPart, // Pin the left part
          pinSpacing: false, // Prevent adding additional space when pinning
          scrub: true, // Smoothly animate the changes
        });
    
        // Animate strokeDashoffset from 100 to 0 based on scroll position
        gsap.to(circle, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: container,
            start: "top 10%", // Start when the container reaches the top of the viewport
            end: () => `bottom bottom`, // End when the container's bottom reaches the bottom of the viewport
            scrub: 1, // Smoothly animate the changes
          }
        });
    
        return () => {
          scrollTrigger.kill(); // Cleanup ScrollTrigger when component unmounts
        };
      }, []);
    return (
        <div    ref={containerRef} id="whyChooseUsContainer" className="bg-red- w-full h-fit relative">
        <div className="flex w-full h-full relative">
            <div
            ref={leftPartRef}
            id="whyChooseUsLeftPart"
            className="bg-[#E7F0EF] w-1/2 px-20 justify-center h-screen sticky top-0 flex flex-col"
            >
            <div className="absolute -right-[9rem]">
                <div className="relative size- overflow-hidden flex justify-center items-center">
                <img
                    className="absolute size-20 object-contain max-h-full z-50"
                    src="../images/logo.png"
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
                    fill="white"
                    className="stroke-current text-gray-200 dark:text-neutral-700"
                    strokeWidth="2"
                    ></circle>
                    <circle
                    ref={circleRef}
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-600 dark:text-blue-500"
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
            <div
        
            id="whyChooseUsRightPart"
            className="w-1/2 text-white px-20 py-20"
            >
            <div className="space-y-10">
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
                {/* Other content */}
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
                <div className="flex justify-end">
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
                    01
                    </text>
                </svg>
                <div className="w-1/2">
                    <img
                    src="../images/clinic.jpg"
                    alt="clinic image"
                    className="h-48 w-full rounded-2xl object-cover"
                    />
                    <h3 className="font-semibold my-2">
                    STATE-OF-THE-ART FACILITIES
                    </h3>
                    <p className="text-sm text-[#E9E9E9]">
                    Equipped with the latest dental technology to ensure precise
                    diagnostics and effective treatments
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default WhyChooseUsHome;
