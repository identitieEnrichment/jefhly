import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
// Register the plugin
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const scrollToSection = (to) => {
    setTimeout(() => {
      const section = document.getElementById(to);
      if (section) {
        gsap.to(window, {
          scrollTo: { y: section, offsetY: 100 }, // Scroll to section with offset
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }, 100);
  };

  return (
    <div
      className={`lg:px-16 px-2 flex     items-center  h-[4rem] lg:h-[5.8rem] fixed top-0 w-full shadow-xl bg-[#2a7668] z-[1000]`}
    >
      <div className="flex justify-between items-center w-full">
        <a href={"/"} className=" size-20 lg:size-28 font-semibold text-white">
          <img
            className=" object-contain  h-full w-full "
            src="../../images/optimized/jefhlyGif.gif"
            alt=""
          />
        </a>
        <div
          className="text-white text-4xl lg:hidden"
          onClick={() => setIsSideBarOpen(true)}
        >
          <IoMdMenu />
        </div>
        <div className=" space-x-4 text-sm hidden lg:flex">
          <div
            onClick={() => scrollToSection("AppoinMentSection")}
            className="px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full"
          >
            Appointment
          </div>
          <div
            onClick={() => scrollToSection("OurServices")}
            className="px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full"
          >
            Our Services
          </div>
          <Link
            to={"/contact"}
            className="px-3 py-2 bg-[#E7F0EF] hover:bg-white cursor-pointer rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div
        id="SidebarContainerr"
        class={`${
          isSideBarOpen
            ? "block h-full w-full absolute inset-0 bg-[rgba(0,0,0,0.6)] invisible"
            : "visible"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div
          id="Sidebar"
          class={`${
            isSideBarOpen
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          } flex flex-col transform w-[250px] h-full overflow-hidden bg-[#095248] fixed top-0 right-0 transition-all duration-500 ease-in-out`}
        >
          <div class="bg-[#084D44] min-h-[100px] max-h-[100px] py-5 flex justify-between items-center px-4 ">
            <div class="space-y-2 whitespace-nowrap ">
              <div href="" class="px-3 flex items-center space-x-1 text-white">
                <img class="h-6" src="../ToOptimize/logoWhite.png" alt="" />
              </div>
              <p class="px-3 text-white text-xs whitespace-nowrap">
                Your Smile, Our Priority..{" "}
              </p>
            </div>
            <div
              className="text-white text-2xl"
              onClick={() => setIsSideBarOpen(false)}
            >
              <IoClose />
            </div>
          </div>
          <div class="h-full  bg-[#095248]">
            <div>
              <div
               onClick={() => {setIsSideBarOpen(false) ;scrollToSection("AppoinMentSection");}}
                class="whitespace-nowrap flex text-white    items-center space-x-5 px-6 py-3 border-b-[.2px] hover:text-black border-b-[#666666] hover:bg-gray-100 rounded-t-sm"
              >

                <p class="text-sm">Book An Appointment</p>
              </div>
              <div
              onClick={() => {setIsSideBarOpen(false) ;scrollToSection("OurServices")} }
                class="whitespace-nowrap flex text-white  items-center space-x-5 px-6 py-3 border-b-[.2px] hover:text-black border-b-[#666666] hover:bg-gray-100 rounded-t-sm"
              >

                <p class="text-sm">Our Services</p>
              </div>
              <Link
              to={'/contact'}
                class="whitespace-nowrap flex  items-center space-x-5 px-6 py-3 border-b-[.2px] hover:text-black border-b-[#666666] hover:bg-gray-100 rounded-t-sm"
              >
                <p class="text-sm text-white">Contact Us</p>
              </Link>
            </div>
          </div>
          <div class="flex-grow"></div>
          <div class="px-2  pb-5">
            <div
              onClick={() => setIsSideBarOpen(false)}
              class="whitespace-nowrap  rounded-md flex  bg-red-600  justify-center items-center space-x-2 px-2 py-3    "
            >
              <img class="h-4" src="/images/logoutwhite.png" alt="" />
              <p class="text-sm  font-medium text-white">Close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
