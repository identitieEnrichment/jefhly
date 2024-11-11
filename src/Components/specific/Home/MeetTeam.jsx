import React, { useEffect } from "react";
import { teamMembers } from "../../../utils/Constant.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlipCardComponent from "./FlipCardComponent.jsx";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const MeetTeam = () => {
  useEffect(() => {
    gsap.fromTo(
      ".Card",
      {
        opacity: 0,
        y: 50, 
      },
      {
        opacity: 1,
        y: 0, 
        duration: 1,
        stagger: 0.3, 
        scrollTrigger: {
          trigger: ".MeetTeamContainer", 
          start: "top 80%", 
          toggleActions: "play none none none", 
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0B675A] to-white lg:px-20 px-4 py-6 MeetTeamContainer  ">
      <div className="flex items-center space-x-2 drop-shadow-xl">
        <div className="size-2 rounded-full bg-[#BEF264]"></div>
        <h3 className="text-white text-sm ml-24">Our experts</h3>
      </div>
      <div>
        <h1 className="text-2xl text-white my-4">Meet Our Team</h1>
      </div>
      {/* <div className="grid lg:grid-cols-3 gap-4 grid-cols-2 lg:gap-x-14 lg:gap-y-7   ">
        {teamMembers.map((teamMember) => (
          <div className="rounded-md bg-[#E7F0EF] h-64 w-full lg:min-w-96 flex flex-col items-center justify-center space-y-3 Card ">
            <img
              className=" size-28  rounded-full object-contain "
              src={teamMember.imgSrc}
            ></img>
            <h2 className="font-semibold">{teamMember.name}</h2>
            <p className="text-sm text-center">{teamMember.title}</p>
          </div>
        ))}
      </div> */}
      <FlipCardComponent />
    </div>
  );
};

export default MeetTeam;
