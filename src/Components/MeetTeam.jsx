import React from "react";
import { teamMembers } from "../utils/Constant.js";

const MeetTeam = () => {
  console.log(teamMembers);
  return (
    <div className="bg-gradient-to-b from-[#0B675A] to-white px-20 py-6 ">
      <div className="flex items-center space-x-2">
        <div className="size-2 rounded-full bg-[#BEF264]"></div>
        <h3 className="text-white text-sm ml-24">Our experts</h3>
      </div>
      <div>
        <h1 className="text-2xl text-white my-4">Meet Our Team</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-14 gap-y-7   ">
        {teamMembers.map((teamMember) => (
          <div className="rounded-md bg-white h-64 min-w-96 flex flex-col items-center justify-center space-y-3 ">
            <img
              className=" size-24 rounded-full "
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
