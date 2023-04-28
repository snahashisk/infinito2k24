import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="fixed font-sans z-10 w-full flex justify-around items-center py-6 bg-black bg-opacity-50 hover:bg-opacity-75 duration-150">
      <h1 className="font-bold text-5xl text-white">
        TECH<span className="text-yellow-400">FEST</span>
      </h1>
      <div>
        <ul className="flex gap-8 text-gray-300 items-center">
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            HOME
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SPEAKER
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            EVENT
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SCHEDULE
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            SPONSOR
          </li>
          <li className="hover:border-b-2 border-yellow-300 hover:text-yellow-300 hover:scale-105 duration-100 cursor-pointer">
            CONTACT
          </li>
          <li>
            <button
              className="bg-yellow-400 text-black py-2 px-6 rounded-full font-medium hover:scale-110 duration-150 flex items-center gap-1 hover:shadow-lg"
              onClick={() =>
                window.open("https://forms.gle/xDKUna9HhdM3qftb7", "_blank")
              }
            >
              REGISTER NOW
              <BiRightArrowAlt className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
