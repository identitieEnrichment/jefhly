import React, { useEffect } from "react";
import { teamMembers } from "../../../utils/Constant.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const MeetTeam = () => {
  useEffect(() => {
    // GSAP animation triggered by scroll
    gsap.fromTo(
      ".Card",
      {
        opacity: 0,
        y: 50, // Optional: slide in from 50px below
      },
      {
        opacity: 1,
        y: 0, // Slide back to original position
        duration: 1,
        stagger: 0.3, // Delay between each card animation
        scrollTrigger: {
          trigger: ".MeetTeamContainer", // Trigger when the container comes into view
          start: "top 80%", // Start animation when container is 80% from the top of viewport
          toggleActions: "play none none none", // Play the animation only when scrolling into view
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0B675A] to-white px-20 py-6 MeetTeamContainer  ">
      <div className="flex items-center space-x-2 drop-shadow-xl">
        <div className="size-2 rounded-full bg-[#BEF264]"></div>
        <h3 className="text-white text-sm ml-24">Our experts</h3>
      </div>
      <div>
        <h1 className="text-2xl text-white my-4">Meet Our Team</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-14 gap-y-7   ">
        {teamMembers.map((teamMember) => (
          <div className="rounded-md bg-[#E7F0EF] h-64 min-w-96 flex flex-col items-center justify-center space-y-3 Card ">
            <img
              className=" size-28 rounded-full object-cover "
              src={teamMember.imgSrc}
            ></img>
            <h2 className="font-semibold">{teamMember.name}</h2>
            <p className="text-sm text-center">{teamMember.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTeam;
