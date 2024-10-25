import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#073E36] text-white py-8 px-4 lg:px-0">
      <div className=" lg:flex justify-between lg:px-20 w-full  ">
        <div className="mb-8 md:mb-0  ">
          <img
            src="../images/logoWhite.png"
            alt="Company Logo"
            className="w-32 mb-4 text-white"
          />
          <p className="text-gray-400">
            Jefhly Smile Hub No 1,2nd East
            <br />
            Street,Kamarajar Nagar,
            <br />
            Thiruvanmiyur,Chennai-4
          </p>
        </div>

        <div className="lg:flex grid grid-cols-2 lg:space-x-20 ">
          <div>
            <h4 className="font-bold mb-2">Get in touch </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/categories"
                  className="text-gray-400 hover:text-white"
                >
                  email@email.com
                </a>
              </li>
              <li>
                <a
                  href="/newsarrival"
                  className="text-gray-400 hover:text-white"
                >
                  +913838383838{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Quick Links </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  Appointment
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  Contact Us{" "}
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-white">
                  Services{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Social Media</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11 9.95V15h-2v-3h2v-2.1c0-2.08 1.24-3.25 3.13-3.25.91 0 1.87.16 1.87.16v2h-1.05c-1.03 0-1.35.64-1.35 1.29V12h2.7l-.44 3h-2.26v6.95A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2a9.8 9.8 0 0 0-9.8 9.8 9.8 9.8 0 0 0 9.8 9.8 9.8 9.8 0 0 0 9.8-9.8A9.8 9.8 0 0 0 12 2.2zm0 17.6a7.8 7.8 0 1 1 0-15.6 7.8 7.8 0 0 1 0 15.6zm3.8-11.5a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8v-1.4a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v1.4zM12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
