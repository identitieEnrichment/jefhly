import React from "react";
import { IoMdArrowBack } from "react-icons/io";
const BookAnAppointment = () => {
  return (
    <form  action="https://api.web3forms.com/submit" method="POST" className="flex flex-col lg:px-20  py-10 lg:py-20 justify-center items-center  p-4 bg-white " id="AppoinMentSection">
      	<input hidden name="redirect" value="/" />
        <input
									type="hidden"
									name="access_key"
									value="8d93b5a5-1058-4ed3-b037-4447a0fd6b2f"
								/>
      <div className=" bg-white  lg:w-9/12 p-0 rounded-xl drop-shadow-xl shadow-xl border-t-[.2px] border-t-gray-200  flex flex-col lg:flex-row">
        <div className="w-full lg:w-5/12">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hospital"
            className="w-full h-full object-cover rounded-t-2xl"
          />
        </div>

        <div className="w-full lg:w-7/12 flex flex-col justify-center p-8">
          <h1 className="font-semibold text-black text-center text-2xl mb-8">
            Book An Appointment
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7 w-fullP
          ">
            <div className="w-full">
              <input
                type="text"
                name="name"
									required
                placeholder="Full Name"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg placeholder:text-sm"
              />
            </div>
            <input type="text"   name="subject" value={"New Appointment"} hidden id="" />
            <div className="w-full ">
              <input
              name="message"
                type="text"
                placeholder="I'm Interested in*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <input
               type="email"
               name="email"

                placeholder="Email*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg placeholder:text-sm"
              />
            </div>
            <div className="w-full">
              <input
              name="phone" id="phone"

                placeholder="Phone Number*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg placeholder:text-sm"
              />
            </div>
          </div>

          <div className="mt-10 text-center">
          <button className="rounded-full text-sm lg:text-base w-full text-center  justify-center  group hover:bg-[#e2842e] hover:text-gray-100  bg-secondaryOrange px-6 py-3 font-semibold text-white opacity-100 flex items-center space-x-2">
                <span>Get a Free Consultation</span>
                <div className=" rotate-180 group-hover:rotate-90 transition-all duration-75 ">
                  <IoMdArrowBack className="text-xl font-bold  rotate-45"/>
                </div>
             
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BookAnAppointment;
