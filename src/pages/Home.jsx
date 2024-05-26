import React from "react";
import mainImgae from "../images/bgimage-7.jpg";
import mainBg from "../images/main-bg-1.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const bookTicket = () => {
    alert("Tickets will be available from 16th May 2023!!!");
  };

  return (
    <div className="w-full lg:h-screen relative font-sans lg:bg-black lg:bg-opacity-30 md:bg-opacity-30 pb-8 pt pt-24">
      <button
        className="lg:py-2 py-1 lg:px-4 px-3 m-0 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium lg:font-bold absolute lg:-right-32 -right-32 top-1/4 lg:top-1/3 -rotate-90"
        onClick={() =>
          window.open("https://forms.gle/xDKUna9HhdM3qftb7", "_blank")
        }
      >
        <span className="text-slate-200">Register For</span> FLASHFIESTA{" "}
        <span className="text-yellow-300">Win ₹ 500</span>
      </button>
      <img
        src={mainImgae}
        alt="logo"
        className="lg:visible invisible w-full absolute top-0 right-0 h-full -z-50"
      />
      <img
        src={mainBg}
        alt="logo"
        className="visible lg:invisible w-full absolute top-0 right-0 h-full -z-50"
      />
      <div className="lg:flex w-full px-6">
        <div className="lg:px-16 py-8">
          <h1 className="lg:text-9xl md:text-6xl text-6xl w-1/2 font-extrabold py-6 text-yellow-400 text-shadow-lg font-serif">
            INFINITO 2K24
          </h1>
          <h1 className="text-white lg:text-3xl md:text-5xl text-3xl font-semibold lg:w-3/5 font-cursive">
            THE BEST IN CULTURAL AND TECHFEST IN KOLKATA
          </h1>
          <p className="text-gray-200 py-8 lg:w-4/5 leading-7 md:text-xl lg:text-base">
            We are excited to showcase our annual cultural and technical
            extravaganza, which is one of the most awaited events of the year.
            The fest is a melting pot of talent, creativity, and innovation,
            bringing together students from various backgrounds and fields of
            study. At Fest, we strive to provide a fun-filled and engaging
            experience for all participants, sponsors, and attendees.
          </p>
          <button
            className="md:text-2xl md:font-bold bg-yellow-400 text-black py-2 px-6 rounded-full font-medium hover:scale-110 duration-150 flex items-center gap-1 hover:shadow-lg"
            onClick={scrollToAbout}
          >
            EXPLORE MORE
            <BiRightArrowAlt className="text-2xl" />
          </button>
        </div>
        <div className="text-white w-full flex flex-col lg:justify-end lg:items-end lg:pr-16 gap-2 lg:mb-6">
          <h1 className="text-fuchsia-500 lg:text-5xl text-3xl font-semibold">
            4th & 5th July 2024
          </h1>
          <p className="text-lg">
            Thakurpukur, Samali, B.H Road Kolkata : 700104
          </p>
          <button
            className="py-2 px-4 border-2 rounded-lg border-yellow-400 text-yellow-400 text-xl mt-4 hover:bg-yellow-400 hover:text-gray-800 duration-150"
            onClick={bookTicket}
          >
            BUY TICKET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
