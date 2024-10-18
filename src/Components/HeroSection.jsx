import React from "react";
import { BiSupport } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="h-screen bg-[#0B675A] w-full flex flex-col  justify-center text-white px-20">
      <div className="flex items-center justify-between ">
        <div>
          <div className="text-7xl font-semibold">
            <div className="flex items-center">
              <h1>Love</h1>
              <img className="size-16 mx-5 " src="../images/smallTeeth.png"></img>
              <span>your</span>
            </div>

            <h1>smile with us</h1>
          </div>

          <p className="opacity-70 max-w-xl mt-10">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
          <div className="mt-10 flex  space-x-10">
            <div className="flex  items-center space-x-2">
              <div className="bg-[#458B81]  w-fit p-2 rounded-lg text-2xl">
                {" "}
                <BiSupport className="text-white opacity-100" />
              </div>
              <p className="font-medium">Call Support</p>
            </div>

            <div className="flex  items-center space-x-2">
              <div className="bg-[#458B81]  w-fit p-2 rounded-lg text-2xl">
                {" "}
                <MdOutlineCalendarMonth className="text-white opacity-100" />
              </div>
              <p className="font-medium">Flexible Appointments</p>
            </div>

            <div className="flex  items-center space-x-2">
              <div className="bg-[#458B81]  w-fit p-2 rounded-lg text-2xl">
                {" "}
                <TbReportAnalytics className="text-white opacity-100" />
              </div>
              <p className="font-medium">Detailed Report</p>
            </div>
          </div>
          
        </div>
        <div className="size-[30rem]">
          <img src="../images/BiggTooth.png"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
