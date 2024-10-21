import React from 'react';

const BookAnAppointment = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white p-0 rounded-lg shadow-lg flex flex-col lg:flex-row">
        
        <div className="w-full lg:w-1/2">
          <img
            src="https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=1-EC4Mxf--5u4ItDIzrIOrduXlbKRnbx9xWWtiifrDo="
            alt="Hospital"
            className="w-full h-full object-cover rounded-l-2xl" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8">
          <h1 className="font-semibold text-black text-center text-2xl mb-8">
            Book An Appointment
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7">
            <div className="w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="I'm Interested in*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full px-8 py-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="bg-orange-500 text-white px-6 py-3 w-full rounded-full hover:bg-orange-600">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAnAppointment;
