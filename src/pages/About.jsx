import React from "react";
import teamImage from "../images/image-2.jpg";
const About = () => {
  return (
    <div className="h-screen w-full bg-black text-white px-20 pt-24 font-sans">
      <div className="flex gap-4 pt-16 justify-between">
        <div className="flex flex-col gap-6 items-start">
          <p className="text-xl text-fuchsia-400 underline underline-offset-8 decoration-fuchsia-800">
            ABOT INFINITO 2K23
          </p>
          <h1 className="text-5xl font-bold tracking-wide">
            WELCOME TO THE LARGEST TECHFEST
          </h1>
          <p className="w-3/4 leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            nostrum laudantium ipsa excepturi repudiandae ea pariatur? Voluptas
            nesciunt doloremque, aliquam id incidunt nobis quidem fugiat totam
            maxime, distinctio, est qui.
          </p>
          <button className="px-4 py-2 bg-fuchsia-400 rounded-full text-xl flex items-center justify-center">
            Interested
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={teamImage} alt="party image" className="rounded-lg w-4/5" />
        </div>
      </div>
      <div className="flex justify-between pt-12 items-center">
        <div>
          <h3 className="text-fuchsia-600 pb-2">TECHFEST DATE</h3>
          <p className="text-3xl font-semibold w-2/3">
            COUNT EVERY SECOND UNTIL THE EVENT
          </p>
        </div>
        <div className="flex gap-4 w-2/4 justify-around">
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wide text-gray-100">00</p>
            <p className="text-xl text-gray-200">Months</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wide text-gray-200">20</p>
            <p className="text-xl text-gray-200">Days</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wide text-gray-300">14</p>
            <p className="text-xl text-gray-200">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wide text-gray-400">22</p>
            <p className="text-xl text-gray-200">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-6xl font-bold tracking-wide text-gray-500">14</p>
            <p className="text-xl text-gray-200">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
