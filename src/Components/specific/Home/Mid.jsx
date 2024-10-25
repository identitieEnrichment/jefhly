import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatisticsData } from "../../../utils/Constant";

gsap.registerPlugin(ScrollTrigger);

const Mid = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    const stats = statsRef.current;

    stats.forEach((stat, index) => {
      const finalValue = parseInt(stat.getAttribute("data-target"), 10);
      const midValue = Math.floor(finalValue / 2);
      gsap.fromTo(
        stat,
        { innerText: midValue },
        {
          innerText: finalValue,
          duration: 1,
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          snap: { innerText: 1 }, // Ensure numbers are rounded
          ease: "power1.inOut",
          onUpdate: function () {
            stat.innerText = Math.floor(stat.innerText); // Ensure the number is rounded
          },
        }
      );
    });
  }, []);

  return (
    <div className="lg:flex grid gap-2 grid-cols-2 justify-center lg:space-x-16 lg:px-20">
      {StatisticsData.map((item, index) => (
        <div className="flex flex-col lg:flex-row lg:space-x-5 items-center" key={index}>
          <div className="bg-primaryGreen w-fit p-2">
            <item.icon className="text-white size-9" />
          </div>
          <div className="flex flex-col items-center bg-green-00">
            <div className="flex  items-center lg:space-x-2">
              <h1
                className="lg:text-4xl font-black"
                ref={(el) => (statsRef.current[index] = el)}
                data-target={item.count}
              >
                0
              </h1>
              <span className="text-primaryGreen lg:text-4xl font-black">
                +
              </span>
            </div>

            <p className="text-[#666666] text-sm text-center">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mid;
