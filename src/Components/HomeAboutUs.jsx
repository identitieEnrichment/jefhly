import React from "react";

const HomeAboutUs = () => {
  return (
    <div className="px-16 py-6 ">
      
      <div class="text-white flex justify-between items-center">
        <div>
        <h2 className="text-green-500">About Us</h2>
          <span className="text-3xl font-semibold">Patient-Centered Care</span>
          <p className="text-gray-300 text-sm max-w-xl mt-3">
            We are dedicated to providing exceptional dental care in a warm and
            welcoming environment. Our team of experienced, compassionate, and
            highly skilled professionals is here to ensure your dental
            experience is comfortable and stress-free.
          </p>
          <br></br>
          <h3 className="text-white text-sm font-semibold">Our mission</h3>
          <p className="text-gray-300 text-sm max-w-xl mt-1">
            At JEFHLY,our mission is to promote optimal oral health and create
            lasting,confident smiles
          </p>
          <br></br>
          <div>
            <button className="rounded-2xl bg-orange-500 px-6 py-2 text-white">
              Learn more
            </button>
          </div>
        </div>

        <div>
          <img className="h-96 w-8/12 object-cover rounded-tr-3xl rounded-bl-3xl"
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
