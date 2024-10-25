import React from "react";
import { IoMdHome } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import { PiLineVerticalBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { CiBasketball } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="h-full w-full bg-[#0b675a] pt-20 px-2 lg:px-20 text-black flex flex-col">
      <div className="flex items-center mt-4 px-4 bg-slate-400 h-20 w-full">
        <IoMdHome />
        <RxSlash />
        <h2 className="font-semibold">Contact Us</h2>
      </div>

      <div className="pt-6 flex items-center w-full">
        <PiLineVerticalBold className="size-10 text-white" />
        <h1 className="font-extrabold text-slate-50 text-4xl mr-2">
          Get <span className="text-orange-500">In</span> Touch
        </h1>
      </div>
      <p className="pt-5 ml-5 text-white">
        Contact our friendly team to book an appointment or ask any questions.
        We are here to help you achieve the perfect smile!
      </p>
      <div className="lg:flex">
        <div className="pt-6 w-full flex justify-center ">
          <div className="bg-opacity-10 border border-white border-opacity-20 p-6 rounded-lg max-w-md w-full mt-6 space-y-11">
            {["Full Name", "Phone Number", "Email", "Subject", "Message"].map(
              (label, index) => (
                <div key={index} className="relative mb-4">
                  <label className="absolute -top-2.5 left-4 text-xs text-gray-200 bg-[#0b675a] px-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-400 rounded-full bg-[#0b675a] text-white placeholder-transparent focus:outline-none"
                    placeholder={label}
                  />
                </div>
              )
            )}

            <button className="w-full py-3 text-white bg-orange-500 rounded-full lg:hidden">
              Submit
            </button>
          </div>
        </div>

        <div className="w-full h-64 lg:h-[80vh] mt-8 md:mt-12 lg:mt-16 flex justify-center">
          <iframe
            className="w-full max-w-4xl h-full rounded-lg border-2 border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.750701799837!2d80.25381117454683!3d12.987790614524188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d95cd3f1857%3A0xa7486208ab4e460!2sJefhly%20Smile%20Hub%20%7C%20Best%20Dental%20Clinic%20in%20Thiruvanmiyur%20%7C%20Dental%20Implant%20%7C%20Invisalign%20%7C%20Root%20Canal%20%7C%20Pediatrics!5e0!3m2!1sen!2sin!4v1729839558735!5m2!1sen!2sin"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
      <div className="px-20 flex justify-center text-xl font-semibold mt-9">
        <button className="bg-secondaryOrange rounded-full text-white flex items-center justify-center space-x-2 w-full py-4">
          <FaTelegramPlane/>
          <p >Send Message</p>
        </button>
      </div>

      <div className="flex justify-center mt-24">
        <div>
          <div className="flex items-center space-x-2">
            <CgMail />
            <p>Jefhlysmile@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhoneFlip />
            <p>+9190000000</p>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-slate-300 rounded-xl mt-7 p-6 lg:hidden">
        <h2 className="font-bold text-black text-2xl mb-4">Contact Details</h2>

        <div className="flex items-center mb-4">
          <FaLocationDot className="mr-3" />
          <p className="text-sm mr-2">
            Jefhly Smile Hub No 1,2nd East Street, Kamarajar Nagar,
            Thiruvanmiyur, Chennai-4
          </p>
        </div>

        <div className="flex items-center mb-4">
          <FaMobileAlt className="mr-3" />
          <p className="text-black">+91 7568945457, +91 8933301980</p>
        </div>

        <div className="flex items-center mb-4">
          <FiMessageCircle className="mr-3" />
          <p className="text-black">JefhlySmilehub@gmail.com</p>
        </div>

        <div className="flex items-center mb-4">
          <CiBasketball className="mr-3" />
          <p className="text-black">http://jefhlysmilehub.com</p>
        </div>

        <div className="flex mt-6">
          <FaFacebook className="mr-4" />
          <LuInstagram className="mr-4" />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
