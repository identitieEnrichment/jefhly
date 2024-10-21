import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const HomeAboutUs = () => {
  return (
    <div id="sec-2" className="px-20 py-6 h-screen bg-primaryGreen" >
      <div class="text-white flex justify-between  ">
        <div className="space-y-10 mt-16">
          <h2 className="text-[#89DB7B] font-semibold text-sm">About Us</h2>
          <span className="text-5xl font-semibold ">Patient-Centered Care</span>
          <p className="text-gray-300  max-w-xl opacity-70 ">
            We are dedicated to providing exceptional dental care in a warm and
            welcoming environment. Our team of experienced, compassionate, and
            highly skilled professionals is here to ensure your dental
            experience is comfortable and stress-free.
          </p>
          <div>
            <h3 className="text-white  font-semibold opacity-100">
              Our mission
            </h3>
            <p className="text-gray-300  max-w-xl mt-1 opacity-70">
              At JEFHLY,our mission is to promote optimal oral health and create
              lasting,confident smiles
            </p>
          </div>

          <br></br>
          <div>
            <button className="rounded-full group hover:bg-[#e2842e] hover:text-gray-100  bg-secondaryOrange px-6 py-2 text-white opacity-100 flex items-center space-x-2">
                <span>Learn more</span>
                <div className=" rotate-180 group-hover:rotate-90 transition-all duration-75 ">
                  <IoMdArrowBack className="text-xl font-bold  rotate-45"/>
                </div>
             
            </button>
          </div>
        </div>

        <div className="z-50 mt-20 ">
          <img
            className="size-[29rem] object-cover rounded-tr-[3rem] rounded-bl-[3rem] "
            src="https://media.istockphoto.com/id/1938542779/photo/senior-medical-check-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_CqlGTqQE54yFRS_V1eZIXKuxGOsa5GMAGgCKPfG8s="
            alt=""
          ></img>
        </div>
      </div>
      <br></br>
    </div>

  );
};

export default HomeAboutUs;
